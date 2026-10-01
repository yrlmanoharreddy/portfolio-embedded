import { SectionHeading } from "@/components/ui/section-heading";
import { systemLayers } from "@/data/engineering";

export function SystemStack() {
  return (
    <section className="section-block stack-section" aria-labelledby="stack-title">
      <div className="site-shell">
        <SectionHeading
          number="05"
          label="Hardware ↔ software stack"
          title={<span id="stack-title">The work crosses layers. The bug usually does too.</span>}
          intro="Open a layer for the kind of work I have done there. Every layer is sourced from the résumé; none implies a separate project."
        />

        <div className="stack-layout">
          <div className="stack-annotation">
            <p className="mini-heading">Boundary map</p>
            <p>
              A timing fault may begin in an interrupt, show up as a framing
              error, and only become obvious on a logic trace. I am comfortable
              following that path in both directions.
            </p>
            <div className="stack-axis" aria-hidden="true">
              <span>Intent</span>
              <i />
              <span>Signal</span>
            </div>
          </div>

          <div className="layer-stack">
            {systemLayers.map((layer) => (
              <details key={layer.code}>
                <summary>
                  <span className="layer-code">{layer.code}</span>
                  <span>{layer.name}</span>
                  <span className="layer-toggle" aria-hidden="true">+</span>
                </summary>
                <p>{layer.detail}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

