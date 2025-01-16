import Card from "../components/Card";

import backGround from "../assets/images/grain.jpg";

const StudyItem = ({ study }) => {
  return (
    <Card className={"md:col-span-2"}>
      <div className="flex flex-col p-6 md:py-8 md:px-10 gap-10">
        <div className="inline-flex items-center gap-2">
          {study.icon && (
            <div className="size-14">
              <study.icon color={"text-red-700"} />
            </div>
          )}
          <h5 className="uppercase text-sm text-white/70">
            {study.schoolar + " ● " + study.dateFinish}
          </h5>
        </div>
        <h3 className="font-semibold text-3xl text-white">{study.title}</h3>
        {study.state ? (
          <div className="flex items-center justify-center h-32 outline outline-2 text-white font-semibold rounded-lg">
            <p>Study in Progress</p>
          </div>
        ) : (
          <img
            src={study.image}
            alt={`${study.title} Certificate`}
            className="rounded-md size- lg:h-[600px] w-[900px] "
          />
        )}
      </div>
    </Card>
  );
};

export default StudyItem;
