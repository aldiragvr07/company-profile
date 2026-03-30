"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Daftar menu navigasi
  // Jika di Home, gunakan anchor link #. Jika di halaman lain, gunakan path lengkap /#
  const menuItems = [
    { label: "Beranda", path: "/", targetId: "beranda" },
    { label: "Tentang Kami", path: "/tentang-kami", targetId: "tentang-kami" },
    { label: "Produk", path: "/produk", targetId: "produk" },
    { label: "Mitra", path: "/mitra", targetId: "mitra" },
    { label: "Artikel", path: "/artikel", targetId: "artikel" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-between items-center px-6 md:px-20 w-full bg-white/90 backdrop-blur-md box-border h-[100px] border-b border-slate-100 sticky top-0 z-50 transition-all font-sans"
    >
      
      {/* 1. Brand Logo */}
      <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition group">
        <Image 
          src="/log1r.png" 
          alt="Logo KOPJASFAS" 
          width={52} 
          height={52} 
          className="h-[52px] w-auto object-contain group-hover:rotate-6 transition-transform"
        />
        <span className="font-heading font-extrabold text-2xl tracking-tight text-brand-navy">
          KOPJASFAS
        </span>
      </Link>

      {/* 2. Navigation Menu (Desktop) */}
      <div className="hidden md:flex items-center gap-10">
        {menuItems.map((item) => {
          // Jika di home, link ke #id. Jika tidak, link ke /#id atau ke halaman spesifik
          // User ingin landing page panjang, jadi kita prioritaskan scroll ke section di home
          const href = isHome ? `#${item.targetId}` : `/#${item.targetId}`;
          const isActive = isHome ? (item.targetId === "beranda" && pathname === "/") : pathname === item.path;

          return (
            <Link 
              key={item.targetId} 
              href={href}
              className={`font-sans font-medium text-base transition-colors hover:text-brand-orange ${
                isActive ? "text-brand-orange font-semibold" : "text-brand-gray"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* 3. CTA Button */}
      <Link 
        href={isHome ? "#kontak" : "/#kontak"}
        className="hidden md:flex bg-brand-orange px-8 py-4 rounded-full items-center justify-center shadow-[0_8px_24px_rgba(249,164,26,0.2)] hover:-translate-y-1 transition-all active:scale-95"
      >
        <span className="font-sans font-semibold text-base text-white">Hubungi Kami</span>
      </Link>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer">
        <div className="w-6 h-0.5 bg-brand-navy rounded-full"></div>
        <div className="w-6 h-0.5 bg-brand-navy rounded-full"></div>
        <div className="w-4 h-0.5 bg-brand-navy rounded-full"></div>
      </div>
    </motion.nav>
  );
}
