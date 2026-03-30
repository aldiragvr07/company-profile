import Image from "next/image";

export const metadata = {
  title: "Tentang Kami | KOPJASFAS",
  description: "Profil dan rekam jejak Koperasi Jasa Fadhillah Aqila Sejahtera.",
};

export default function TentangKami() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* HEADER TENTANG KAMI */}
      <section className="w-full bg-brand-navy py-20 px-6 md:px-20 text-center flex flex-col items-center">
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6">Tentang Kami</h1>
        <p className="font-sans text-lg text-slate-300 max-w-2xl leading-relaxed">
          Mengenal lebih dekat perjalanan, nilai dedikasi, serta pilar integritas yang mendasari berdirinya Koperasi Jasa Fadhillah Aqila Sejahtera.
        </p>
      </section>

      {/* KONTEN UTAMA Visi & Misi */}
      <section className="w-full px-6 md:px-20 py-24 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Gambar Filosofi Kiri */}
        <div className="w-full lg:w-1/2 relative  rounded-3xl p-10 flex items-center justify-center border border-slate-100">
          <Image src="/log1r.png" alt="Logo KOPJASFAS Besar" width={400} height={400} className="w-[70%] h-auto object-contain transition duration-700" />
          
          <div className="absolute -bottom-6 -right-6 bg-brand-light p-6 rounded-2xl border border-brand-green/20 shadow-lg flex gap-4 items-center">
             <div className="text-brand-green">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
             </div>
             <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-brand-navy">Solutif</span>
                <span className="font-sans text-sm text-brand-gray">Sejak Hari Pertama</span>
             </div>
          </div>
        </div>

        {/* Topik Penjelasan Visi Misi Kanan */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col">
            <h2 className="font-heading font-bold text-3xl text-brand-navy mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-orange rounded-full"></span> Visi
            </h2>
            <p className="font-sans text-lg text-brand-gray leading-relaxed">
              Menjadi mitra strategis perekonomian yang terdepan dalam memperkasakan ekonomi anggota berbasis musyawarah, adil, dan berkesinambungan mengacu pada prinsip syariat.
            </p>
          </div>
          
          <div className="flex flex-col">
            <h2 className="font-heading font-bold text-3xl text-brand-navy mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-green rounded-full"></span> Misi
            </h2>
            <ul className="font-sans text-lg text-brand-gray leading-relaxed flex flex-col gap-4">
              <li className="flex gap-3">
                <span className="text-brand-green font-bold">1.</span> Menciptakan layanan simpan pinjam transparan dengan bagi hasil yang terukur.
              </li>
              <li className="flex gap-3">
                <span className="text-brand-green font-bold">2.</span> Menyediakan pendampingan wirausaha konkrit untuk memajukan kelas UMKM lokal.
              </li>
              <li className="flex gap-3">
                <span className="text-brand-green font-bold">3.</span> Mengedepankan integrasi teknologi dalam operasional untuk mempermudah akses ke seluruh anggota.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
