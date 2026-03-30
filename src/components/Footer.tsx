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
            Koperasi Jasa Fadhillah Aqila Sejahtera. Mitra Kesejahteraan yang berlandaskan prinsip adil dan transparan.
          </p>
          
          {/* Social Icons Placeholder */}
          <div className="flex gap-4">
            <div className="w-9 h-9 border border-slate-700/50 hover:bg-white/10 rounded-full flex items-center justify-center cursor-pointer transition">
              <span className="text-white text-xs">IG</span>
            </div>
            <div className="w-9 h-9 border border-slate-700/50 hover:bg-white/10 rounded-full flex items-center justify-center cursor-pointer transition">
              <span className="text-white text-xs">FB</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <span className="font-sans font-semibold text-base text-white mb-2">Tautan Cepat</span>
          <Link href="/tentang-kami" className="font-sans text-sm text-slate-400 hover:text-white transition">Tentang Kami</Link>
          <Link href="/produk" className="font-sans text-sm text-slate-400 hover:text-white transition">Produk Koperasi</Link>
          <Link href="/artikel" className="font-sans text-sm text-slate-400 hover:text-white transition">Berita & Artikel</Link>
          <Link href="/kontak" className="font-sans text-sm text-slate-400 hover:text-white transition">Kontak</Link>
        </div>

        {/* Contact Mini Info */}
        <div className="flex flex-col gap-4 w-full md:w-[280px]">
          <span className="font-sans font-semibold text-base text-white mb-2">Hubungi Kami</span>
          <span className="font-sans text-sm text-slate-400 leading-relaxed">
            Gedung Pusat Bisnis Syariah, Lt. 3<br />
            Jl. Utama Kesejahteraan No. 1
          </span>
          <span className="font-sans text-sm text-slate-400">+62 811 1234 5678</span>
          <span className="font-sans text-sm text-brand-green">info@kopjasfas.co.id</span>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5 py-6 px-6 md:px-20 flex justify-center items-center">
        <span className="font-sans font-normal text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} Koperasi Jasa Fadhillah Aqila Sejahtera. Hak Cipta Dilindungi.
        </span>
      </div>
    </footer>
  );
}
