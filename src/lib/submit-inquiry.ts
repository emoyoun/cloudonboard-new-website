"use server";

import { headers } from "next/headers";
import { inquirySchema, type InquiryInput } from "@/lib/inquiry";
import { site } from "@/lib/site";

export type InquiryResult =
  | { ok: true }
  | { ok: false; message: string };

export async function submitInquiry(input: InquiryInput): Promise<InquiryResult> {
  const parsed = inquirySchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Check the highlighted fields and try again.",
    };
  }

  const { name, email, model, scope } = parsed.data;

  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const proto = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = host ? `${proto}://${host}` : site.url;

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: `${origin}/`,
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          _subject: `CloudOnboard consultation — ${model} — ${name}`,
          _template: "table",
          _captcha: "false",
          engagement: model,
          message: scope,
        }),
      },
    );

    if (!response.ok) {
      return {
        ok: false,
        message: `The request could not be sent. Email ${site.email} directly.`,
      };
    }

    const payload = (await response.json()) as {
      success?: string | boolean;
      message?: string;
    };

    if (payload.success === false || payload.success === "false") {
      const activation = /activat/i.test(payload.message ?? "");
      return {
        ok: false,
        message: activation
          ? `Confirm the form activation email sent to ${site.email}, then submit again.`
          : payload.message || `The request could not be sent. Email ${site.email} directly.`,
      };
    }
  } catch {
    return {
      ok: false,
      message: `The request could not be sent. Email ${site.email} directly.`,
    };
  }

  return { ok: true };
}
