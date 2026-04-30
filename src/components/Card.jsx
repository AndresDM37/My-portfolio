import backGround from "../assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

const Card = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/20 backdrop-blur after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:content-[''] after:bg-gradient-to-br after:from-white/10 after:via-transparent after:to-emerald-300/5 after:opacity-70 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.075] hover:shadow-emerald-500/10",
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
