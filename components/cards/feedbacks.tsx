"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Feedbacks = (): JSX.Element => {
  return (
    <div className="w-full flex items-center justify-center mt-10 md:mt-40 mb-10">
      <div className="w-full mx-auto max-w-7xl flex justify-between gap-5">
        <div className="flex gap-6 lg:flex-row flex-col h-full lg:h-[1000px] w-full">
          <div className="space-y-6 w-full">
            <Card
              quote="PLANİX sayesinde randevu yönetimimiz tamamen değişti. Müşterilerimize otomatik SMS bildirimleri gönderme özelliği ve kolay kullanımlı arayüzü ile işlerimizi çok kolaylaştırdı. Özellikle müşteri bilgilerini tek yerden yönetebilmek ve geçmiş randevu kayıtlarına anında erişebilmek işletmemiz için büyük avantaj sağladı."
              name="Yeşim Sungur"
              role="Güzellik Salonu Sahibi"
              src="/assets/avatar/avatar2.png"
              className="lg:h-2/3 bg-white shadow-[0px_14px_30px_0px_#0000000D,0px_54px_54px_0px_#0000000A,0px_122px_73px_0px_#00000008,0px_217px_87px_0px_#00000003,0px_340px_95px_0px_#00000000]"
            />
            <Card
              quote="PLANİX, işletmemizin randevu yönetimini tamamen değiştirdi. Müşteri bilgilerini tek bir yerden yönetebilmek ve geçmiş randevu kayıtlarına anında erişebilmek büyük avantaj sağladı."
              name="Mehmet Demir"
              role="Kuaför Salonu Sahibi"
              src="https://images.unsplash.com/photo-1638347419042-40d24bb64d0d?q=80&w=3130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="lg:h-1/3"
            />
          </div>
          <div className="space-y-6 w-full">
            <Card
              quote="PLANİX'in SMS hatırlatma sistemi sayesinde randevu kaçırma oranımız %90 azaldı. Müşteri bilgilerini, randevu geçmişini ve özel notları tek yerden yönetebilmek işimizi çok kolaylaştırdı. Özellikle personel planlaması ve kaynak yönetimi konusunda büyük fayda sağladı."
              name="Zeynep Kılıç"
              role="Nail Artist"
              src="/assets/avatar/avatar1.png"
              className="lg:h-1/3"
            />
            <Card
              quote="PLANİX'in özelleştirilebilir yapısı ve esnekliği gerçekten mükemmel. Sistemin SMS hatırlatma özelliği ve randevu takip sistemi sayesinde müşteri memnuniyetimiz arttı. Teknik destek ekibi her zaman yanımızda ve yardımcı oluyor. Özellikle yoğun sezonlarda randevu planlaması yapmak çok daha kolay hale geldi. Müşterilerimizin özel isteklerini ve notlarını kaydetme özelliği sayesinde daha kişiselleştirilmiş bir hizmet sunabiliyoruz. PLANİX'in sağladığı detaylı raporlama özellikleri ile işletmemizin performansını daha iyi analiz edebiliyoruz."
              name="Büşra Doğan"
              role="Spa Merkezi Müdürü"
              src="/assets/avatar/avatar3.png"
              className="lg:h-2/3"
            />
          </div>
          <div className="space-y-6 w-full">
            <Card
              quote="PLANİX'in SMS entegrasyonu ve randevu takip sistemi işletmemizin verimliliğini artırdı. Özellikle müşteri bilgilerini detaylı şekilde kaydetme ve geçmiş randevuları görüntüleme özelliği çok faydalı. Personel planlaması da artık çok daha kolay."
              name="Efe Başaran"
              role="Berber Salonu Sahibi"
              src="/assets/avatar/avatar4.png"
              className="lg:h-1/3"
            />
            <Card
              quote="PLANİX sayesinde danışanlarımın beslenme programlarını ve takiplerini çok daha sistemli yapabiliyorum. Kişisel ölçüm kayıtları, diyet geçmişi ve özel notları tek platformda tutabilmek işimi kolaylaştırıyor. SMS hatırlatmaları sayesinde danışanlarım randevularını kaçırmıyor ve düzenli kontrollere geliyorlar. Özellikle online danışmanlık hizmetlerimde randevu planlaması artık çok daha kolay."
              name="Dr. Ayşe Demir"
              role="Uzman Diyetisyen"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3"
              className="lg:h-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;

const Card: React.FC<{
  className?: string;
  quote?: string;
  src?: string;
  name?: string;
  role?: string;
}> = ({
  className,
  quote = "The ",
  src = "/assets/avatar/avatar.png",
  name = "Manu Arora",
  role = "Founder of Aceternity",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className={cn(
        "flex flex-col gap-4 md:min-h-[600px] xl:min-h-[400px] h-full justify-between w-full rounded-[35px] border border=[#DBDCDE] p-10 bg-[#F5F5F5]",
        className
      )}
    >
      <p className="text-sm md:text-lg text-[#3C3C3C] md:leading-8 font-normal mb-8 md:max-h-36">
        {quote}
      </p>
      <div className="flex items-center gap-4">
        <Image
          className="rounded-lg aspect-square object-cover"
          src={src}
          alt="avatar"
          width="50"
          height="50"
        />
        <div className="flex flex-col">
          <p className="text-sm md:text-base text-[#4D4D4D] font-normal">
            {name}
          </p>
          <p className="text-xs md:text-sm text-[#1F2534] font-normal">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
