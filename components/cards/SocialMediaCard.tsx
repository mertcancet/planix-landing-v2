import Image from "next/image";
import React from "react";
import {
  CalendarCheck,
  CalendarClock,
  CalendarX,
  CheckCircle,
} from "lucide-react";

const SocialMediaCard: React.FC<{ className?: string }> = ({ className }) => {
  const stats = [
    {
      icon: CalendarCheck,
      title: "Aktif Randevular",
      count: "28",
      color: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      icon: CalendarClock,
      title: "Bekleyen",
      count: "15",
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      icon: CalendarX,
      title: "İptal Edilen",
      count: "3",
      color: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      icon: CheckCircle,
      title: "Tamamlanan",
      count: "124",
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
  ];

  return (
    <div className={className}>
      <div className="relative w-[420px] h-[460px]">
        <Image
          src="/assets/Social_Media.svg"
          alt="Background"
          width="420"
          height="460"
          className="absolute -z-10 top-0 left-0"
        />
        <p className="absolute left-12 top-[50px] font-medium z-10 text-sm">
          Randevu İstatistikleri
        </p>
        <div className="absolute left-1/2 -translate-x-1/2 top-24 grid grid-cols-2 gap-3 w-3/4 z-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`p-3 rounded-xl ${stat.color} flex flex-col items-center justify-center`}
              >
                <Icon className={`${stat.textColor} w-5 h-5 mb-1`} />
                <p
                  className={`text-xs font-medium ${stat.textColor} text-center`}
                >
                  {stat.title}
                </p>
                <p className={`text-lg font-bold ${stat.textColor}`}>
                  {stat.count}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;
