"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { CheckIcon } from "./icons";
import IconBoxHero from "./cards/iconBoxHero";
import { motion } from "motion/react";

const Pricing = (): JSX.Element => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex flex-col lg:flex-row lg:flex items-center justify-center  space-x-0 lg:space-x-10 space-y-10 lg:space-y-0">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="h-[600px] md:h-[850px] w-full bg-[#F5F5F5] rounded-3xl p-6 lg:p-8 xl:p-16 border"
        >
          <span className="text-black">Deneme Paketi</span>
          <div className="flex items-end gap-1 my-9">
            <span className="text-4xl md:text-4xl text-black -mb-1 font-bold">
              Ücretsiz
            </span>
            <span className="text=[#737373]">/15 gün</span>
          </div>
          <Button variant="primary" className="my-10">
            Hemen Başla
          </Button>
          <div className="space-y-2">
            {[
              "150 randevu hakkı",
              "Müşteri yönetimi",
              "Randevu takibi",
              "SMS bildirimleri",
              "Hizmet yönetimi",
              "7/24 destek",
              "15 gün sonra otomatik sonlanır",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-1">
                <CheckIcon color="#000000" />
                <p className="text-sm md:text-base mt-1">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, translateY: "10%" },
            visible: { opacity: 1, translateY: "0%" },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="relative h-[1050px] w-full my-16 md:my-0 bg-brand rounded-3xl p-6 lg:p-8 xl:p-16 border shadow-[0px_10px_23px_0px_#0000001a,0px_41px_41px_0px_#00000017,0px_92px_55px_0px_#0000000d,0px_164px_66px_0px_#00000003,0px_257px_72px_0px_#00000000]"
        >
          <div className="flex items-center justify-between">
            <span className="text-white text-lg font-semibold">
              Aylık Paket
            </span>
            <div className="bg-white py-1 px-3 rounded-full">Önerilen</div>
          </div>
          <div className="flex items-end gap-1 my-9">
            <span className="text-4xl md:text-7xl text-white -mb-1 font-bold">
              1099
            </span>
            <span className="text-white font-bold">₺/ay</span>
          </div>
          <Button variant="secondary" className="my-10">
            Hemen Başla
          </Button>
          <div className="space-y-3">
            {[
              "Sınırsız randevu hakkı",
              "Tam müşteri yönetimi",
              "Detaylı randevu takibi",
              "Otomatik SMS bildirimleri",
              "Gelişmiş hizmet yönetimi",
              "7/24 öncelikli destek",
              "Ücretsiz kurulum desteği",
              "Personel eğitimi",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1">
                <CheckIcon textColor="#2BC8FD" color="#ffffff" />
                <p className="text-white text-sm md:text-base mt-0.5">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="h-[800px] md:h-[850px] w-full bg-[#F5F5F5] rounded-3xl p-6 lg:p-8 xl:p-16 border"
        >
          <span className="text-black">Yıllık Paket</span>
          <div className="flex items-end gap-1 my-9">
            <span className="text-4xl md:text-7xl text-black -mb-1 font-bold">
              10990
            </span>
            <span className="text=[#737373]">₺/yıl</span>
          </div>
          <Button variant="primary" className="my-10">
            2 Ay Hediye
          </Button>
          <div className="space-y-2">
            {[
              "2 ay ücretsiz kullanım",
              "Yıllık fatura avantajı",
              "Fiyat artışlarından etkilenmez",
              "Sınırsız randevu hakkı",
              "Tam müşteri yönetimi",
              "Detaylı randevu takibi",
              "Otomatik SMS bildirimleri",
              "Gelişmiş hizmet yönetimi",
              "7/24 öncelikli destek",
              "Öncelikli teknik destek",
              "Ücretsiz kurulum desteği",
              "Personel eğitimi",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1">
                <CheckIcon color="#000000" />
                <p className="text-sm md:text-base mt-1">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;

const Button = ({
  children,
  variant,
  className,
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
}) => {
  return (
    <button
      style={{ boxShadow: "0px 4px 14.8px rgba(0, 0, 0, 0.2)" }}
      className={cn(
        "flex items-center justify-center w-full h-10 rounded-2xl p-6 font-medium text-lg",
        variant === "primary"
          ? "bg-gradient-to-b border border-emerald-700 from-emerald-500 to-brand text-white"
          : "bg-white",
        className
      )}
    >
      {children}
    </button>
  );
};

const Saprator = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center my-14",
        className
      )}
    >
      <div className="w-full h-0.5 bg-[#E5E5E5]"></div>
      <div className="absolute left-1/2 flex items-center justify-center size-6 rounded-full bg-white text-[#515151] -ml-2 text-2xl shadow-[0px_0px_0px_0px_#00000000,0px_0px_0px_0px_#00000000,0px_-1px_0px_0px_#E5E5E5]">
        <span className="-mt-1">+</span>
      </div>
    </div>
  );
};
