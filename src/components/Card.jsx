import backGround from "../assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

const Card = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:after:outline-white/30",
        className
      )}
    >
      <div
        className="absolute inset-0 z-30 opacity-5"
        style={{ backgroundImage: `url(${backGround})` }}
      ></div>
      {children}
    </div>
  );
};

export default Card;
