"use client";

import Image from "next/image";
import React from "react";
import { Dots, HorizontalDots } from "./icons";
import { motion } from "motion/react";
import IconBoxHero from "./cards/iconBoxHero";
import Analytics from "./cards/Analytics";
import Avatar from "./ui/avatar";
import ChartCard from "./cards/chart";
import { ContentCard } from "./cards/ContentCard";
import {
  Calendar,
  Phone,
  MessageSquare,
  Mail,
  Bell,
  MessageCircle,
} from "lucide-react";

const Grids = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
      <div className="absolute z-20 lg:-top-16 lg:left-[120px] -top-10 left-0 rotate-[-15.11deg]">
        <motion.div
          variants={{
            hidden: { opacity: 0, transform: "scale(0.8) rotate(10deg)" },
            visible: { opacity: 1, transform: "scale(1) rotate(0deg)" },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            delay: 0.2,
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <IconBoxHero />
        </motion.div>
      </div>
      <div className="lg:w-10/12 w-full space-y-5">
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="relative bg-[#FFFFFF] h-[483px] lg:w-2/5 w-full flex flex-col items-center rounded-[26px] p-5 border">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute w-[70%] h-[160px] border border-[#DBDCDF] bg-[#ffffff] mt-24 shadow-[0px_3px_8px_-1px_#3232470D,0px_0px_1px_0px_#0C1A4B3D] rounded-3xl"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="w-[85%] h-[189px] bg-[#FFFFFF] mt-10 py-5 space-y-2 z-10 border border-[#DBDCDF] shadow-[0px_3px_8px_-1px_#3232470D,0px_0px_1px_0px_#0C1A4B3D] rounded-3xl"
            >
              <div className="flex justify-between px-5">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Calendar className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm text-green-600 font-medium">
                  Bugün
                </span>
              </div>
              <h1 className="font-semibold px-5 text-green-700">
                Günlük Program
              </h1>
              <div className="px-5">
                <div className="flex justify-between text-green-600">
                  <span>Tamamlanan</span>
                  <span>8/12 Randevu</span>
                </div>
                <div className="mt-2">
                  <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-2 bg-green-600 rounded-full"
                      variants={{
                        hidden: { width: "0%" },
                        visible: { width: "66%" },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 1 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            <ContentCard
              title="Günün Özeti"
              description="Bugün 4 randevunuz kaldı. Bir sonraki randevunuz saat 14:30'da."
              className="mt-24"
            />
          </div>
          <div className="bg-[#FFFFFF] h-[570px] md:h-[600px] lg:h-[483px] lg:w-3/5 w-full flex flex-col items-center rounded-[26px] p-5 border overflow-hidden">
            <div className="relative w-full h-[293px] mt-5 flex flex-col items-center">
              <div className="absolute -left-[70px] scale-125 top-7 rotate-[12deg]">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, transform: "scale(1) rotate(0deg)" },
                    visible: {
                      opacity: 1,
                      transform: "scale(0.9) rotate(5deg)",
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Analytics color="#DFEBF3" />
                </motion.div>
              </div>
              <div className="absolute -right-[70px] scale-125 top-7 rotate-[-20deg]">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, transform: "scale(1) rotate(0deg)" },
                    visible: {
                      opacity: 1,
                      transform: "scale(0.9) rotate(5deg)",
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Analytics color="#DFEBF3" />
                </motion.div>
              </div>
              <h2 className="text-lg font-semibold text-green-700 mb-4">
                Yaklaşan Randevular
              </h2>
              <div className="space-y-3 z-10">
                {[
                  {
                    name: "Zeynep Kılıç",
                    time: "14:30",
                    service: "Saç Kesimi",
                    status: "Onaylandı",
                    src: "/assets/avatar/avatar1.png",
                  },
                  {
                    name: "Yeşim Sungur",
                    time: "15:15",
                    service: "Saç Boyama",
                    status: "Bekleniyor",
                    src: "/assets/avatar/avatar2.png",
                  },
                  {
                    name: "Büşra Doğan",
                    time: "16:00",
                    service: "Sakal Tıraşı",
                    status: "Onaylandı",
                    src: "/assets/avatar/avatar3.png",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 lg:w-[400px] w-[270px] bg-white border rounded-xl shadow-[0px_3px_8px_-1px_#3232470D,0px_0px_1px_0px_#0C1A4B3D]"
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className="flex items-center">
                      <Avatar
                        src={item.src}
                        className="w-[50px] h-[50px] rounded-full shrink-0"
                      />
                      <div className="grid ml-4">
                        <div className="flex items-center gap-2">
                          <h1 className="font-semibold">{item.name}</h1>
                          <span className="text-sm text-green-600">
                            {item.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="font-normal text-sm text-gray-600">
                            {item.service}
                          </p>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              item.status === "Onaylandı"
                                ? "bg-green-100 text-green-600"
                                : "bg-yellow-100 text-yellow-600"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Phone className="w-4 h-4 text-green-600" />
                    </button>
                  </motion.div>
                ))}
              </div>
              <ContentCard
                title="Randevu Yönetimi"
                description="Tüm randevularınızı tek bir yerden kolayca yönetin ve takip edin."
                className="mt-2"
              />
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-5">
          <ChartCard />
          <div className="relative bg-[#EBEBEB] h-[483px] lg:w-2/5 overflow-hidden w-full mr-0 flex flex-col items-center rounded-[26px] p-5 border-4 border-dashed border-[#D5D5D5]">
            <motion.div
              variants={{
                hidden: { opacity: 0, transform: "scale(1) rotate(0deg)" },
                visible: {
                  opacity: 1,
                  transform: "scale(0.9) rotate(5deg)",
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute lg:mt-10 mt-20 mx-auto flex items-center justify-center inset-x-0"
            >
              <div className="relative w-[500px] h-[300px]">
                <motion.div
                  className="absolute left-0 top-10 "
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col items-center group rotate-[-16deg]">
                    <div className="w-28 h-28 bg-green-100 rounded-2xl flex items-center justify-center  mb-3 shadow-lg transition-all duration-300 group-hover:shadow-green-200/50">
                      <MessageSquare className="w-14 h-14 text-green-600 transition-transform duration-300 group-hover:-rotate-12" />
                    </div>
                    <div className="text-center  space-y-1">
                      <p className="text-sm font-semibold text-green-600 tracking-wide">
                        SMS
                      </p>
                      <p className="text-xs text-gray-600 bg-green-50/80 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                        Otomatik Hatırlatma
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute left-[140px] top-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col items-center group   rotate-[7deg]">
                    <div className="w-28 h-28 bg-blue-100 rounded-2xl flex items-center justify-center mb-3 shadow-lg transition-all duration-300 group-hover:shadow-blue-200/50">
                      <MessageCircle className="w-14 h-14 text-blue-600 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <div className="text-center  space-y-1">
                      <p className="text-sm font-semibold text-blue-600 tracking-wide">
                        WhatsApp
                      </p>
                      <p className="text-xs text-gray-600 bg-blue-50/80 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                        Anlık Mesajlar
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute left-[260px] top-12 "
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col items-center group rotate-[-10deg]">
                    <div className="w-28 h-28 bg-purple-100 rounded-2xl flex items-center justify-center  mb-3 shadow-lg transition-all duration-300 group-hover:shadow-purple-200/50">
                      <Mail className="w-14 h-14 text-purple-600 transition-transform duration-300 group-hover:-rotate-12" />
                    </div>
                    <div className="text-center  space-y-1">
                      <p className="text-sm font-semibold text-purple-600 tracking-wide">
                        E-posta
                      </p>
                      <p className="text-xs text-gray-600 bg-purple-50/80 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                        Bilgilendirme
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute right-0 top-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col items-center group rotate-[12deg]">
                    <div className="w-28 h-28 bg-orange-100 rounded-2xl flex items-center justify-center  shadow-lg transition-all duration-300 group-hover:shadow-orange-200/50">
                      <Bell className="w-14 h-14 text-orange-600 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <div className="text-center  space-y-1 mt-3">
                      <p className="text-sm font-semibold text-orange-600 tracking-wide">
                        Bildirim
                      </p>
                      <p className="text-xs text-gray-600 bg-orange-50/80 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                        Anında Uyarı
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <ContentCard
              title="Otomatik Bildirim Sistemi"
              description="SMS, WhatsApp, E-posta ve anlık bildirimlerle müşterilerinize otomatik randevu hatırlatmaları gönderin."
              className="mt-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grids;
