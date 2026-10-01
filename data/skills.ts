import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    category: "Firmware",
    description: "Primary implementation languages",
    items: ["C", "Embedded C", "C++"],
  },
  {
    category: "Automation",
    description: "Test, build, and lab tooling",
    items: ["Python", "Bash"],
  },
  {
    category: "MCU / SoC",
    description: "Targets and architectures",
    items: ["ARM Cortex-M", "RISC-V", "STM32", "NXP Kinetis", "ESP32"],
  },
  {
    category: "Systems",
    description: "Scheduling and operating environments",
    items: ["FreeRTOS", "Embedded Linux", "Linux kernel configuration", "Yocto Project"],
  },
  {
    category: "Interfaces",
    description: "Device communication",
    items: ["SPI", "I2C", "UART", "CAN", "USB"],
  },
  {
    category: "Debug",
    description: "Software and bench observation",
    items: ["GDB", "JTAG", "OpenOCD", "Oscilloscope", "Logic analyzer", "Digital multimeter"],
  },
  {
    category: "Build",
    description: "Firmware build and toolchains",
    items: ["CMake", "Make", "GCC", "Clang", "arm-none-eabi-gcc"],
  },
  {
    category: "Testing",
    description: "Regression and hardware validation",
    items: ["pytest", "Unity", "Ceedling", "Hardware-in-the-loop rigs"],
  },
  {
    category: "Engineering infrastructure",
    description: "Reproducible delivery",
    items: ["Git", "GitHub Actions", "GitLab CI", "Jenkins", "Docker"],
  },
];

export const additionalEngineering = [
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "FastAPI", "REST APIs", "Microservices"],
  },
  {
    label: "AI / developer tooling",
    items: ["LangChain", "LangGraph", "RAG", "LLM orchestration", "LlamaIndex"],
  },
] as const;

