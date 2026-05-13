import { Resend } from "resend";
import { werkstatt } from "./werkstatt.config";

const apiKey = process.env.RESEND_API_KEY;
const mailFrom = process.env.MAIL_FROM ?? `noreply@${new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
).hostname.replace(/^www\./, "")}`;
const mailTo = process.env.MAIL_TO ?? werkstatt.kontakt.email;

type Payload = Record<string, string | undefined>;

export type SendResult =
  | { ok: true; id?: string; dryRun?: boolean }
  | { ok: false; error: string };

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderHtml(subject: string, fields: Payload): string {
  const rows = Object.entries(fields)
    .filter(([, v]) => v && v !== "on")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#374151;vertical-align:top">${escapeHtml(
          k,
        )}</td><td style="padding:6px 12px;color:#111827;white-space:pre-wrap">${escapeHtml(
          String(v),
        )}</td></tr>`,
    )
    .join("");

  return `<!doctype html><html><body style="font-family:Inter,system-ui,sans-serif;background:#f8f8f5;padding:24px"><table style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden"><tr><td style="padding:20px 24px;background:#0f172a;color:#ffffff;font-weight:700;font-size:16px">${escapeHtml(
    subject,
  )}</td></tr><tr><td style="padding:8px 12px"><table>${rows}</table></td></tr></table></body></html>`;
}

export async function sendInquiry(
  subject: string,
  payload: Payload,
): Promise<SendResult> {
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.log(`[Mailer:DRY-RUN] ${subject}`, payload);
    }
    return { ok: true, dryRun: true };
  }

  try {
    const resend = new Resend(apiKey);
    const res = await resend.emails.send({
      from: `${werkstatt.name} <${mailFrom}>`,
      to: [mailTo],
      replyTo: payload.email,
      subject,
      html: renderHtml(subject, payload),
    });
    if (res.error) return { ok: false, error: res.error.message };
    return { ok: true, id: res.data?.id };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unbekannter Fehler",
    };
  }
}
