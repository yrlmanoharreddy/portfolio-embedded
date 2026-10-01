import { SectionHeading } from "@/components/ui/section-heading";

const operatingRange = [
  ["Device boundary", "Peripheral drivers, transport layers, interrupts, and state machines"],
  ["Constraints", "Boot time, bounded memory, scheduling, bus timing, and power state"],
  ["Bench evidence", "JTAG, GDB, oscilloscope, logic analyzer, multimeter, and serial logs"],
  ["Regression", "Python and Bash harnesses, unit tests, HIL rigs, CI, and reproducible builds"],
] as const;

export function About() {
  return (
    <section className="section-block about-section" id="about" aria-labelledby="about-title">
      <div className="site-shell">
        <SectionHeading
          number="01"
          label="Engineering profile"
          title={<span id="about-title">Software gets interesting when hardware gets involved.</span>}
        />

        <div className="about-body-grid">
          <div className="about-copy">
            <p>
              Most of my work sits at the point where software can no longer be
              judged by software alone. At Apple and Samsung R&amp;D, that has
              meant C and C++ firmware, peripheral paths, interrupt behavior,
              power and recovery states, and failures that only appear on a
              board.
            </p>
            <p>
              Constraints are part of the design. A fix still has to respect a
              boot window, a memory ceiling, bus timing, and the next restart.
              I use debugger state, hardware traces, and repeatable test
              harnesses to move from a symptom to evidence, then to the
              smallest safe change.
            </p>
            <p>
              The same boundary shows up in open source. With Pi4Micronaut at
              Saint Louis University, I worked on the Java and Raspberry Pi
              hardware path: GPIO components, physical-device validation, tests,
              build stability, and documentation for the next person wiring it
              up.
            </p>
          </div>

          <aside className="operating-range" aria-label="Engineering operating range">
            <p className="mini-heading">Operating range</p>
            <dl>
              {operatingRange.map(([label, value], index) => (
                <div key={label}>
                  <dt>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {label}
                  </dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

