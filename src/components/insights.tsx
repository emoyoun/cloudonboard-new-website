import { Section } from "@/components/section";

const signals = [
  { value: "Senior-only", label: "The architect who scopes the work stays on it." },
  { value: "GCP & Azure", label: "Platform depth where the estate already runs." },
  { value: "One design", label: "Infrastructure, delivery, and telemetry specified together." },
];

const engagements = [
  {
    sector: "Commerce platform",
    title: "Split a release train that had become the product",
    body: "Checkout, catalog, and payments were shipping as one unit. We redrew ownership around the data each team could change, and put an event log on the boundary that used to be a shared database.",
  },
  {
    sector: "B2B SaaS",
    title: "Treat the cloud bill as a topology problem",
    body: "Idle capacity was the smaller line item. The expensive path was chatty service calls and oversized data movement. Rightsizing followed the boundary change, not a spreadsheet of instance types.",
  },
  {
    sector: "Operations systems",
    title: "Replace a nightly batch with an owned workflow",
    body: "Integrations had piled up as scripts with no contract. We moved the critical path onto explicit events and a workflow with timeouts, retries, and a trace the operator could follow.",
  },
];

const notes = [
  {
    title: "Cost follows topology",
    body: "A FinOps program that never changes service boundaries will plateau. The durable savings are usually in how systems talk.",
  },
  {
    title: "Tracing is a design input",
    body: "If you cannot name the hop that failed, the architecture is not finished. Observability belongs in the first production slice.",
  },
  {
    title: "Integrations need an owner",
    body: "A bus is not a design. Each workflow needs a contract, a timeout, and a team that answers when it stalls.",
  },
];

export function Insights() {
  return (
    <Section
      id="insights"
      index="04"
      eyebrow="Insights"
      title="Representative work, not a logo wall."
      lede="These are patterns from the kind of systems we take on. They are not attributed to named clients, and they are not promises about your estate."
    >
      <ul className="grid gap-4 sm:grid-cols-3">
        {signals.map((signal) => (
          <li key={signal.value} className="rounded-3xl border border-line bg-ink px-5 py-6">
            <p className="font-display text-2xl font-semibold text-foam">{signal.value}</p>
            <p className="mt-2 text-sm leading-6 text-steel">{signal.label}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {engagements.map((item) => (
          <article
            key={item.title}
            className="flex h-full flex-col rounded-3xl border border-line bg-panel p-6 motion-safe:transition-colors hover:border-brand-bright/50"
          >
            <p className="font-mono text-[11px] tracking-[0.16em] text-brand-bright uppercase">
              {item.sector}
            </p>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-foam">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-steel">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {notes.map((note) => (
          <article key={note.title} className="border-t border-brand/50 pt-5">
            <h3 className="font-display text-base font-semibold text-foam">{note.title}</h3>
            <p className="mt-2 text-sm leading-6 text-steel">{note.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
