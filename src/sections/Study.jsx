import SectionHeader from "../components/SectionHeader";
import StudyItem from "../components/StudyItems";

import { studyItems } from "../utils";

const Study = () => {
  return (
    <section id="Study" className="py-20">
      <SectionHeader
        eyebrow={"Study"}
        title={"Learning & Growing"}
        description={
          "Discover my academic journey and certifications that have shaped my skills and fueled my passion for technology. Each milestone represents a commitment to growth and excellence."
        }
      />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-2 grid-cols-1 mt-12 gap-5 w-full">
          {studyItems.map((item, index) => (
            <StudyItem key={index} study={item} /> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default Study;
