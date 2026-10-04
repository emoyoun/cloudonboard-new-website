import { Topology } from "@/components/topology";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 pt-16 pb-20 sm:px-8 sm:pt-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:pb-28">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-brand-bright uppercase">
            Enterprise software architecture
          </p>
          <h1
            id="hero-title"
            className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight text-foam sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]"
          >
            Engineering resilient cloud architectures and precise system integrations.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-steel sm:text-lg">
            Senior solution architecture for CTOs, engineering VPs, and founders.
            We design the platforms, cloud migrations, and data workflows your
            teams have to operate after the diagram is gone.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2a62c0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-bright"
            >
              Schedule Architecture Review
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-medium text-foam transition-colors hover:border-brand-bright/70 hover:bg-panel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-bright"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
        <Topology />
      </div>
    </section>
  );
}
