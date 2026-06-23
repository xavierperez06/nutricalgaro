import Link from "next/link";

const Button = ({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl transition-all duration-300 ease-out active:scale-95";

  const variants = {
    primary:
      "bg-primary-color-700 hover:bg-primary-color-800 text-gray-900 px-6 py-2.5 text-lg font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-lg",
    flashy:
      "bg-gradient-to-r from-primary-color-600 via-primary-color-700 to-primary-color-600 bg-[length:200%_auto] hover:bg-right text-white px-8 py-4 text-xl font-extrabold shadow-xl hover:shadow-primary-color-300/50 hover:-translate-y-1 hover:scale-105",
    secondary:
      "bg-transparent text-primary-color-700 ring-1 ring-inset ring-primary-color-300 px-6 py-2.5 text-lg font-semibold hover:bg-primary-color-200 hover:text-primary-color-900 hover:ring-primary-color-400",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  // If no href is provided, render a standard button
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
