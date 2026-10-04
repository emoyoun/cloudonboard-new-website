const nodes = [
  { title: "Edge and identity", detail: "Ingress, auth, policy" },
  { title: "Service boundaries", detail: "Owned data, explicit APIs" },
  { title: "Event backbone", detail: "Pub/Sub, Eventarc" },
  { title: "Workflows", detail: "Long-running integration" },
  { title: "Data plane", detail: "Pipelines and contracts" },
  { title: "Observability", detail: "Logs, metrics, traces" },
];

const diagram = [
  { title: "Clients", meta: "Edge" },
  { title: "API gateway", meta: "Identity" },
  { title: "Policy", meta: "Access" },
  { title: "Workflows", meta: "Orchestration" },
  { title: "Pub/Sub", meta: "Events" },
  { title: "Services", meta: "Domains" },
  { title: "Warehouse", meta: "Data" },
  { title: "Traces", meta: "Signals" },
  { title: "Metrics", meta: "Signals" },
];

export function Topology() {
  return (
    <figure className="relative overflow-hidden rounded-3xl border border-line bg-ink/80 shadow-[0_0_0_1px_rgba(126,176,240,0.04),0_24px_80px_rgba(0,0,0,0.35)]">
      <figcaption className="flex items-center justify-between border-b border-line px-5 py-4">
        <span className="font-mono text-[11px] tracking-[0.18em] text-steel uppercase">
          Reference topology
        </span>
        <span className="font-mono text-[11px] text-brand-bright">GCP · Azure</span>
      </figcaption>

      <div className="relative hidden p-5 md:block">
        <svg
          viewBox="0 0 360 280"
          className="pointer-events-none absolute inset-5 h-[calc(100%-2.5rem)] w-[calc(100%-2.5rem)]"
          aria-hidden="true"
        >
          <g fill="none" stroke="#7eb0f0" strokeOpacity="0.45" strokeWidth="1.25">
            <path d="M60 36 H180 H300" />
            <path d="M60 36 V140 H300 V36" />
            <path d="M180 140 V248" />
            <path d="M60 248 H300" />
          </g>
        </svg>
        <div className="relative grid grid-cols-3 gap-3">
          {diagram.map((node) => (
            <div
              key={node.title}
              className="rounded-2xl border border-line bg-panel px-3 py-3"
            >
              <p className="font-mono text-[10px] tracking-[0.16em] text-brand-bright uppercase">
                {node.meta}
              </p>
              <p className="mt-1 text-sm font-medium text-foam">{node.title}</p>
            </div>
          ))}
        </div>
      </div>

      <ol className="grid gap-3 p-4 md:hidden">
        {nodes.map((node, index) => (
          <li key={node.title} className="rounded-2xl border border-line bg-panel px-4 py-3">
            <p className="font-mono text-[11px] text-brand-bright">0{index + 1}</p>
            <p className="mt-1 text-sm font-medium text-foam">{node.title}</p>
            <p className="text-sm text-steel">{node.detail}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
