import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import { StarIcon } from "../components/StarIcon";

const About = () => {
  return (
    <section className="pb-96">
      <SectionHeader
        eyebrow={"About Me"}
        title={"Behind the Code"}
        description={
          "If you want to know more about my skills, who I am, what I do, and what inspires me, this is the perfect place to start."
        }
      />
      <div>
        <Card>
          <div>
            <div className="size-6">
              <StarIcon />
            </div>
            <h3>Who Am I?</h3>
            <p></p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
