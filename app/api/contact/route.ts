import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowMs = 60_000; // 1 minute
  const maxRequests = 5;

  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((ts) => now - ts < windowMs);

  recent.push(now);
  rateLimitMap.set(ip, recent);

  return recent.length > maxRequests;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 },
      );
    }

    const body = await req.json();

    // Honeypot → silently succeed
    if (body.company) {
      return NextResponse.json({ success: true });
    }

    const { name, email, phone, enquiry, message } = body;

    // Required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 },
      );
    }

    // Length validation
    if (name.length > 80 || email.length > 120 || message.length > 1000) {
      return NextResponse.json(
        { success: false, error: "Payload too large" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.co.uk",
      port: 587,
      secure: false,
      auth: {
        user: process.env.IONOS_EMAIL_USER,
        pass: process.env.IONOS_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <hi@cozzmo-studios.co.uk>`,
      to: "hi@cozzmo-studios.co.uk",
      replyTo: email,
      subject: `New enquiry: ${enquiry}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Enquiry: ${enquiry}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
