import { StarIcon } from "./Icons";
import { twMerge } from "tailwind-merge";

const CardHeader = ({ title, description, className }) => {
  return (
    <>
      <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
        <div className="inline-flex items-center gap-2">
          <div className="size-9">
            <StarIcon color="text-emerald-300" />
          </div>
          <h3 className="font-serif font-semibold text-3xl">{title}</h3>
        </div>
        <p className="text-sm text-white/70 mt-2">{description}</p>
      </div>
    </>
  );
};

export default CardHeader;
