import Image from "next/image";

export const metadata = {
  title: "Artikel & Berita | KOPJASFAS",
  description: "Informasi dan liputan terkini seputar aktivitas KOPJASFAS.",
};

export default function Artikel() {
  const articles = [
    {
      date: "Desember 10, 2025",
      title: "Pelatihan Wirausaha Digital Bagi Anggota Koperasi",
      desc: "Meningkatkan kompetensi dan daya saing anggota dalam menghadapi revolusi industri dengan kurikulum aplikatif langsung kerja...",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop"
    },
    {
      date: "November 28, 2025",
      title: "Rapat Anggota Tahunan KOPJASFAS 2025",
      desc: "Membahas rencana strategis ke depan dan apresiasi performa kinerja koperasi membaik signifikan selama setahun operasional...",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1632&auto=format&fit=crop"
    },
    {
      date: "November 15, 2025",
      title: "Penyaluran Bantuan Permodalan UMKM Wilayah",
      desc: "Dukungan KOPJASFAS guna menunjang bangkitnya roda perekonomian dari penggerak ekonomi kecil secara transparan...",
      img: "https://images.unsplash.com/photo-1580519542036-ed47f3ae2538?q=80&w=1473&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      <section className="w-full py-24 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="flex flex-col">
            <span className="font-sans font-semibold text-sm text-brand-green tracking-widest uppercase mb-4">
              Berita & Artikel
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-navy">
              Kabar Terbaru KOPJASFAS
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-2 cursor-pointer group">
            <span className="font-sans font-semibold text-base text-brand-orange group-hover:underline">Lihat Semua Kategori</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F9A41A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((news, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col group cursor-pointer">
              {/* Gambar Artikel Menggunakan <img> external untuk render placeholder Unsplash */}
              <div className="w-full h-[240px] overflow-hidden">
                <img 
                  src={news.img} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <span className="font-sans font-medium text-sm text-brand-green mb-4">{news.date}</span>
                <h2 className="font-heading font-bold text-2xl text-brand-navy leading-snug mb-4 group-hover:text-brand-orange transition">
                  {news.title}
                </h2>
                <p className="font-sans text-base text-brand-gray leading-relaxed mb-8 flex-grow">
                  {news.desc}
                </p>
                <span className="font-sans font-semibold text-base text-brand-orange mt-auto">Baca Selengkapnya</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
