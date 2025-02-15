"use client";

import React from "react";
import Badge from "./ui/badge";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const Header = ({
  className,
  title = "İşletmeniz için Güçlü Randevu Yönetim Sistemi",
  subtitle = "Müşteri yönetimi, randevu takibi, otomatik SMS bildirimleri ve daha fazlası - hepsi tek bir platformda. İşletmenizi büyütmeye odaklanın, randevu takibini bize bırakın.",
  badge = "Özellikler",
}: {
  className?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className={cn(
        "flex flex-col items-center justify-center space-y-3 my-16 md:my-24 tracking-tight text-center",
        className
      )}
    >
      <Badge>{badge}</Badge>
      <h1 className="md:text-4xl font-semibold mb-2 lg:text-5xl text-2xl text-center">
        {title}
      </h1>
      <p className="text-center w-72 md:w-[670px] md:text-base lg:text-lg text-sm px-1">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default Header;
