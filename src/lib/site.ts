export const site = {
  name: "CloudOnboard",
  tagline:
    "Enterprise Software Architecture, Advanced Cloud Solutions & System Integration",
  description:
    "Senior solution architecture for CTOs and engineering leaders. CloudOnboard designs resilient cloud platforms, migrations, and system integrations for production.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cloudonboard.ca",
  email: "mohamad.yonos@cloudonboard.ca",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  linkedin: "https://www.linkedin.com/company/cloudonboard",
  github: "https://github.com/cloudonboard",
} as const;

export const nav = [
  { href: "#expertise", label: "Expertise" },
  { href: "#architecture", label: "Architecture" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
] as const;
