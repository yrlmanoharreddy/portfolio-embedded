import type { EngineeringProject } from "@/types/content";

export const projects: EngineeringProject[] = [
  {
    title: "Peripheral state, transport, and recovery work",
    slug: "peripheral-power-recovery",
    context: "Selected résumé-backed work · Apple",
    summary:
      "Related firmware work across power-state behavior, peripheral transport, interrupt handling, and fault recovery.",
    problem:
      "Across related firmware paths, peripherals needed bounded behavior through power changes, interrupts, communication events, and restart conditions.",
    constraints: [
      "Fixed boot-time budget",
      "Bounded memory",
      "Constrained firmware scheduling",
      "Cold and warm restart behavior",
    ],
    approach:
      "Implemented a C fallback for a power-gated path, kept state transitions explicit, and aligned separate boot and recovery work around a known initialization path.",
    debugging:
      "A Python harness replayed 240 power, reset, and peripheral-fault scenarios. Related wakeup, timing, and bus behavior was examined with JTAG, logic-analyzer, and oscilloscope traces.",
    outcome:
      "The harness made 240 scenarios repeatable. Related recovery changes returned watchdog resets through a known initialization path and preserved protocol state across restart flows.",
    technologies: ["C", "Python", "JTAG", "USB", "SPI", "I2C", "UART"],
    featured: true,
    status: "professional",
  },
  {
    title: "CAN, serial, and validation work",
    slug: "can-serial-timing",
    context: "Selected résumé-backed work · Samsung R&D Institute India",
    summary:
      "Related firmware work across CAN arbitration, serial control, timing drift, memory behavior, and board validation.",
    problem:
      "Across related paths, message collisions under load exposed a race between interrupt work and bus access, while separate timing drift surfaced during board-level validation.",
    constraints: [
      "Interrupt timing",
      "Bus arbitration",
      "Tight memory ceilings",
      "Concurrent peripheral pressure",
    ],
    approach:
      "Refactored the arbitration and control paths, tightened timing checks, and replaced brittle buffer handling with bounded allocations.",
    debugging:
      "GDB traces exposed the interrupt and bus-access race; serial logs traced timing drift; logic-analyzer and oscilloscope captures isolated separate lab fault windows.",
    outcome:
      "The CAN changes stopped message collisions under load. Separately, reproducible scripts, traceable diffs, and clearer handoffs supported 12 hardware validation cycles.",
    technologies: ["C", "CAN", "Embedded Linux", "GDB", "Bash", "Git"],
    featured: true,
    status: "professional",
  },
  // Intentionally not rendered. Replace with a verified project and set featured
  // to true only after its claims and links have been checked.
  {
    title: "Future verified project",
    slug: "future-verified-project",
    context: "Disabled source placeholder",
    summary: "Reserved for a future project with verified source material.",
    problem: "To be documented.",
    constraints: [],
    approach: "To be documented.",
    debugging: "To be documented.",
    outcome: "To be documented.",
    technologies: [],
    featured: false,
    status: "placeholder",
  },
];
