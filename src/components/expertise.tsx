import { Section } from "@/components/section";

const points = [
  {
    title: "The architect in the room is the one doing the work",
    body: "No junior bench behind a senior pitch. You work with the person who will sign the design and stay through the first production release.",
  },
  {
    title: "Decisions are scored against production",
    body: "Reliability, cost, security, and the team’s ability to change the system next quarter. Slideware that cannot be operated does not leave the review.",
  },
  {
    title: "Scope stays narrow enough to ship",
    body: "We pick the boundary that removes the real constraint, then leave infrastructure, delivery, and signals specified well enough for your team to own.",
  },
];

export function Expertise() {
  return (
    <Section
      id="expertise"
      index="01"
      eyebrow="Expertise"
      title="Senior architectural leadership without the agency layer."
      lede="CloudOnboard is a practice for leaders who need judgment on distributed systems, cloud platforms, and integrations — and someone accountable for the result."
    >
      <ol className="grid gap-4 md:grid-cols-3">
        {points.map((point, index) => (
          <li
            key={point.title}
            className="rounded-3xl border border-line bg-panel p-6 motion-safe:transition-colors hover:border-brand-bright/50"
          >
            <p className="font-mono text-xs tracking-[0.18em] text-brand-bright">
              0{index + 1}
            </p>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-foam">
              {point.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-steel">{point.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
