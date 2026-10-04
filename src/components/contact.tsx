import { CalendarClock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { site } from "@/lib/site";

export function Contact() {
  const calendarHref = site.calendlyUrl || `mailto:${site.email}?subject=Architecture%20review`;

  return (
    <Section
      id="contact"
      index="05"
      eyebrow="Contact"
      title="Book an architecture review."
      lede="Tell us the system and the constraint. We will tell you quickly if this practice is the right fit."
    >
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <ContactForm />
        <aside className="rounded-3xl border border-line bg-ink p-6 sm:p-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line text-brand-bright">
            <CalendarClock aria-hidden="true" size={20} strokeWidth={1.75} />
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold text-foam">
            Calendar
          </h3>
          <p className="mt-3 text-sm leading-6 text-steel">
            {site.calendlyUrl
              ? "Pick a time for a working session. Come with the system diagram you actually run, not the one from last year’s strategy deck."
              : "Email us to hold a working session. Bring the system diagram you actually run, not the one from last year’s strategy deck."}
          </p>
          <a
            href={calendarHref}
            className="mt-6 inline-flex rounded-full border border-line px-5 py-3 text-sm font-medium text-foam transition-colors hover:border-brand-bright/70 hover:bg-panel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-bright"
            {...(site.calendlyUrl
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {site.calendlyUrl ? "Open calendar" : "Request a time"}
          </a>
          <p className="mt-8 text-sm text-steel">
            Direct:{" "}
            <a
              className="text-foam underline decoration-line underline-offset-4 hover:decoration-brand-bright"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </aside>
      </div>
    </Section>
  );
}
