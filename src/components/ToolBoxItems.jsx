import { Fragment } from "react";
import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";

const ToolBoxItems = ({ items, className, itemsWrapper }) => {
  return (
    <>
      <div
        className={twMerge(
          "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
          className
        )}
      >
        <div
          className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapper)}
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {items.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-white/85 shadow-lg shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/[0.07] hover:text-white"
                >
                  <TechIcon component={item.iconType} />
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToolBoxItems;
