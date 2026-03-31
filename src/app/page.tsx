"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const [kontakForm, setKontakForm] = useState({ nama: "", email: "", pesan: "" });
  const [kontakLoading, setKontakLoading] = useState(false);
  const [kontakSuccess, setKontakSuccess] = useState(false);
  const [kontakError, setKontakError] = useState("");

  const handleKontakChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setKontakForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleKontakSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKontakLoading(true);
    setKontakError("");
    setKontakSuccess(false);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(kontakForm),
      });
      const data = await response.json();
      if (!response.ok) {
        setKontakError(data.error || "Gagal mengirim pesan");
        return;
      }
      setKontakSuccess(true);
      setKontakForm({ nama: "", email: "", pesan: "" });
      setTimeout(() => setKontakSuccess(false), 5000);
    } catch {
      setKontakError("Terjadi kesalahan saat mengirim pesan");
    } finally {
      setKontakLoading(false);
    }
  };

  const products = [
    {
      title: "Simpan Pinjam Syariah",
      desc: "Layanan simpan pinjam berbasis akad syariah yang adil, transparan, dan bebas riba untuk keperluan modal usaha maupun pribadi.",
      color: "brand-green",
    },
    {
      title: "Pembiayaan Usaha",
      desc: "Dukungan permodalan khusus bagi UMKM dan anggota koperasi yang ingin memulai atau mengembangkan usahanya secara berkelanjutan.",
      color: "brand-orange",
    },
    {
      title: "Investasi Berjangka",
      desc: "Kelola masa depan simpanan Anda dengan penawaran bagi hasil yang menarik, terjamin aman, dan diawasi oleh badan pemerintahan.",
      color: "brand-gray",
    },
  ];

  const articles = [
    {
      date: "Desember 10, 2025",
      title: "Pelatihan Wirausaha Digital Bagi Anggota Koperasi",
      desc: "Meningkatkan kompetensi dan daya saing anggota dalam menghadapi revolusi industri dengan kurikulum aplikatif langsung kerja...",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop",
    },
    {
      date: "November 28, 2025",
      title: "Rapat Anggota Tahunan KOPJASFAS 2025",
      desc: "Membahas rencana strategis ke depan dan apresiasi performa kinerja koperasi membaik signifikan selama setahun operasional...",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1632&auto=format&fit=crop",
    },
    {
      date: "November 15, 2025",
      title: "Penyaluran Bantuan Permodalan UMKM Wilayah",
      desc: "Dukungan KOPJASFAS guna menunjang bangkitnya roda perekonomian dari penggerak ekonomi kecil secara transparan...",
      img: "https://images.unsplash.com/photo-1580519542036-ed47f3ae2538?q=80&w=1473&auto=format&fit=crop",
    },
  ];

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
  };

  const staggerContainer: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemFade: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. HERO SECTION */}
      <section
        id="beranda"
        className="relative w-full min-h-screen flex items-center px-6 md:px-20 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col"
          >
            <motion.span
              variants={itemFade}
              className="font-sans font-bold text-sm text-brand-green tracking-[0.15em] uppercase mb-6 flex items-center gap-2"
            >
              <span className="w-8 h-[2px] bg-brand-green"></span>
              Mitra Kesejahteraan Anda
            </motion.span>
            <motion.h1
              variants={itemFade}
              className="font-heading font-extrabold text-5xl md:text-6xl text-brand-navy leading-[1.1] mb-8"
            >
              Membangun Ekonomi <br /> Untuk Kesejahteraan <br /> Bersama
            </motion.h1>
            <motion.p
              variants={itemFade}
              className="font-sans text-lg text-brand-gray leading-relaxed mb-12 max-w-lg opacity-80"
            >
              Koperasi Jasa Fadhillah Aqila Sejahtera (KOPJASFAS) hadir sebagai
              partner finansial terpercaya yang adil, menguntungkan, dan
              dikelola secara profesional bagi setiap anggota.
            </motion.p>
            <motion.div variants={itemFade} className="flex flex-wrap gap-5">
              <Link
                href="/tentang-kami"
                className="px-10 py-5 rounded-full border border-slate-200 flex items-center gap-3 font-sans font-bold text-brand-navy hover:bg-slate-50 transition-all duration-300 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </div>
                Profil Koperasi
              </Link>
              
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/4.5] md:aspect-square rounded-[60px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1576&auto=format&fit=crop"
                alt="Representative Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT SECTION (KEMBALI KE STYLE GERAK SEDIKIT) */}
      <motion.section
        id="tentang-kami"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="w-full px-6 md:px-20 py-24 flex flex-col lg:flex-row gap-16 items-center bg-white border-t border-slate-50"
      >
        <div className="w-full lg:w-1/2 relative bg-[radial-gradient(circle,#F8FAFC_0%,#FFFFFF_80%)] rounded-[40px] p-10 flex items-center justify-center border border-slate-100 group">
          {/* Efek gerak halus pada logo */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full flex justify-center items-center"
          >
            <Image
              src="/log1r.png"
              alt="Logo KOPJASFAS Detail"
              width={380}
              height={380}
              className="w-[80%] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
          <div className="absolute bottom-10 -right-4 md:-right-8 bg-brand-orange p-6 rounded-2xl flex flex-col items-center justify-center shadow-[0_16px_32px_rgba(249,164,26,0.3)]">
            <span className="font-heading font-extrabold text-4xl text-white leading-none mb-1">
              10+
            </span>
            <span className="font-sans font-semibold text-sm text-white text-center leading-snug">
              Tahun
              <br />
              Pengalaman
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-sans font-semibold text-base text-brand-green tracking-[0.2em] uppercase">
              Mengenai KOPJASFAS
            </span>
            <div className="w-10 h-[2px] bg-brand-green"></div>
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-navy leading-[1.2] mb-8">
            Koperasi Unggul untuk Kesejahteraan Tumbuh Bersama
          </h2>
          <p className="font-sans text-lg text-brand-gray leading-relaxed mb-8">
            Berdiri dengan satu tujuan mendasar: menjadi mitra finansial
            terpercaya yang mengedepankan nilai-nilai keadilan. Kami senantiasa
            berkomitmen untuk memajukan kualitas hidup anggota secara transparan
            dan solutif.
          </p>
          <div className="flex flex-col gap-5 mb-10">
            <div className="flex items-center gap-4">
              <div className="bg-brand-light w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#84C345"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-sans font-semibold text-lg text-brand-navy">
                Pengelolaan Berbasis Integritas & Transparan
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-light w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#84C345"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-sans font-semibold text-lg text-brand-navy">
                Keanggotaan Adil untuk Menopang UMKM
              </span>
            </div>
          </div>
          <Link
            href="/tentang-kami"
            className="font-sans font-bold text-brand-green flex items-center gap-2 hover:gap-3 transition-all"
          >
            Lihat Profil Lengkap{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </motion.section>

      {/* 3. PRODUCT SECTION (TANPA KOTAK WARNA DI LOGO) */}
      <section id="produk" className="w-full py-24 px-6 md:px-20 bg-slate-50">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="text-center flex flex-col items-center mb-16"
        >
          <span className="font-sans font-semibold text-sm text-brand-orange tracking-widest uppercase mb-4">
            Layanan Unggulan
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-navy mb-6">
            Solusi Finansial Terpercaya
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[32px] p-10 flex flex-col shadow-[0_12px_32px_rgba(0,0,0,0.03)] border border-slate-100"
            >
              {/* Logo di atas produk: Tanpa Kotak Warna */}
              <div className="flex items-center justify-start mb-8">
                <Image
                  src="/log1r.png"
                  alt="Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="font-heading font-bold text-2xl text-brand-navy mb-4">
                {item.title}
              </h3>
              <p className="font-sans text-base text-brand-gray leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>
              <Link
                href="/produk"
                className="font-sans font-semibold text-brand-green flex items-center gap-2"
              >
                Selengkapnya{" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. MITRA SECTION (HOVER HANYA YG KENA) */}
      <motion.section
        id="mitra"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
        className="w-full py-24 px-6 md:px-20 bg-white"
      >
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl text-brand-navy mb-4 text-center">
            Telah Dipercaya Oleh
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
          {["Bank SYA", "USAHA BRS", "Agro Makmur", "Finance Syariah"].map(
            (name, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src="/log1r.png"
                  alt="Mitra"
                  width={60}
                  height={60}
                  className="w-16 h-16 object-contain"
                />
                <span className="font-heading font-bold text-sm text-brand-navy">
                  {name}
                </span>
              </div>
            ),
          )}
        </div>
      </motion.section>

      {/* 5. ARTIKEL SECTION */}
      <section id="artikel" className="w-full py-24 px-6 md:px-20 bg-slate-50">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <span className="font-sans font-semibold text-sm text-brand-green tracking-widest uppercase mb-4 block">
              Update Terkini
            </span>
            <h2 className="font-heading font-extrabold text-4xl text-brand-navy">
              Berita & Artikel
            </h2>
          </div>
          <Link
            href="/artikel"
            className="hidden md:flex items-center gap-2 text-brand-orange font-bold hover:underline font-sans"
          >
            Semua Artikel{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((news, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 flex flex-col group h-full hover:shadow-md transition-shadow"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={news.img}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="font-sans text-sm text-brand-green mb-3 font-medium">
                  {news.date}
                </span>
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-4 group-hover:text-brand-orange transition-colors">
                  {news.title}
                </h3>
                <p className="font-sans text-brand-gray text-base leading-relaxed mb-6 flex-grow">
                  {news.desc}
                </p>
                <Link
                  href="/artikel"
                  className="font-sans font-bold text-sm text-brand-navy flex items-center gap-2"
                >
                  Baca Selengkapnya{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <motion.section
        id="kontak"
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full py-24 px-6 md:px-20 bg-white"
      >
        <div className="bg-brand-navy rounded-[48px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/5 p-12 md:p-16 flex flex-col bg-brand-navy">
            <h2 className="font-heading font-extrabold text-4xl text-white mb-6">
              Ayo Berkolaborasi
            </h2>
            <p className="font-sans text-lg text-slate-400 mb-12">
              Pintu kami selalu terbuka untuk diskusi mengenai kesejahteraan
              ekonomi Anda dan komunitas.
            </p>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#84C345"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span className="text-white font-sans">+62 811 1234 5678</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F9A41A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span className="text-white font-sans">
                  info@kopjasfas.co.id
                </span>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/20 flex flex-col gap-4">
              <span className="text-slate-400 font-sans text-sm uppercase tracking-widest font-semibold">
                Hubungi Kami
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://wa.me/628111234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
                  title="WhatsApp"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.569-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741 .981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/kopjasfas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
                  title="Instagram"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/5 p-12 md:p-16 bg-white flex flex-col">
            <h3 className="font-heading font-bold text-2xl text-brand-navy mb-8">
              Kirim Pesan Langsung
            </h3>
            {kontakSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200">
                <span className="font-sans text-sm text-green-700">✅ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.</span>
              </div>
            )}
            {kontakError && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200">
                <span className="font-sans text-sm text-red-700">❌ {kontakError}</span>
              </div>
            )}
            <form className="flex flex-col gap-6" onSubmit={handleKontakSubmit}>
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama Lengkap"
                  value={kontakForm.nama}
                  onChange={handleKontakChange}
                  required
                  disabled={kontakLoading}
                  className="flex-1 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-brand-green disabled:opacity-60"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={kontakForm.email}
                  onChange={handleKontakChange}
                  required
                  disabled={kontakLoading}
                  className="flex-1 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-brand-green disabled:opacity-60"
                />
              </div>
              <textarea
                name="pesan"
                placeholder="Pesan Anda"
                value={kontakForm.pesan}
                onChange={handleKontakChange}
                required
                disabled={kontakLoading}
                className="h-32 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-brand-green resize-none disabled:opacity-60"
              ></textarea>
              <button
                type="submit"
                disabled={kontakLoading}
                className="bg-brand-green text-white font-bold py-4 px-8 rounded-2xl hover:shadow-lg shadow-brand-green/20 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {kontakLoading ? "Mengirim..." : "Kirim Sekarang →"}
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
