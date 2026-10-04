import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How CloudOnboard handles information submitted through this site.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8">
      <p className="font-mono text-xs tracking-[0.18em] text-brand-bright uppercase">
        Privacy
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foam">
        Privacy policy
      </h1>
      <p className="mt-4 text-sm text-steel">Updated 4 October 2026</p>
      <div className="mt-10 space-y-6 text-sm leading-7 text-steel">
        <p>
          {site.name} is an independent consulting practice. This page describes
          the information this website asks for and what happens to it.
        </p>
        <h2 className="font-display text-xl font-semibold text-foam">What you submit</h2>
        <p>
          The consultation form asks for your name, company email, engagement
          model, and a description of the work. Submitting the form checks those
          fields, then emails them to {site.email}. This site does not keep a
          copy of the submission.
        </p>
        <h2 className="font-display text-xl font-semibold text-foam">Email and calendar</h2>
        <p>
          If you email us or book time on a calendar we link to, that provider
          processes the message under its own terms. We use what you send to
          reply about a possible engagement. We do not sell contact details.
        </p>
        <h2 className="font-display text-xl font-semibold text-foam">Cookies</h2>
        <p>
          This site does not set analytics or advertising cookies. Your browser
          may still store what it needs to load the page.
        </p>
        <h2 className="font-display text-xl font-semibold text-foam">Contact</h2>
        <p>
          Questions about this policy:{" "}
          <a className="text-foam underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
