import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-6">
      <div className="max-w-md w-full text-center">
        {/* Brand */}
        <div className="mb-6">
          <span className="inline-block rounded-xl bg-brand/10 px-4 py-2 text-brand font-semibold text-lg">
            Planix
          </span>
        </div>

        {/* 404 */}
        <h1 className="text-7xl font-bold mb-4">404</h1>

        {/* Message */}
        <h2 className="text-xl font-semibold  mb-2">
          Aradığın sayfa bulunamadı
        </h2>
        <p className="text-foreground/70 mb-8">
          Sayfa silinmiş olabilir ya da adresi yanlış yazmış olabilirsin.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-white font-medium hover:bg-brand/90 transition"
          >
            Ana Sayfaya Dön
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-foreground/50">
          © {new Date().getFullYear()} Planix — Randevu ve müşteri yönetimi
        </p>
      </div>
    </div>
  );
}
