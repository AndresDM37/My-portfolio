import backGround from "../assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

const Card = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        "group relative overflow-hidden rounded-3xl border border-line/10 bg-surface/[0.06] shadow-2xl shadow-black/20 backdrop-blur after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:content-[''] after:bg-gradient-to-br after:from-surface/10 after:via-transparent after:to-accent/5 after:opacity-70 transition-all duration-300 hover:-translate-y-1 hover:border-line/15 hover:bg-surface/[0.08] hover:shadow-emerald-500/10",
        className
      )}
    >
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{ backgroundImage: `url(${backGround})` }}
      ></div>
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default Card;
