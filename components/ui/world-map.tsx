"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import Image from "next/image";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  avatars: Array<{
    lat: number;
    lng: number;
    url: string;
    size?: number;
  }>;
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
  avatars,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({
    height: 100,
    grid: "diagonal",
    countries: ["TUR"],
    avoidOuterPins: true,
  });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#00000040",
    shape: "circle",
    backgroundColor: "#FAFAFA",
  });

  const projectPoint = (lat: number, lng: number) => {
    const TR_BOUNDS = {
      lat: { min: 36, max: 42 },
      lng: { min: 26, max: 45 },
    };

    const x = Math.max(
      0,
      Math.min(
        800,
        (lng - TR_BOUNDS.lng.min) *
          (800 / (TR_BOUNDS.lng.max - TR_BOUNDS.lng.min))
      )
    );
    const y = Math.max(
      0,
      Math.min(
        400,
        (TR_BOUNDS.lat.max - lat) *
          (400 / (TR_BOUNDS.lat.max - TR_BOUNDS.lat.min))
      )
    );
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 60;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] bg-[#FAFAFA] rounded-lg relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {avatars?.map((avatar, i) => {
          const size = avatar.size || 32; // Avatar boyutunu artırdım
          return (
            <g key={`avatar-group-${i}`}>
              <defs>
                <clipPath id={`avatar-clip-${i}`}>
                  <circle
                    cx={projectPoint(avatar.lat, avatar.lng).x}
                    cy={projectPoint(avatar.lat, avatar.lng).y}
                    r={size / 2}
                  />
                </clipPath>
              </defs>
              <image
                x={projectPoint(avatar.lat, avatar.lng).x - size / 2}
                y={projectPoint(avatar.lat, avatar.lng).y - size / 2}
                href={avatar.url}
                width={size}
                height={size}
                clipPath={`url(#avatar-clip-${i})`}
                preserveAspectRatio="xMidYMid slice" // Görüntü oranını koruyarak sığdırma
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
