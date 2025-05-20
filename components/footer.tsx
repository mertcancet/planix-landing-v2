"use client";

import React from "react";
import { motion } from "motion/react";
import SocialMediaCard from "./cards/SocialMediaCard";
import PaperPinCard from "./cards/paperPin";
import Link from "next/link";
import { Instagram } from "./icons";
import { Logo } from "./logo";
import Image from "next/image";

const footerData = {
  Sayfalar: [
    {
      name: "Tüm Ürünler",
      path: "/",
    },
    {
      name: "Stüdyo",
      path: "/",
    },
    {
      name: "Müşteriler",
      path: "/",
    },
    {
      name: "Fiyatlandırma",
      path: "/",
    },
    {
      name: "Blog",
      path: "/",
    },
  ],
  Yasal: [
    {
      name: "Gizlilik Politikası",
      path: "/",
    },
    {
      name: "Kullanım Koşulları",
      path: "/",
    },
    {
      name: "Çerez Politikası",
      path: "/",
    },
  ],
};

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" md:h-[850px] h-[750px] p-4 pb-0 relative rounded-[35px] border border-[#E6E6E6] mt-5 mb-11 overflow-hidden flex flex-col justify-between"
    >
      <div
        className="absolute -z-20 top-0 left-0 w-full h-full"
        style={{
          backgroundImage:
            "radial-gradient(circle, #e6e6e6 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />{" "}
      <SocialMediaCard className="absolute hidden xl:block -bottom-44 -left-36 md:-bottom-40 md:-left-20 md:z-10 -z-10 rotate-[20deg] md:[&>*]:scale-100 [&>*]:scale-50" />
      <PaperPinCard className="absolute hidden xl:block -bottom-48 -right-36 md:-bottom-36 md:-right-10 rotate-[-10deg] md:z-10 -z-10 md:[&>*]:scale-100 [&>*]:scale-50" />
      <div className="flex xl:flex-row flex-col ">
        <div className="w-[740px] md:p-9 p-2">
          <div className="flex gap-1">
            <Logo />
            <label className="text-3xl flex items-center justify-start  text-emerald-500 font-bold tracking-tight [text-shadow:0px_0px_3px_rgba(16,185,129,0.62),0px_0px_17px_rgba(17,194,135,0.85)]">
              Planix
            </label>
          </div>
          <p className="md:text-3xl lg:text-5xl font-bold text-lg  md:leading-[54px] md:w-[700px] w-[300px] md:mt-9 mt-0">
            Randevu Yönetimi, SMS Bildirimleri ve Hizmet Planlaması
          </p>
        </div>
        <div className="flex items-center xl:justify-end justify-start w-full md:px-10 xl:px-0">
          <div className="grid grid-cols-2 md:grid-cols-3 justify-end md:w-1/2 w-[80%] md:gap-10 gap-20 xl:mt-32 mt-5 mr-10 px-2">
            {["Sayfalar", "Yasal"].map((item) => (
              <div key={item} className="flex flex-col gap-4">
                <h1 className="font-extrabold">{item}</h1>
                {footerData[item as keyof typeof footerData].map((item) => (
                  <Link
                    className="font-normal text-[#535353] text-nowrap"
                    href={item.path}
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] md:h-[unset]">
        <div className="border-[#CCCCCC] border-dashed border-t w-full h-1 mt:mt-10 mt-32 " />
        <div className="h-20 flex justify-center items-center md:gap-10 gap-2 mb-36 md:mb-0">
          <p className="text-[#737373] font-normal md:text-lg text-xs text-nowrap">
            © Planix
          </p>
          <div className="flex md:gap-5 gap-3 [&>*]:md:scale-100 scale-75">
            <Link href={"https://www.instagram.com/planix.com.tr"}>
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative items-center h-12 w-full z-10 mb-5">
        <Image
          src={"/assets/footer/logo_band.png"}
          alt="iyzico"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </motion.div>
  );
};

export default Footer;
