import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
const Avatar: React.FC<{ src: string; badge?: string; className?: string }> = ({
  src,
  badge,
  className,
}) => {
  return (
    <div className={cn("relative w-[50px] h-[50px]", className)}>
      <Image
        src={src}
        alt="avatar"
        width={50}
        height={50}
        className="rounded-full w-full h-full object-cover"
      />
      {badge && (
        <Image
          src={badge}
          alt="avatar"
          width={20}
          height={20}
          className="absolute bottom-0 right-0"
        />
      )}
    </div>
  );
};

export default Avatar;
