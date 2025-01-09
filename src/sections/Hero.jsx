import Button from "../components/Button";
import { StarIcon } from "../components/StarIcon";
import emojiImage from "../assets/images/emoji.png";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative bottom-10 z-0">
      <div className="size-[610px] hero-ring"></div>
      <div className="size-[810px] hero-ring"></div>
      <div className="size-[1010px] hero-ring"></div>
      <div className="size-[1210px] hero-ring"></div>
      <div className="size-[1410px] hero-ring"></div>
      <div className="size-[1610px] hero-ring"></div>
      <div className="size-[1810px] hero-ring"></div>
      <div className="size-[2010px] hero-ring"></div>

      <div className="absolute size-[40px] opacity-50 top-10 left-10">
        <StarIcon />
      </div>
      <div className="absolute size-[130px] top-3/4 ">
        <StarIcon />
      </div>
      <div className="absolute size-[40px] opacity-55 top-20 left-80">
        <StarIcon />
      </div>
      <div className="absolute size-[30px] opacity-55 top-72 left-96">
        <StarIcon />
      </div>
      <div className="absolute size-[130px] top-28 left-3/4">
        <StarIcon />
      </div>
      <div className="absolute size-[25px] opacity-50 top-10 left-[750px]">
        <StarIcon />
      </div>
      <div className="absolute size-[60px] top-52 left-36">
        <StarIcon />
      </div>
      <div className="absolute size-[40px] top-40 left-[800px]">
        <StarIcon />
      </div>
      <div className="absolute size-[25px] opacity-50 top-10 left-[1100px]">
        <StarIcon />
      </div>
      <div className="absolute size-[25px] opacity-50 top-3/4 left-[800px]">
        <StarIcon />
      </div>
      <div className="absolute size-[50px] top-3/4 left-[1100px]">
        <StarIcon />
      </div>

      <div className="container">
        <div className="flex flex-col items-center py-44 md:py-16 xl:py-40">
          <img
            src={emojiImage}
            alt="Persona saludando"
            className="size-[200px]"
          />
          <p className="font-generalsans text-3xl text-center mt-8 tracking-wide text-white">
            Hi, I am Andrés <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-white/60">
            JR FrontEnd Developer - Full Stack in Progress
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 z-999">
          <a href="#projects" className="w-fit">
            <Button
              isBeam
              name="Explore My Work 🤩"
              containerClass="sm:w-fit w-full sm:min-w-96"
            />
          </a>
          
          <a href="#contact" className="w-fit">
            <Button
              name="Let's word together"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
