const SectionHeader = ({ title, eyebrow, description }) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-center text-xs font-bold uppercase tracking-[0.24em] text-emerald-200 shadow-lg shadow-black/10 backdrop-blur">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-5 text-center font-serif text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-white/60 md:text-lg">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
