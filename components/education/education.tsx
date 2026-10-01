import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/education";

export function Education() {
  return (
    <section
      className="section-block education-section"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="site-shell">
        <SectionHeading
          number="09"
          label="Education"
          title={<span id="education-title">Computer science, with the hardware always nearby.</span>}
        />

        <article className="education-record">
          <div className="education-seal" aria-hidden="true">
            SLU
          </div>
          <div>
            <p>{education.institution}</p>
            <h3>{education.degree}</h3>
          </div>
          <dl>
            <div>
              <dt>Location</dt>
              <dd>{education.location}</dd>
            </div>
            <div>
              <dt>Dates</dt>
              <dd>
                {education.startDate} — {education.endDate}
              </dd>
            </div>
            <div>
              <dt>GPA</dt>
              <dd>{education.gpa}</dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  );
}

