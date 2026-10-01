import type { ReactNode } from "react";

type SectionHeadingProps = {
  number: string;
  label: string;
  title: ReactNode;
  intro?: string;
};

export function SectionHeading({
  number,
  label,
  title,
  intro,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="section-label">
        <span>{number}</span> {label}
      </p>
      <div>
        <h2>{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
    </header>
  );
}

