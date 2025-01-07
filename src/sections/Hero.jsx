import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculatedSizes } from "../utils/index";
import Button from "../components/Button";
import StarIcon  from "../assets/icons/star.svg";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const sizes = calculatedSizes(isSmall, isMobile, isTablet, isDesktop);
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

    <div className="absolute">
     <StarIcon />
    </div>
    
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
          <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
            Hi, I am Andrés <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-gray_gradient">
            Building User Experiences
          </p>
          <p className="mt-4 text-center text-white/60 text-1xl">
            Coding dreams into reality, one challenge at a time
          </p>
        </div>

        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />

              <HackerRoom
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0, -Math.PI, 0]}
              />

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>

          <div className="flex items-center justify-center absolute bottom-3 left-0 right-0 w-full z-10 c-space gap-3">
            <a href="#projects" className="w-fit">
              <Button
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
