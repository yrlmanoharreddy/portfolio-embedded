import { profile } from "@/data/profile";

const systemStatus = [
  ["portfolio.boot", "OK"],
  ["firmware.focus", "ACTIVE"],
  ["hardware.debug", "READY"],
  ["coffee.level", "NOMINAL"],
] as const;

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid site-shell">
        <div className="hero-copy">
          <p className="section-code">
            <span>PORTFOLIO</span>
            <span>FW.01</span>
          </p>
          <p className="identity-line">
            {profile.name} <span aria-hidden="true">/</span> {profile.location}
          </p>
          <h1 id="hero-title">
            Embedded software,
            <span>close to the hardware.</span>
          </h1>
          <p className="hero-role">
            {profile.title} <span>/ {profile.alternateTitle}</span>
          </p>
          <p className="hero-intro">{profile.intro}</p>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions" aria-label="Portfolio links">
            <a className="button button-primary" href="#experience">
              View experience <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-secondary"
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
            >
              View résumé <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="engineering-profile" aria-labelledby="profile-title">
          <div className="panel-heading">
            <span id="profile-title">Engineering profile</span>
            <span className="panel-address" aria-hidden="true">
              0x4002_0000
            </span>
          </div>
          <dl>
            {profile.engineeringProfile.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="signal-figure" aria-hidden="true">
            <span className="signal-label">CLK</span>
            <i className="signal signal-a" />
            <span className="signal-label">DATA</span>
            <i className="signal signal-b" />
          </div>
        </aside>
      </div>

      <div className="site-shell status-row" aria-label="System status">
        <p>System status</p>
        <div>
          {systemStatus.map(([label, value]) => (
            <span key={label}>
              {label} <i aria-hidden="true" /> <strong>{value}</strong>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
