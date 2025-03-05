import { cn } from "@/lib/utils";
import React from "react";

const Analytics: React.FC<{
  className?: string;
  color: string;
}> = ({ className, color }) => {
  return (
    <div className="md:[&>*]:scale-100 [&>*]:scale-75">
      <div
        className={cn(
          "w-[220px] h-[242px] rounded-2xl overflow-hidden bg-white",
          "shadow-[0px_7px_15px_0px_#3333331A,0px_27px_27px_0px_#33333317,0px_60px_36px_0px_#3333330D,0px_106px_43px_0px_#33333303,0px_166px_47px_0px_#33333300]",
          className
        )}
      >
        <div
          className="h-10 font-medium text-sm flex items-center p-4 text-green-800"
          style={{
            backgroundColor: color,
          }}
        >
          Randevu Bildirimi
        </div>
        <div className="p-3 space-y-2">
          <p className="text-sm font-medium text-green-600">
            Randevunuz Başarıyla Oluşturuldu
          </p>
          <div className="space-y-2">
            <div className="space-y-1">
              <p className="text-xs font-medium text-neutral-600">Personel</p>
              <p className="text-sm">Ahmet Yılmaz</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-neutral-600">Hizmet</p>
              <p className="text-sm">Saç Kesimi</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-neutral-600">
                Tarih ve Saat
              </p>
              <p className="text-sm">15.03.2024 14:30</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-neutral-600">Adres</p>
              <p className="text-xs">Çayyolu Mah. 2677. Cad. No:2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
