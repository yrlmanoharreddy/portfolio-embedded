import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section
      className="section-block experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="site-shell">
        <SectionHeading
          number="02"
          label="Experience"
          title={<span id="experience-title">Production work, from bus timing to recovery paths.</span>}
          intro="A quick read first. Open the technical details when you want the firmware-level version."
        />

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-entry" key={`${experience.company}-${experience.startDate}`}>
              <div className="experience-rail" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i />
              </div>

              <div className="experience-content">
                <header className="experience-header">
                  <div>
                    <p className="experience-company">{experience.company}</p>
                    <h3>{experience.role}</h3>
                  </div>
                  <p className="experience-meta">
                    <span>{experience.location}</span>
                    <span>
                      {experience.startDate} — {experience.endDate}
                    </span>
                  </p>
                </header>

                <p className="experience-overview">{experience.overview}</p>

                <div className="experience-work">
                  <p className="mini-heading">Selected engineering work</p>
                  <ul role="list">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <details className="technical-disclosure">
                  <summary>
                    <span>Technical details</span>
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="technical-disclosure-content">
                    <ul role="list">
                      {experience.technicalDetails.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <div className="technology-row" aria-label={`${experience.company} environment`}>
                      <span>Environment</span>
                      <ul role="list">
                        {experience.technologies.map((technology) => (
                          <li key={technology}>{technology}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
