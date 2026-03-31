import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nama, email, pesan } = body;

    // Validasi input
    if (!nama || !email || !pesan) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 },
      );
    }

    // Kirim email ke penerima
    const response = await resend.emails.send({
      from: "noreply@resend.dev",
      to: "aldiragvr07@gmail.com",
      subject: `Pesan Baru dari ${nama}`,
      html: `
        <h2>Pesan Baru dari Formulir Kontak</h2>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong></p>
        <p>${pesan.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (response.error) {
      return NextResponse.json(
        { error: "Gagal mengirim email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Pesan berhasil dikirim", data: response.data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
