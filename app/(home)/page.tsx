import Contact from "@/components/cards/contact";
import FeaturesCards from "@/components/cards/FeaturesCards";
import Feedbacks from "@/components/cards/feedbacks";
import ProductPreview from "@/components/cards/ProductPreview";
import FAQSection from "@/components/faq";
import Features from "@/components/features";
import Grids from "@/components/grids";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import MapSection from "@/components/mapSection";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <FeaturesCards />
      <ProductPreview />
      <Header
        badge="Özellikler"
        title="İşletmenizi Kolaylaştıracak Özellikler"
        subtitle="Müşteri yönetimi, randevu takibi, otomatik SMS bildirimleri ve hizmet planlaması - hepsi tek platformda. İşletmenizi büyütmeye odaklanın, operasyonları bize bırakın."
      />

      <Grids />
      <Header
        badge="Erişilebilirlik"
        title="Türkiye'nin Her Yerinde Hizmetinizdeyiz"
        subtitle="Randevu yönetim sistemimiz tüm Türkiye'de aktif olarak kullanılmakta ve 7/24 teknik destek ekibimiz tarafından desteklenmektedir"
        className="mt-40 md:mt-40"
      />
      <MapSection />
      <Header
        badge="Fiyatlandırma"
        title="Aylık Sadece 1099 TL - Sınırsız Kullanım"
        subtitle="Tüm özelliklere sınırsız erişim, ücretsiz kurulum ve 7/24 teknik destek. Hemen başlayın!"
        className="mt-3"
      />
      <Pricing />
      <Header
        badge="Müşteri Yorumları"
        title="Müşterilerimiz Bizi Seviyor"
        subtitle="Türkiye'nin dört bir yanından işletmeler randevu yönetimi için PLANİX'i tercih ediyor. Müşterilerimizin deneyimlerini inceleyin."
        className="my-10"
      />
      <Feedbacks />
      <FAQSection />
      <Contact />
    </div>
  );
}
