import { Resend } from "resend";
import { NextResponse } from "next/server";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is missing in .env.local");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "bharathmay2005@gmail.com",
      subject: `New Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
  console.log("ENV VALUE:", process.env.RESEND_API_KEY);

}
