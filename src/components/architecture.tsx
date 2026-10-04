import { Section } from "@/components/section";

const phases = [
  {
    title: "Frame the constraint",
    body: "What cannot move, what is already failing, and which risk is actually blocking the business. We write that down before proposing a platform.",
  },
  {
    title: "Draw the boundaries",
    body: "Domains, data ownership, and interfaces. Microservices only where independent change is worth the operational cost.",
  },
  {
    title: "Prove a production path",
    body: "A thin slice in the real environment: identity, deployment, failure, and one integration that matters. Measured, not demonstrated on a laptop.",
  },
  {
    title: "Leave an operable system",
    body: "Infrastructure as code, pipeline gates, and the logs, metrics, and traces your on-call will actually use.",
  },
];

export function Architecture() {
  return (
    <Section
      id="architecture"
      index="02"
      eyebrow="Architecture"
      title="A design process that ends in a system you can run."
      lede="Architecture here means the decisions that survive contact with traffic, cost, and the next team that has to change the code."
    >
      <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
        {phases.map((phase, index) => (
          <li key={phase.title} className="bg-ink p-6 sm:p-7">
            <p className="font-mono text-xs text-brand-bright">0{index + 1}</p>
            <h3 className="mt-5 font-display text-lg font-semibold text-foam">
              {phase.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-steel">{phase.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
