export const debugSteps = [
  {
    number: "01",
    title: "Reproduce",
    body: "Get the failure into a repeatable state. Record the board, build, inputs, and exact sequence.",
  },
  {
    number: "02",
    title: "Instrument",
    body: "Add the smallest useful visibility: serial logs, counters, targeted scripts, or a focused test harness.",
  },
  {
    number: "03",
    title: "Observe",
    body: "Correlate GDB or JTAG state with oscilloscope, logic-analyzer, multimeter, and serial evidence.",
  },
  {
    number: "04",
    title: "Narrow the boundary",
    body: "Ask where the evidence diverges: state, timing, protocol, concurrency, software, or electrical behavior.",
  },
  {
    number: "05",
    title: "Fix",
    body: "Make the smallest safe change. Keep ownership, memory, timing, and restart behavior explicit.",
  },
  {
    number: "06",
    title: "Regress",
    body: "Turn the failure into a repeatable check so the same corner case is difficult to reintroduce.",
  },
] as const;

export const systemLayers = [
  {
    name: "Product / feature logic",
    detail: "Bounded state machines, power transitions, feature behavior, and recovery flows.",
    code: "L5",
  },
  {
    name: "RTOS / Embedded Linux",
    detail: "FreeRTOS-style concurrency patterns, Embedded Linux drivers, configuration, boot, and resource behavior.",
    code: "L4",
  },
  {
    name: "Firmware / device drivers",
    detail: "C and C++ modules for transport, peripheral control, interrupts, and shared hardware paths.",
    code: "L3",
  },
  {
    name: "Device interfaces",
    detail: "SPI, I2C, UART, CAN, and USB framing, timing, retries, and throughput.",
    code: "L2",
  },
  {
    name: "MCU / SoC",
    detail: "ARM Cortex-M, RISC-V, STM32, NXP Kinetis, and ESP32 targets.",
    code: "L1",
  },
  {
    name: "Boards / peripherals / signals",
    detail: "Real hardware observed with scopes, logic analyzers, multimeters, JTAG, and serial logs.",
    code: "L0",
  },
] as const;

