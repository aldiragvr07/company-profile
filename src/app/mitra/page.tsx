import Image from "next/image";

export const metadata = {
  title: "Mitra Kami | KOPJASFAS",
  description: "Daftar perusahaan dan instansi yang mempercayakan kemitraan kepada kami.",
};

export default function Mitra() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      
      <section className="w-full py-24 px-6 md:px-20 text-center flex flex-col items-center border-b border-slate-100">
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-navy mb-6">
          Telah Dipercaya Oleh Kebanggaan Kita
        </h1>
        <p className="font-sans text-lg text-brand-gray max-w-3xl leading-relaxed">
          Kekuatan kolaborasi adalah kunci keberhasilan kami dalam mengayomi perekonomian masyarakat secara berkelanjutan.
        </p>
      </section>

      <section className="w-full px-6 md:px-20 py-24">
        {/* Placeholder grid Mitra (menggunakan logo default sebagai simbol siluet) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 gap-y-20 justify-items-center items-center opacity-60">
          
          <div className="flex flex-col items-center gap-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-500 cursor-pointer">
            <Image src="/log1r.png" alt="Mitra" width={80} height={80} className="w-20 h-20 object-contain" />
            <span className="font-heading font-bold text-xl text-brand-navy">Bank SYA</span>
          </div>

          <div className="flex flex-col items-center gap-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-500 cursor-pointer">
            <Image src="/log1r.png" alt="Mitra" width={80} height={80} className="w-20 h-20 object-contain" />
            <span className="font-heading font-bold text-xl text-brand-navy">USAHA BRS</span>
          </div>

          <div className="flex flex-col items-center gap-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-500 cursor-pointer">
            <Image src="/log1r.png" alt="Mitra" width={80} height={80} className="w-20 h-20 object-contain" />
            <span className="font-heading font-bold text-xl text-brand-navy">Agro Makmur</span>
          </div>

          <div className="flex flex-col items-center gap-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-500 cursor-pointer">
            <Image src="/log1r.png" alt="Mitra" width={80} height={80} className="w-20 h-20 object-contain" />
            <span className="font-heading font-bold text-xl text-brand-navy">Finance Syariah</span>
          </div>

        </div>
      </section>

    </div>
  );
}
