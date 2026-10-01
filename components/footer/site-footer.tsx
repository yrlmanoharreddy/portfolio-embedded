import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <p>Software is easy until hardware disagrees.</p>
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>

        <div className="footer-build" aria-label="Portfolio build status">
          <span>build: portfolio.release</span>
          <span>
            status <i aria-hidden="true" /> stable
          </span>
        </div>

        <nav aria-label="Footer navigation">
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.links.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
          <a href="#top">Top ↑</a>
        </nav>
      </div>
    </footer>
  );
}
