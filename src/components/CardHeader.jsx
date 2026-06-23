import { StarIcon } from "./Icons";
import { twMerge } from "tailwind-merge";

const CardHeader = ({ title, description, className }) => {
  return (
    <>
      <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
        <div className="inline-flex items-center gap-2">
          <div className="size-8 text-emerald-300 drop-shadow-[0_0_18px_rgba(110,231,183,0.3)]">
            <StarIcon color="text-emerald-300" />
          </div>
          <h3 className="text-h3 text-fg">{title}</h3>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-fg/65">{description}</p>
      </div>
    </>
  );
};

export default CardHeader;
