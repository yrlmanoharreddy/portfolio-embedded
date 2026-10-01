import { SectionHeading } from "@/components/ui/section-heading";
import { additionalEngineering, skillGroups } from "@/data/skills";

export function Toolkit() {
  return (
    <section className="section-block toolkit-section" id="toolkit" aria-labelledby="toolkit-title">
      <div className="site-shell">
        <SectionHeading
          number="06"
          label="Engineering toolkit"
          title={<span id="toolkit-title">Tools grouped by the work they support.</span>}
          intro="No percentages. These are technologies listed in my résumé, arranged by where they fit in an embedded workflow."
        />

        <div className="toolkit-grid">
          {skillGroups.map((group, index) => (
            <section className="tool-group" key={group.category}>
              <header>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{group.category}</h3>
                  <p>{group.description}</p>
                </div>
              </header>
              <ul role="list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <aside className="beyond-device">
          <div>
            <p className="mini-heading">Beyond the device</p>
            <h3>Useful secondary context, kept secondary.</h3>
          </div>
          <div className="additional-groups">
            {additionalEngineering.map((group) => (
              <div key={group.label}>
                <p>{group.label}</p>
                <ul role="list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
