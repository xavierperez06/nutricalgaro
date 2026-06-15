import Link from "next/link";

const ButtonLink = ({
  href,
  children,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "flex w-max items-center justify-center rounded-xl px-6 py-2.5 text-lg font-semibold transition-all duration-300 ease-out active:scale-95";

  const variants = {
    primary:
      "bg-primary-color-700 hover:bg-primary-color-800 text-gray-900 shadow-md hover:-translate-y-0.5 hover:shadow-lg",
    secondary:
      "bg-transparent text-primary-color-700 ring-1 ring-inset ring-primary-color-300 hover:bg-primary-color-200 hover:text-primary-color-800 hover:ring-primary-color-400",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
