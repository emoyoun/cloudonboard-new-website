import { Architecture } from "@/components/architecture";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Expertise } from "@/components/expertise";
import { Hero } from "@/components/hero";
import { Insights } from "@/components/insights";

export default function Home() {
  return (
    <main id="main">
      <div id="top">
        <Hero />
      </div>
      <Expertise />
      <Architecture />
      <Capabilities />
      <Insights />
      <Contact />
    </main>
  );
}
