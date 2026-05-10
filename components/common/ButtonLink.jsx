import Link from "next/link";

const ButtonLink = ({ href, children, className = "" }) => {
  return (
    <Link
      href={href}
      className={`bg-primary-color-700 hover:bg-primary-color-800 flex w-max items-center justify-center rounded-md px-6 py-2.5 text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
