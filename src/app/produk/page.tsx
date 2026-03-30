import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Produk & Layanan | KOPJASFAS",
  description: "Jelajahi berbagai produk andalan Koperasi Jasa Fadhillah Aqila Sejahtera.",
};

export default function Produk() {
  const products = [
    {
      title: "Simpan Pinjam Syariah",
      desc: "Layanan simpan pinjam berbasis akad syariah yang adil, transparan, dan bebas riba untuk keperluan modal usaha maupun pribadi.",
      color: "brand-green"
    },
    {
      title: "Pembiayaan Usaha",
      desc: "Dukungan permodalan khusus bagi UMKM dan anggota koperasi yang ingin memulai atau mengembangkan usahanya secara berkelanjutan.",
      color: "brand-orange"
    },
    {
      title: "Investasi Berjangka",
      desc: "Kelola masa depan simpanan Anda dengan penawaran bagi hasil yang menarik, terjamin aman, dan diawasi oleh badan pemerintahan.",
      color: "brand-gray"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* Intro Layanan */}
      <section className="w-full py-24 px-6 md:px-20 text-center flex flex-col items-center">
        <span className="font-sans font-semibold text-sm text-brand-orange tracking-widest uppercase mb-4">
          Layanan Kami
        </span>
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-navy mb-6">
          Solusi Finansial untuk Setiap Kebutuhan
        </h1>
        <p className="font-sans text-lg text-brand-gray max-w-3xl leading-relaxed">
          Kami menawarkan beragam layanan unggulan yang dirancang khusus untuk mewujudkan kesejahteraan mandiri dan mengakselerasi roda bisnis Anda.
        </p>
      </section>

      {/* Grid Katalog Produk */}
      <section className="w-full px-6 md:px-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {products.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[24px] p-10 flex flex-col shadow-[0_12px_32px_rgba(0,0,0,0.05)] border-b-4 hover:-translate-y-2 transition-transform duration-300`}
              // Mengatur warna border bawah dinamis sesuai warna yang distel di JSON local
              style={{ borderBottomColor: item.color === 'brand-green' ? '#84C345' : item.color === 'brand-orange' ? '#F9A41A' : '#596677' }}
            >
              <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 shadow-sm">
                <Image src="/log1r.png" alt="Icon P" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              
              <h2 className="font-heading font-bold text-2xl text-brand-navy mb-4">{item.title}</h2>
              <p className="font-sans text-base text-brand-gray leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>
              
              <div className={`flex items-center gap-2 font-sans font-semibold text-base cursor-pointer`}
                   style={{ color: item.color === 'brand-green' ? '#84C345' : item.color === 'brand-orange' ? '#F9A41A' : '#596677' }}
              >
                <span>Pelajari Detail</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          ))}

        </div>
      </section>
      
      {/* Banner Hubungi Kami Singkat */}
      <section className="w-full bg-brand-light py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-brand-green/20">
        <div className="flex flex-col">
          <h2 className="font-heading font-bold text-3xl text-brand-navy mb-2">Butuh Bantuan Memilih Produk?</h2>
          <p className="font-sans text-lg text-brand-gray">Tim ahli finansial kami siap memandu Anda mendapatkan program tersesuaikan.</p>
        </div>
        <Link href="/kontak" className="bg-brand-green px-8 py-4 rounded-full font-sans font-semibold text-white shadow-lg shadow-brand-green/30 hover:bg-opacity-90 transition whitespace-nowrap">
          Konsultasi Gratis
        </Link>
      </section>

    </div>
  );
}
