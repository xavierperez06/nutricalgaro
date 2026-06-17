import HightlightCard from "./common/HighlightCard";

const SectionHeader = ({
  badgeText,
  title,
  subtitle,
  highlightText,
  align = "center",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${isCenter ? "mx-auto mb-10 max-w-3xl items-center justify-center text-center" : "w-full items-start text-left"}`}
    >
      {badgeText && (
        <span className="mb-4 rounded-full bg-[var(--color-primary-color-200)] px-4 py-1.5 text-sm font-bold tracking-wider text-[var(--color-primary-color-600)] uppercase shadow-sm">
          {badgeText}
        </span>
      )}
      <h2 className="mb-6 bg-gradient-to-r from-[var(--color-primary-color-900)] via-[var(--color-primary-color-600)] to-[var(--color-primary-color-900)] bg-clip-text text-4xl font-black text-transparent md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-content mb-6 !text-2xl font-medium">{subtitle}</p>
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
