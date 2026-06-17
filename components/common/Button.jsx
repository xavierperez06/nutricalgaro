"use client";

const Button = ({
  children,
  type = "button",
  disabled = false,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "flex items-center justify-center rounded-xl transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:bg-gray-400 disabled:bg-none disabled:text-gray-700 disabled:opacity-70 disabled:shadow-none disabled:transform-none disabled:ring-0";

  const variants = {
    primary:
      "bg-primary-color-700 text-gray-900 px-6 py-2.5 font-semibold shadow-md hover:enabled:bg-primary-color-800 hover:enabled:-translate-y-0.5 hover:enabled:shadow-lg active:enabled:scale-95",
    secondary:
      "bg-transparent text-primary-color-700 ring-1 ring-inset ring-primary-color-300 px-6 py-2.5 font-semibold hover:enabled:bg-primary-color-200 hover:enabled:text-primary-color-900 hover:enabled:ring-primary-color-400 active:enabled:scale-95",
    flashy:
      "bg-gradient-to-r from-primary-color-600 via-primary-color-700 to-primary-color-600 bg-[length:200%_auto] text-white px-8 py-4 text-xl font-extrabold shadow-xl hover:enabled:bg-right hover:enabled:shadow-primary-color-300/50 hover:enabled:-translate-y-1 hover:enabled:scale-105 active:enabled:scale-95",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
