import {
  Activity,
  Boxes,
  Cloud,
  Gauge,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/section";

const pillars: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Enterprise Software Architecture",
    body: "Service boundaries, data ownership, and failure modes for distributed systems and modular backends. The design matches the load and the team you have.",
    icon: Boxes,
  },
  {
    title: "Cloud Migration & Infrastructure",
    body: "Landing zones, hybrid connectivity, and cutovers on Google Cloud and Azure. The migration plan is something operations can run, not a target-state poster.",
    icon: Cloud,
  },
  {
    title: "Azure/GCP Cloud Cost Optimization",
    body: "FinOps tied to architecture: rightsizing, commitment strategy, and refactors that remove expensive call paths without giving up the latency budget.",
    icon: Gauge,
  },
  {
    title: "DevSecOps",
    body: "Pipeline gates, identity, and infrastructure as code as one lifecycle. Changes stay reviewed, repeatable, and reversible.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Observability",
    body: "Logging, metrics, and distributed tracing designed with the system, so an incident has an owner and a path to the failing hop.",
    icon: Activity,
  },
  {
    title: "System Integration & Workflows",
    body: "APIs, event flows, and backend automation across Pub/Sub, Eventarc, Workflows, and the systems those events have to reach.",
    icon: Workflow,
  },
];

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      index="03"
      eyebrow="Capabilities"
      title="Six practices. One production system."
      lede="Engagements usually cross more than one of these. The point is a coherent design, not a menu of disconnected workstreams."
    >
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {pillars.map((pillar) => (
          <li key={pillar.title}>
            <article className="h-full rounded-3xl border border-line bg-panel p-6 motion-safe:transition-colors hover:border-brand-bright/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-ink text-brand-bright">
                <pillar.icon aria-hidden="true" size={20} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foam">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">{pillar.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
