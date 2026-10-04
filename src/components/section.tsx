import type { ReactNode } from "react";

export function Section({
  id,
  index,
  eyebrow,
  title,
  lede,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-t border-line py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-brand-bright uppercase">
            {index} / {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-foam sm:text-4xl"
          >
            {title}
          </h2>
          {lede ? (
            <p className="mt-4 text-base leading-7 text-steel sm:text-lg">{lede}</p>
          ) : null}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
