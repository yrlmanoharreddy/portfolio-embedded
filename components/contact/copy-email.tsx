"use client";

import { useState } from "react";

type CopyState = "idle" | "copied" | "error";

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<CopyState>("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("error");
    }
  }

  const label =
    state === "copied" ? "Email copied" : state === "error" ? "Copy failed" : "Copy email";

  return (
    <button className="copy-email" type="button" onClick={copyEmail}>
      <span>{label}</span>
      <span aria-hidden="true">{state === "copied" ? "✓" : "⎘"}</span>
      <span className="sr-only" aria-live="polite">
        {state === "copied" ? `${email} copied to clipboard` : state === "error" ? "Email could not be copied" : ""}
      </span>
    </button>
  );
}

