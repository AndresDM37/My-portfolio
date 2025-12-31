export const TechIcon = ({ component, size = "size-10" }) => {
  const Component = component;
  return (
    <>
      <div className={`${size} fill-[url(#tech-icon-gradient)]`}>
        <Component />
      </div>
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
};

export default TechIcon;
