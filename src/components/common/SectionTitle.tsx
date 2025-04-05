
import React from "react";

interface SectionTitleProps {
  title: string;
  highlightedText?: string;
  subtitle: string;
  className?: string;
}

const SectionTitle = ({
  title,
  highlightedText,
  subtitle,
  className = "",
}: SectionTitleProps) => {
  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title} {highlightedText && <span className="text-gradient">{highlightedText}</span>}
      </h2>
      <p className="text-lg text-foreground/70">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
