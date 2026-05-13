import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  nachricht?: string;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  if (!data.name || !data.email || !data.nachricht) {
    return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 422 });
  }

  // Hier den eigentlichen Mail-Versand anbinden (z.B. Resend, Postmark, SMTP).
  // Beispiel: await mailer.send({ from: ..., to: ..., subject: ..., text: ... });

  if (process.env.NODE_ENV !== "production") {
    console.log("[Kontakt]", data);
  }

  return NextResponse.json({ ok: true });
}
