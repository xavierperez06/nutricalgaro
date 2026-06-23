import HightlightCard from "./common/HighlightCard";

const SectionHeader = ({
  badgeText,
  title,
  subtitle,
  highlightText,
  align = "center",
  mb = "mb-10",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${mb} ${isCenter ? "mx-auto max-w-3xl items-center justify-center text-center" : "w-full items-start text-left"}`}
    >
      {badgeText && (
        <span className="mb-4 inline-block rounded-full border border-[var(--color-primary-color-600)]/20 bg-[var(--color-primary-color-600)]/10 px-3 py-1 text-xs font-bold tracking-widest text-[var(--color-primary-color-600)] uppercase">
          {badgeText}
        </span>
      )}
      <h2 className="mb-6 bg-gradient-to-r from-[var(--color-primary-color-900)] via-[var(--color-primary-color-600)] to-[var(--color-primary-color-900)] bg-clip-text text-4xl font-black text-transparent md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-content !text-2xl font-medium ${highlightText ? "mb-6" : "mb-0"}`}
        >
          {subtitle}
        </p>
      )}
      {highlightText && (
        <HightlightCard
          text={highlightText}
          className={`w-full ${isCenter ? "mx-auto" : ""} max-w-2xl`}
        />
      )}
    </div>
  );
};

export default SectionHeader;
