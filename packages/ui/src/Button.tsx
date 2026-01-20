"use client";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export function Button({
  text,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200";

  const size = "px-6 py-2.5 text-sm rounded-full";

  const styles = {
    primary:
      "bg-black text-white hover:bg-gray-900 shadow-sm hover:shadow-md",
    secondary:
      "bg-white text-black border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button onClick={onClick} className={`${base} ${size} ${styles[variant]}`}>
      {text}
    </button>
  );
}
