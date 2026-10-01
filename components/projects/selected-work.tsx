import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);

export function SelectedWork() {
  return (
    <section className="section-block work-section" id="work" aria-labelledby="work-title">
      <div className="site-shell">
        <SectionHeading
          number="03"
          label="Selected engineering work"
          title={<span id="work-title">Two problems, shown as engineering records.</span>}
          intro="These are résumé-backed slices of professional work, described without internal product names or confidential detail."
        />

        <div className="case-study-list">
          {featuredProjects.map((project, index) => (
            <article className="case-study" key={project.slug}>
              <header className="case-study-header">
                <p className="case-number">CS-{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <p className="case-context">{project.context}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
              </header>

              <div className="case-study-record">
                <section>
                  <h4 className="record-label">Problem</h4>
                  <p>{project.problem}</p>
                </section>

                <section>
                  <h4 className="record-label">Constraints</h4>
                  <ul className="constraint-list" role="list">
                    {project.constraints.map((constraint) => (
                      <li key={constraint}>{constraint}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h4 className="record-label">Implementation</h4>
                  <p>{project.approach}</p>
                </section>

                <section>
                  <h4 className="record-label">Debugging</h4>
                  <p>{project.debugging}</p>
                </section>

                <section className="record-outcome">
                  <h4 className="record-label">Result</h4>
                  <p>{project.outcome}</p>
                </section>
              </div>

              <footer className="case-study-footer">
                <span>Stack</span>
                <ul role="list">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
