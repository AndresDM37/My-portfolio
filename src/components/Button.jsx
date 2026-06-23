import { twMerge } from "tailwind-merge";

const Button = ({ name, isBeam = false, containerClass, variant = "primary" }) => {
  const variants = {
    primary:
      "border-sky-300/35 bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-400 text-white shadow-sky-500/20 hover:shadow-sky-400/30",
    secondary: "bg-surface/5 text-fg hover:bg-surface/10",
  };

  return (
    <button className={twMerge("btn", variants[variant], containerClass)}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
