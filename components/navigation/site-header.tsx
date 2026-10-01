"use client";

import { useRef } from "react";
import { profile } from "@/data/profile";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Engineering", href: "#engineering" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const mobileMenu = useRef<HTMLDetailsElement>(null);

  function closeMobileMenu() {
    if (mobileMenu.current) {
      mobileMenu.current.open = false;
    }
  }

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a className="wordmark" href="#top" aria-label="Laxmi Manohar Meda, home">
          <span aria-hidden="true">LM</span>
          <span className="wordmark-label">firmware / systems</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href={profile.links.resume} target="_blank" rel="noreferrer">
            Résumé
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>

        <details className="mobile-menu" ref={mobileMenu}>
          <summary>
            <span>Menu</span>
            <span className="menu-chevron" aria-hidden="true">+</span>
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </a>
            ))}
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
            >
              View résumé
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
            >
              GitHub
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
