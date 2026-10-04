"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Mark } from "@/components/mark";
import { nav } from "@/lib/site";

const linkClass =
  "text-sm text-steel transition-colors hover:text-foam focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-bright";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-navy/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-bright"
        >
          <Mark className="h-7 w-10" />
          <span className="font-display text-sm font-semibold tracking-[0.14em] text-foam uppercase">
            CloudOnboard
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2a62c0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-bright sm:inline-flex"
          >
            Book a Consultation
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-foam lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-ink px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-base text-foam hover:bg-panel"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a
                href="#contact"
                className="block rounded-full bg-brand px-4 py-3 text-center text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Book a Consultation
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
