import NextImage from "next/image";

const HighlightImage = ({
  src,
  alt,
  className,
  sizes,
  cardTitle,
  cardText,
  placeholder = "blur",
}) => {
  return (
    <div className={`relative mx-auto w-full max-w-md ${className}`}>
      <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl border-2 border-[var(--color-primary-color-200)] bg-transparent"></div>
      <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-amber-100/50"></div>

      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-200 shadow-2xl">
        <NextImage
          src={src}
          alt={alt}
          placeholder={placeholder}
          fill
          className="object-cover transition duration-700 hover:scale-105"
          quality={90}
          sizes={sizes}
        />
      </div>

      {cardText && (
        <div className="absolute -right-2 -bottom-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-900/5 sm:mr-5 lg:-right-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-color-100)] text-[var(--color-primary-color-600)]">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">{cardTitle}</p>
            <p className="text-xs text-slate-500">{cardText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HighlightImage;
