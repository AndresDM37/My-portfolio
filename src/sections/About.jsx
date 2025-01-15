import Emoji from "../assets/images/emoji2.png";
import { hobbies } from "../utils";
import { toolBoxItems } from "../utils";

import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import CardHeader from "../components/CardHeader";
import ToolBoxItems from "../components/ToolBoxItems";

const About = () => {
  return (
    <section id="About" className="py-20 lg:py-28 lg:mt-1">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow={"About Me"}
          title={"Behind the Code"}
          description={
            "If you want to know more about my skills, who I am, what I do, and what inspires me, this is the perfect place to start."
          }
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className={"text-white md:col-span-2"}>
              <CardHeader
                title={"Who Am I?"}
                description={
                  "Hi, I'm Andrés Felipe Marchena Porras, a passionate software engineer specializing in React and full-stack development. I thrive on solving complex problems, crafting innovative solutions, and turning ideas into reality through code. Let’s build something amazing together!"
                }
              />
              <img
                src={Emoji}
                alt="Emoji"
                className="w-60 mx-auto mt-2 md:mt-0"
              />
            </Card>
            <Card className={"text-white h-[320px] p-0 md:col-span-3"}>
              <CardHeader
                title={"My Toolbox"}
                description={
                  "A curated set of tools and technologies I use to bring ideas to life, from front-end frameworks to back-end solutions."
                }
                className={"px-6 pt-6"}
              />
              <ToolBoxItems items={toolBoxItems} />
              <ToolBoxItems
                items={toolBoxItems}
                className={"mt-6"}
                itemsWrapper={"-translate-x-1/2"}
              />
            </Card>
          </div>
          <Card className={"text-white h-[320px] p-0 flex flex-col"}>
            <CardHeader
              title={"Life Outside the Screen"}
              description={
                "There’s more to me than just coding! Here, you’ll find a glimpse of my hobbies, passions, and what keeps me inspired outside of the digital world. "
              }
              className={"px-6 py-6"}
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{ left: hobby.left, top: hobby.top }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <a
            href="/documents/HV/Ingeniero de Software - FrontEnd Developer.pdf"
            download="/Ingeniero de Software - FrontEnd Developer.pdf"
            className="px-4 py-2 outline outline-2 outline-white/20 bg-gray-800 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity md:w-1/4 mx-auto text-center"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
