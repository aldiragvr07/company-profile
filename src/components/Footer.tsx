import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex-col bg-brand-navy pt-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-20 pb-16 gap-10">
        {/* Brand & Description */}
        <div className="flex flex-col w-full md:w-[320px]">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/log1r.png"
              alt="Logo KOPJASFAS"
              width={36}
              height={36}
              className="h-[36px] w-auto object-contain brightness-0 invert" // Supaya logo jadi putih jika diperlukan, atau tetap asli
            />
            <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
              KOPJASFAS
            </span>
          </div>
          <p className="font-sans text-sm text-slate-400 leading-relaxed mb-6">
            Koperasi Jasa Fadhillah Aqila Sejahtera. Mitra Kesejahteraan yang
            berlandaskan prinsip adil dan transparan.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6285156379309"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-slate-700/50 hover:bg-brand-green/20 hover:border-brand-green rounded-full flex items-center justify-center cursor-pointer transition"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-brand-green"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.069.356-2.897 1.025l-.202.15-2.096-.552.561 2.035.144.225c-.746.935-1.158 2.057-1.158 3.256 0 3.727 3.035 6.762 6.763 6.762 1.808 0 3.505-.714 4.778-2.005 1.273-1.291 1.975-3.009 1.975-4.829 0-3.728-3.035-6.762-6.762-6.762" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/kopjasfas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-slate-700/50 hover:bg-pink-500/20 hover:border-pink-500 rounded-full flex items-center justify-center cursor-pointer transition"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-pink-500"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <circle cx="17.5" cy="6.5" r="1.5"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <span className="font-sans font-semibold text-base text-white mb-2">
            Tautan Cepat
          </span>
          <Link
            href="/tentang-kami"
            className="font-sans text-sm text-slate-400 hover:text-white transition"
          >
            Tentang Kami
          </Link>
          <Link
            href="/produk"
            className="font-sans text-sm text-slate-400 hover:text-white transition"
          >
            Produk Koperasi
          </Link>
          <Link
            href="/artikel"
            className="font-sans text-sm text-slate-400 hover:text-white transition"
          >
            Berita & Artikel
          </Link>
          <Link
            href="/kontak"
            className="font-sans text-sm text-slate-400 hover:text-white transition"
          >
            Kontak
          </Link>
        </div>

        {/* Contact Mini Info */}
        <div className="flex flex-col gap-4 w-full md:w-[280px]">
          <span className="font-sans font-semibold text-base text-white mb-2">
            Hubungi Kami
          </span>
          <span className="font-sans text-sm text-slate-400 leading-relaxed">
            Gedung Pusat Bisnis Syariah, Lt. 3<br />
            Jl. Utama Kesejahteraan No. 1
          </span>
          <span className="font-sans text-sm text-slate-400">
            +62 811 1234 5678
          </span>
          <span className="font-sans text-sm text-brand-green">
            info@kopjasfas.co.id
          </span>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5 py-6 px-6 md:px-20 flex justify-center items-center">
        <span className="font-sans font-normal text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} Koperasi Jasa Fadhillah Aqila Sejahtera.
          Hak Cipta Dilindungi.
        </span>
      </div>
    </footer>
  );
}
