import { NextResponse } from "next/server";
import { z } from "zod";
import { addNewsletterContact, isNewsletterConfigured } from "@/src/services/email";
import { db } from "@/src/services/db";

const bodySchema = z.object({ email: z.string().trim().toLowerCase().email() });

/**
 * POST /api/newsletter — adds the address to the Resend audience and/or the
 * newsletter_subscribers table, whichever is configured. In development with
 * neither configured it succeeds without storing anything.
 */
export async function POST(req: Request) {
  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success)
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  const { email } = parsed.data;

  const sql = db();
  if (!isNewsletterConfigured() && !sql) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Sign-ups are temporarily unavailable." }, { status: 503 });
    }
    console.info(`[newsletter] dev mode — would subscribe ${email}`);
    return NextResponse.json({ ok: true, mode: "demo" });
  }

  try {
    if (sql) {
      await sql`insert into newsletter_subscribers (email) values (${email}) on conflict (email) do nothing`;
    }
    if (isNewsletterConfigured()) await addNewsletterContact(email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] subscribe failed", err);
    return NextResponse.json({ error: "Couldn't subscribe right now. Please try again." }, { status: 502 });
  }
}
