import Image from "next/image";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="bg-ice">
        <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8">
          <Image
            src="/brand/logo.jpg"
            alt="CloudOnboard. Enterprise software architecture, advanced cloud solutions and system integration."
            width={1024}
            height={558}
            sizes="(min-width: 768px) 768px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <p className="font-display text-sm font-semibold tracking-[0.14em] text-foam uppercase">
            {site.name}
          </p>
          <p className="mt-3 text-sm leading-6 text-steel">
            Independent consulting practice. Cloud platform names are trademarks
            of their respective owners. Work is scoped in a written statement of
            work.
          </p>
          <p className="mt-4 text-sm text-steel">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
          <a className="text-steel hover:text-foam" href="/privacy">
            Privacy
          </a>
          <a
            className="text-steel hover:text-foam"
            href={site.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="text-steel hover:text-foam"
            href={site.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a className="text-steel hover:text-foam" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </nav>
      </div>
    </footer>
  );
}
