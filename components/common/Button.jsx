const Button = ({
  children,
  type = "button",
  disabled = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center rounded-md px-6 py-2.5 text-white transition-all duration-300 ease-out ${
        disabled
          ? "cursor-not-allowed bg-gray-400 opacity-70"
          : "bg-primary-color-700 hover:bg-primary-color-800 cursor-pointer shadow-md hover:-translate-y-0.5 hover:shadow-lg active:scale-95" // 👈 Active state styling (matches Link)
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
