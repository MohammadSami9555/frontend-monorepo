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
    "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus:outline-none";

  // ⬇️ Size: balanced, text cut nahi hoga
  const size = "px-8 py-3 text-sm rounded-full";

  const styles = {
    primary:
      "bg-zinc-900 text-white shadow-md hover:bg-zinc-800 hover:shadow-lg active:scale-[0.98]",
    secondary:
      "bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-100 active:scale-[0.98]",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${size} ${styles[variant]}`}
    >
      {text}
    </button>
  );
}
