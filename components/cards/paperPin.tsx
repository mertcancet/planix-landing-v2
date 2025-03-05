import Image from "next/image";
import React from "react";
import Avatar from "../ui/avatar";
import { Dots } from "../icons";

const PaperPinCard = ({ className }: { className?: string }) => {
  const notifications = [
    {
      title: "Randevunuz Başarıyla Oluşturuldu",
      details: {
        personel: "Dr. Mehmet Yılmaz",
        hizmet: "Diş Muayenesi",
        tarih: "18.03.2024 10:30",
        adres: "Çayyolu Mah. 2677. Cad. No:2",
      },
      status: "success",
    },
    {
      title: "Randevu Hatırlatması",
      details: {
        personel: "Uzm. Dr. Ayşe Kaya",
        hizmet: "Genel Kontrol",
        tarih: "19.03.2024 14:15",
        adres: "Çayyolu Mah. 2677. Cad. No:2",
      },
      status: "reminder",
    },
  ];

  return (
    <div className={className}>
      <div className="relative w-[400px] h-[439px]">
        <Image
          src="/assets/Social_Media.svg"
          alt="Social_Media"
          width="405"
          height="439"
          className="absolute -z-10 top-0 left-0"
        />
        <Image
          src={"/assets/paper_clip.png"}
          alt="paper_clip"
          width={400}
          height={400}
          className="absolute left-5 -top-10 font-medium z-10 rotate-[8deg] h-20 w-20 aspect-square"
        />
        <div className="absolute left-12 mt-24 flex flex-col gap-4 w-[300px] h-[439px] z-[-1px]">
          {notifications.map((item) => (
            <div
              key={item.title}
              className="p-4 w-[300px] bg-white rounded-xl shadow-[0px_3px_8px_-1px_#3232470D,0px_0px_1px_0px_#0C1A4B3D]"
            >
              <div className="space-y-2">
                <p
                  className={`text-sm font-medium ${
                    item.status === "success"
                      ? "text-green-600"
                      : "text-blue-600"
                  }`}
                >
                  {item.title}
                </p>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-xs font-medium text-neutral-600">
                      Personel
                    </span>
                    <span className="text-xs">{item.details.personel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs font-medium text-neutral-600">
                      Hizmet
                    </span>
                    <span className="text-xs">{item.details.hizmet}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs font-medium text-neutral-600">
                      Tarih
                    </span>
                    <span className="text-xs">{item.details.tarih}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs font-medium text-neutral-600">
                      Adres
                    </span>
                    <span className="text-xs">{item.details.adres}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaperPinCard;
