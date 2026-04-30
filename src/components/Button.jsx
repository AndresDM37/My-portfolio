import { twMerge } from "tailwind-merge";

const Button = ({ name, isBeam = false, containerClass, variant = "primary" }) => {
  const variants = {
    primary:
      "border-emerald-300/30 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 hover:shadow-emerald-500/25",
    secondary: "bg-white/5 text-white hover:bg-white/10",
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
