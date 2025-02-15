export const graphData: Array<{
  id: number;
  currentHeight?: string;
  previousHeight?: string;
}> = [
  {
    id: 1,
    currentHeight: "50px",
    previousHeight: "38px",
  },
  {
    id: 2,
    currentHeight: "101px",
    previousHeight: "67px",
  },
  {
    id: 3,
    currentHeight: "122px",
    previousHeight: "92px",
  },
  {
    id: 4,
    currentHeight: "85px",
    previousHeight: "44px",
  },
  {
    id: 5,
    currentHeight: "50px",
    previousHeight: "31px",
  },
  {
    id: 6,
    currentHeight: "106px",
    previousHeight: "80px",
  },
];

export const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
export const variants = {
  hidden: { transform: "translateY(20%)", opacity: 0 },
  visible: { transform: "translateY(0)", opacity: 1 },
};
export const cardVariants = {
  hidden: { opacity: 0, transform: "scale(0.9) rotate(5deg)" },
  visible: { opacity: 1, transform: "scale(1) rotate(0deg)" },
};

export const FAQData: {
  title: string;
  description: string;
}[] = [
  {
    title: "PLANİX nedir ve işletmeme nasıl fayda sağlar?",
    description:
      "PLANİX, işletmeniz için tasarlanmış kapsamlı bir randevu yönetim ve otomasyon platformudur. Müşteri bilgilerini tek bir yerden yönetmenizi, randevuları kolayca planlamanızı ve SMS bildirimleri ile müşterilerinizle otomatik iletişim kurmanızı sağlar. İşletmenizin verimliliğini artırırken, müşteri memnuniyetini de yükseltir.",
  },
  {
    title: "SMS bildirim sistemi nasıl çalışır?",
    description:
      "PLANİX'in otomatik SMS sistemi, randevularınızı daha etkili yönetmenizi sağlar. Sistem, randevu oluşturulduğunda onay mesajı, randevudan 24 saat önce hatırlatma, iptal durumunda bildirim ve hizmet sonrası geri bildirim anketi gönderir. Bu özellik sayesinde randevu kaçırma oranları minimuma iner ve müşteri iletişiminiz güçlenir.",
  },
  {
    title: "Müşteri bilgilerini nasıl yönetebilirim?",
    description:
      "PLANİX'te her müşteri için detaylı bir profil oluşturabilirsiniz. Ad-soyad, telefon, e-posta gibi temel bilgilerin yanı sıra, tercih edilen hizmetler, geçmiş randevu kayıtları ve özel notlar gibi detayları kaydedebilirsiniz. Bu bilgiler, kişiselleştirilmiş hizmet sunmanıza ve müşteri ilişkilerinizi güçlendirmenize yardımcı olur.",
  },
  {
    title: "Hizmet ve personel planlaması nasıl yapılır?",
    description:
      "Sistemde tüm hizmetlerinizi süre ve ücret ile tanımlayabilirsiniz. Personel çalışma saatlerini ve uygunluk durumlarını ayarlayabilir, etkin şekilde yönetebilirsiniz. Bu sayede çakışmaları önler ve kapasitenizi maksimum verimle kullanabilirsiniz.",
  },
  {
    title: "Teknik destek ve eğitim hizmetleri nasıl sağlanıyor?",
    description:
      "PLANİX olarak 7/24 teknik destek hizmeti sunuyoruz. Kurulum sürecinde detaylı eğitim veriyoruz ve sistemin tüm özelliklerini etkin kullanmanız için yanınızda oluyoruz. İhtiyaç duyduğunuzda telefon, e-posta veya canlı destek üzerinden teknik ekibimize ulaşabilirsiniz.",
  },
  {
    title: "PLANİX'i nasıl satın alabilirim?",
    description:
      "PLANİX'i satın almak için web sitemizden veya müşteri temsilcilerimizle iletişime geçebilirsiniz. Aylık abonelik planımız mevcuttur ve kredi kartı ile güvenli ödeme yapabilirsiniz. Satın alma sonrası kurulum desteği ve eğitim hizmeti ücretsiz olarak sağlanmaktadır. İhtiyaçlarınıza göre özel paketler için bizimle iletişime geçebilirsiniz.",
  },
];

// World Map data
export const WorldMapDotsData = [
  {
    // İstanbul -> Ankara
    start: {
      lat: 41.0082,
      lng: 28.9784,
    },
    end: {
      lat: 39.9334,
      lng: 32.8597,
    },
  },
  {
    // Ankara -> İzmir
    start: {
      lat: 39.9334,
      lng: 32.8597,
    },
    end: {
      lat: 38.4192,
      lng: 27.1287,
    },
  },
  {
    // İzmir -> Antalya
    start: {
      lat: 38.4192,
      lng: 27.1287,
    },
    end: {
      lat: 36.8969,
      lng: 30.7133,
    },
  },
  {
    // Antalya -> Mersin
    start: {
      lat: 36.8969,
      lng: 30.7133,
    },
    end: {
      lat: 36.8121,
      lng: 34.6339,
    },
  },
  {
    // Mersin -> Trabzon
    start: {
      lat: 36.8121,
      lng: 34.6339,
    },
    end: {
      lat: 41.0027,
      lng: 39.7168,
    },
  },
  {
    // Trabzon -> Erzurum
    start: {
      lat: 41.0027,
      lng: 39.7168,
    },
    end: {
      lat: 39.9055,
      lng: 41.2658,
    },
  },
  {
    // Erzurum -> Van
    start: {
      lat: 39.9055,
      lng: 41.2658,
    },
    end: {
      lat: 38.4891,
      lng: 43.4089,
    },
  },
  {
    // Van -> Diyarbakır
    start: {
      lat: 38.4891,
      lng: 43.4089,
    },
    end: {
      lat: 37.9144,
      lng: 40.2306,
    },
  },
  {
    // Diyarbakır -> Gaziantep
    start: {
      lat: 37.9144,
      lng: 40.2306,
    },
    end: {
      lat: 37.0662,
      lng: 37.3833,
    },
  },
  {
    // Gaziantep -> Mersin
    start: {
      lat: 37.0662,
      lng: 37.3833,
    },
    end: {
      lat: 36.8121,
      lng: 34.6339,
    },
  },
  {
    // Ankara -> Erzurum
    start: {
      lat: 39.9334,
      lng: 32.8597,
    },
    end: {
      lat: 39.9055,
      lng: 41.2658,
    },
  },
  {
    // Ankara -> Diyarbakır
    start: {
      lat: 39.9334,
      lng: 32.8597,
    },
    end: {
      lat: 37.9144,
      lng: 40.2306,
    },
  },
  {
    // Ankara -> Van
    start: {
      lat: 39.9334,
      lng: 32.8597,
    },
    end: {
      lat: 38.4891,
      lng: 43.4089,
    },
  },
];

export const WorldMapAvatarsData = [
  {
    // İstanbul
    lat: 41.0082,
    lng: 28.9784,
    url: "/assets/avatar/avatar1.png",
    size: 28,
  },
  {
    // Ankara
    lat: 39.9334,
    lng: 32.8597,
    url: "/assets/avatar/avatar2.png",
    size: 26,
  },
  {
    // İzmir
    lat: 38.4192,
    lng: 27.1287,
    url: "/assets/avatar/avatar3.png",
    size: 24,
  },
  {
    // Antalya
    lat: 36.8969,
    lng: 30.7133,
    url: "/assets/avatar/avatar4.png",
    size: 25,
  },
  {
    // Mersin
    lat: 36.8121,
    lng: 34.6339,
    url: "/assets/avatar/avatar5.png",
    size: 23,
  },
  {
    // Trabzon
    lat: 41.0027,
    lng: 39.7168,
    url: "/assets/avatar/avatar6.png",
    size: 24,
  },
  {
    // Erzurum
    lat: 39.9055,
    lng: 41.2658,
    url: "/assets/avatar/avatar1.png",
    size: 24,
  },
  {
    // Van
    lat: 38.4891,
    lng: 43.4089,
    url: "/assets/avatar/avatar2.png",
    size: 23,
  },
  {
    // Diyarbakır
    lat: 37.9144,
    lng: 40.2306,
    url: "/assets/avatar/avatar3.png",
    size: 25,
  },
  {
    // Gaziantep
    lat: 37.0662,
    lng: 37.3833,
    url: "/assets/avatar/avatar4.png",
    size: 24,
  },
];
