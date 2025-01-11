import Button from "../components/Button";
import { StarIcon } from "../components/StarIcon";
import emojiImage from "../assets/images/emoji.png";
import backGround from "../assets/images/grain.jpg";

const Hero = () => {
  return (
    <section className="py-32 md:py-14 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 mask-gradient">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${backGround})` }}
        ></div>
        <div className="size-[610px] hero-ring"></div>
        <div className="size-[810px] hero-ring"></div>
        <div className="size-[1010px] hero-ring"></div>
        <div className="size-[1210px] hero-ring"></div>
        <div className="size-[1410px] hero-ring"></div>
        <div className="size-[1610px] hero-ring"></div>
        <div className="size-[1810px] hero-ring"></div>
        <div className="size-[2010px] hero-ring"></div>
      </div>
      <div className="absolute size-[40px] opacity-50 top-10 left-10">
        <StarIcon />
      </div>
      <div className="absolute size-[130px] top-3/4 ">
        <StarIcon />
      </div>
      <div className="absolute size-[40px] opacity-55 top-20 left-80">
        <StarIcon />
      </div>
      <div className="absolute size-[30px] opacity-55 top-72 left-1/3">
        <StarIcon />
      </div>
      <div className="absolute size-[130px] top-28 left-3/4">
        <StarIcon />
      </div>
      <div className="absolute size-[25px] opacity-50 top-10 left-[750px]">
        <StarIcon />
      </div>
      <div className="absolute size-[60px] top-80 left-36">
        <StarIcon />
      </div>
      <div className="absolute size-[40px] top-40 left-[800px]">
        <StarIcon />
      </div>
      <div className="absolute size-[25px] opacity-50 top-20 left-[1100px]">
        <StarIcon />
      </div>
      <div className="absolute size-[25px] opacity-50 top-3/4 left-[550px]">
        <StarIcon />
      </div>
      <div className="absolute size-[50px] top-3/4 left-[1100px]">
        <StarIcon />
      </div>
      <div className="absolute size-[30px] opacity-50 top-[600px] left-[1350px]">
        <StarIcon />
      </div>
      <div className="absolute size-[85px] top-[600px] left-[1650px]">
        <StarIcon />
      </div>
      <div className="absolute size-[30px] top-96 left-[1200px]">
        <StarIcon />
      </div>
      <div className="absolute size-[30px] opacity-50 top-[350px] left-[1500px]">
        <StarIcon />
      </div>
      <div className="absolute size-[30px] opacity-50 top-6 left-[1750px]">
        <StarIcon />
      </div>

      <div className="flex flex-col justify-center items-center">
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
