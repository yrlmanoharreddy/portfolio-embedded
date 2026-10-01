import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { DebugProcess } from "@/components/engineering/debug-process";
import { SystemStack } from "@/components/engineering/system-stack";
import { Education } from "@/components/education/education";
import { Experience } from "@/components/experience/experience";
import { SiteFooter } from "@/components/footer/site-footer";
import { Hero } from "@/components/hero/hero";
import { SiteHeader } from "@/components/navigation/site-header";
import { EngineeringNotes } from "@/components/notes/engineering-notes";
import { Pi4Micronaut } from "@/components/open-source/pi4micronaut";
import { SelectedWork } from "@/components/projects/selected-work";
import { Toolkit } from "@/components/skills/toolkit";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site-url";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  telephone: "+1-314-384-9238",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cupertino",
    addressRegion: "CA",
    addressCountry: "US",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Saint Louis University",
  },
  sameAs: [profile.links.github, profile.links.linkedin],
  knowsAbout: [
    "Embedded software",
    "Firmware",
    "C",
    "C++",
    "Embedded Linux",
    "FreeRTOS",
    "Hardware-software integration",
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Hero />
        <About />
        <Experience />
        <SelectedWork />
        <DebugProcess />
        <SystemStack />
        <Toolkit />
        <Pi4Micronaut />
        <EngineeringNotes />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
