import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

const workAreas = [
  ["01", "Integration", "Micronaut and Pi4J wiring for Raspberry Pi device access"],
  ["02", "Components", "Reusable GPIO interfaces for sensors, actuators, LEDs, switches, displays, and motors"],
  ["03", "Validation", "Unit and integration tests plus checks on connected Raspberry Pi hardware"],
  ["04", "Stewardship", "Build fixes, dependency cleanup, documentation, pull requests, and release readiness"],
] as const;

export function Pi4Micronaut() {
  return (
    <section
      className="section-block open-source-section"
      id="open-source"
      aria-labelledby="open-source-title"
    >
      <div className="site-shell">
        <SectionHeading
          number="07"
          label="Open source / Pi4Micronaut"
          title={<span id="open-source-title">Java applications, connected to real Raspberry Pi hardware.</span>}
        />

        <div className="open-source-layout">
          <div className="open-source-copy">
            <p className="project-mark">Pi4M</p>
            <p>
              Pi4Micronaut is an open-source framework for Java-based IoT on
              Raspberry Pi. I worked on the path between Micronaut applications
              and Pi4J-backed hardware access, with an emphasis on reusable
              interfaces rather than repeated setup glue.
            </p>
            <p>
              The work included tests, physical-device validation, build and
              dependency fixes, GPIO troubleshooting, documentation, and the
              normal branch, pull-request, review, and issue workflow of an
              open-source project.
            </p>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub profile <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ol className="open-source-work" role="list">
            {workAreas.map(([number, title, body]) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
