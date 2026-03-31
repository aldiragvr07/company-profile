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

    // PENTING: Resend free tier (tanpa custom domain):
    // - "from" HARUS menggunakan "onboarding@resend.dev"
    // - "to" hanya bisa ke email yang terdaftar di akun Resend (email pemilik)
    const { data, error } = await resend.emails.send({
      from: "KOPJASFAS <onboarding@resend.dev>",
      to: "aldiragvr07@gmail.com",
      replyTo: email,
      subject: `[KOPJASFAS] Pesan Baru dari ${nama}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">
          <div style="background: #1E293B; padding: 32px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">📬 Pesan Baru dari Website</h1>
          </div>
          <div style="padding: 32px;">
            <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 16px; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px 0; font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Nama Pengirim</p>
              <p style="margin: 0; font-size: 18px; color: #1E293B; font-weight: 600;">${nama}</p>
            </div>
            <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 16px; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px 0; font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Email Pengirim</p>
              <p style="margin: 0; font-size: 18px; color: #1E293B;"><a href="mailto:${email}" style="color: #84C345; text-decoration: none;">${email}</a></p>
            </div>
            <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px 0; font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Isi Pesan</p>
              <p style="margin: 0; font-size: 16px; color: #334155; line-height: 1.6;">${pesan.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
          <div style="padding: 24px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 13px; color: #94a3b8;">Dikirim melalui formulir kontak KOPJASFAS</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: `Gagal mengirim email: ${error.message}` },
        { status: 500 },
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json(
      { message: "Pesan berhasil dikirim", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan server",
      },
      { status: 500 },
    );
  }
}
