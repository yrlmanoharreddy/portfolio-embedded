import { SectionHeading } from "@/components/ui/section-heading";
import { debugSteps } from "@/data/engineering";

export function DebugProcess() {
  return (
    <section
      className="section-block debug-section"
      id="engineering"
      aria-labelledby="debug-title"
    >
      <div className="site-shell">
        <SectionHeading
          number="04"
          label="How I debug"
          title={<span id="debug-title">When the firmware says one thing and the hardware says another.</span>}
          intro="The tools change with the fault. The sequence stays deliberately boring: reproduce, observe, narrow, and make the failure testable."
        />

        <ol className="debug-flow" role="list">
          {debugSteps.map((step) => (
            <li key={step.number}>
              <div className="debug-step-head">
                <span>{step.number}</span>
                <i aria-hidden="true" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="debug-readout" aria-label="Example debug evidence sources">
          <span>evidence.sources</span>
          <p>
            GDB <i /> JTAG <i /> SERIAL <i /> SCOPE <i /> LOGIC <i /> HIL
          </p>
          <strong>
            CORRELATE<span className="cursor" aria-hidden="true" />
          </strong>
        </div>
      </div>
    </section>
  );
}
