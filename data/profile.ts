export const profile = {
  name: "Laxmi Manohar Meda",
  title: "Embedded Software Engineer",
  alternateTitle: "Firmware Engineer",
  location: "Cupertino, CA",
  email: "laxmimanoharmeda@gmail.com",
  phone: "314-384-9238",
  links: {
    github: "https://github.com/yrlmanoharreddy",
    linkedin: "https://www.linkedin.com/in/manohar-reddy-246436151/",
    resume: "/resume/laxmi-manohar-meda-resume.pdf",
  },
  intro:
    "I build and debug firmware where timing, memory, and electrical reality decide whether software works.",
  summary:
    "My work spans production C/C++, peripheral interfaces, embedded Linux, recovery paths, and the test tooling needed to understand behavior on real boards.",
  engineeringProfile: [
    { label: "Role", value: "Embedded software / firmware" },
    { label: "Core", value: "C · C++ · Python" },
    { label: "Systems", value: "FreeRTOS · Embedded Linux" },
    { label: "Targets", value: "ARM Cortex-M · RISC-V" },
    { label: "Interfaces", value: "SPI · I2C · UART · CAN · USB" },
    { label: "Debug", value: "GDB · JTAG · Logic analyzer" },
  ],
} as const;
