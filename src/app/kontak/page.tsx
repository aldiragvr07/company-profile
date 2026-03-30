import React from "react";

export const metadata = {
  title: "Kontak | KOPJASFAS",
  description: "Hubungi kami untuk informasi lebih lanjut.",
};

export default function Kontak() {
  return (
    <div className="flex flex-col w-full bg-white relative">
      
      {/* Background Ornamen Pendek */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-brand-light z-0"></div>

      <section className="relative z-10 w-full py-20 px-6 md:px-20 flex flex-col items-center">
        
        {/* Contact Form & Info Panel - Desain Split Screen */}
        <div className="w-full max-w-6xl bg-brand-navy rounded-[32px] overflow-hidden shadow-[0_24px_48px_rgba(30,41,59,0.15)] flex flex-col lg:flex-row mt-10">
          
          {/* Sisi Kiri: Informasi */}
          <div className="w-full lg:w-[45%] p-10 md:p-16 flex flex-col bg-[radial-gradient(circle_at_top_left,#2A3B52,#1E293B)]">
            <h1 className="font-heading font-extrabold text-4xl text-white mb-6">Hubungi Kami</h1>
            <p className="font-sans text-lg text-slate-400 leading-relaxed mb-12">
              Kami siap membantu Anda. Silakan isi form atau hubungi kami melalui kontak sentral di bawah ini.
            </p>
            
            <div className="flex flex-col gap-10">
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#84C345" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-semibold text-xl text-white mb-1">Telepon</span>
                  <span className="font-sans text-base text-slate-400">+62 811 1234 5678</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F9A41A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-semibold text-xl text-white mb-1">Email</span>
                  <span className="font-sans text-base text-slate-400">info@kopjasfas.co.id</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-semibold text-xl text-white mb-1">Alamat Operasional</span>
                  <span className="font-sans text-base text-slate-400 leading-relaxed">
                    Gedung Pusat Bisnis Syariah, Lt. 3<br/>Jl. Utama Kesejahteraan No. 1<br/>Jakarta Selatan, Indonesia
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Sisi Kanan: Formulir Teks */}
          <div className="w-full lg:w-[55%] p-10 md:p-16 bg-white flex flex-col">
            <h2 className="font-heading font-bold text-3xl text-brand-navy mb-8">Kirim Pesan</h2>
            
            <form className="flex flex-col flex-grow">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex flex-col flex-1">
                  <label htmlFor="nama" className="font-sans font-medium text-sm text-brand-gray mb-3 flex items-center gap-1">Nama Lengkap <span className="text-red-500">*</span></label>
                  <input type="text" id="nama" placeholder="Tulis nama lengkap Anda" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition" required />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="email" className="font-sans font-medium text-sm text-brand-gray mb-3 flex items-center gap-1">Alamat Email <span className="text-red-500">*</span></label>
                  <input type="email" id="email" placeholder="contoh@email.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition" required />
                </div>
              </div>
              
              <div className="flex flex-col flex-grow mb-8">
                <label htmlFor="pesan" className="font-sans font-medium text-sm text-brand-gray mb-3 flex items-center gap-1">Isi Pesan <span className="text-red-500">*</span></label>
                <textarea id="pesan" placeholder="Tambahkan pertanyaan atau detail kebutuhan Anda..." className="w-full h-40 px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition resize-none" required></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-green text-white font-sans font-semibold text-lg py-5 rounded-xl hover:bg-opacity-90 transition shadow-[0_8px_16px_rgba(132,195,69,0.2)] mt-auto flex justify-center items-center gap-2">
                Kirim Pesan Sekarang <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
