import React from "react";
import Link from "next/link";

const HomeBlogLinks = () => {
  return (
    <div className="mt-10  p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Son Blog Yazılarımız</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li>
          <Link
            href="/blog/dijital-donusum"
            className="text-brand hover:underline "
          >
            Dijital Dönüşüm: İşletmenizi Geleceğe Taşıyın
          </Link>
        </li>
        <li>
          <Link
            href="/blog/randevu-yonetim-sistemi"
            className="text-brand hover:underline "
          >
            Randevu Yönetim Sistemi Nedir ve Neden Önemlidir?
          </Link>
        </li>
        <li>
          <Link
            href="/blog/planix-tanitimi"
            className="text-brand hover:underline "
          >
            Planix Tanıtımı: İşletmenize Katkıları
          </Link>
        </li>
        <li>
          <Link
            href="/blog/kuafor-yonetim-sistemi"
            className="text-brand hover:underline "
          >
            Kuaför Yönetim Sistemi: İşletmenizi Nasıl Dönüştürür?
          </Link>
        </li>
        <li>
          <Link href="/blog/psikolog" className="text-brand hover:underline ">
            Psikologlar için Randevu Yönetim Çözümleri
          </Link>
        </li>
        <li>
          <Link
            href="/blog/fiyatlandirma-hakkinda-bilgi"
            className="text-brand hover:underline "
          >
            Fiyatlandırma Hakkında Bilgi: Planix Avantajları
          </Link>
        </li>
        <li>
          <Link
            href="/blog/randevu-planlama"
            className="text-brand hover:underline "
          >
            Randevu Planlama Nedir ve Neden Önemlidir?
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeBlogLinks;
