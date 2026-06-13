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
      className={`flex flex-col ${isCenter ? "mx-auto mb-16 max-w-3xl items-center justify-center text-center" : "w-full items-start text-left"}`}
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
        <p className="text-content mb-6 text-xl font-medium">{subtitle}</p>
      )}
      {highlightText && (
        <div className="group relative mb-10 w-full">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[var(--color-primary-color-300)] to-amber-200 opacity-40 blur-lg transition duration-500 group-hover:opacity-70"></div>
          <div className="relative rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-slate-900/5 backdrop-blur-md transition duration-300 hover:shadow-lg">
            <svg
              className="absolute -top-4 -left-4 h-10 w-10 text-[var(--color-primary-color-400)]/60"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="pl-4 text-lg leading-relaxed font-medium text-slate-800">
              {highlightText}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
