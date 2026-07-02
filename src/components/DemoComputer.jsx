import { useEffect, useMemo, useRef } from "react";
import { CanvasTexture, SRGBColorSpace } from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DemoComputerModel = ({ txt, ...groupProps }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/computer.glb");

  useEffect(() => {
    if (txt) {
      txt.flipY = false;
      txt.colorSpace = SRGBColorSpace;
      txt.needsUpdate = true;
    }
  }, [txt]);

  useGSAP(() => {
    if (!group.current) return;

    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    });
  }, [txt]);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const elapsed = clock.getElapsedTime();
    group.current.position.y = Math.sin(elapsed * 1.15) * 0.045;
    group.current.rotation.y = Math.sin(elapsed * 0.45) * 0.04;
    group.current.rotation.x = Math.sin(elapsed * 0.35) * 0.012;
  });
  

  return (
    <group ref={group} {...groupProps} dispose={null}>
      <group name="Scene">
        <mesh
          name="monitor-screen"
          // castShadow
          // receiveShadow
          geometry={nodes["monitor-screen"].geometry}
          material={nodes["monitor-screen"].material}
          position={[0.127, 1.831, 0.511]}
          rotation={[1.571, -0.005, 0.031]}
          scale={[0.661, 0.608, 0.401]}
        >
          <meshBasicMaterial map={txt} />
        </mesh>
        <group
          name="RootNode"
          position={[0, 1.093, 0]}
          rotation={[-Math.PI / 2, 0, -0.033]}
          scale={0.045}
        >
          <group
            name="Screen001"
            position={[5.658, 1.643, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen002"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen003"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen004"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen005"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen006"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen007"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen008"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen009"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen010"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen011"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen012"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen013"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen014"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen015"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen016"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen017"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen018"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen019"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen020"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen021"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen022"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen023"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen024"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen025"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen026"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen027"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen028"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen029"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen030"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen031"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen032"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen033"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen034"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen035"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen036"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen037"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen038"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen039"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen040"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen041"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen042"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen043"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen044"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen045"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen046"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen047"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen048"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen049"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen050"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen051"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen052"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen053"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen054"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen055"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen056"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen057"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen058"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen059"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen060"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen061"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen062"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen063"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen064"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen065"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen066"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen067"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen068"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen069"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen070"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen071"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen072"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen073"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen074"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen075"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen076"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen077"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen078"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen079"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen080"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen081"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen082"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen083"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen084"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen085"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen086"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen087"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen088"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen089"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen090"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen091"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen092"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen093"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen094"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen095"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen096"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen097"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen098"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen099"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen100"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen101"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen102"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen103"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen104"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen105"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen106"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen107"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen108"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen109"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen110"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen111"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen112"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen113"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen114"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen115"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen116"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen117"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen118"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen119"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen120"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen121"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen122"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen123"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen124"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen125"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen126"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen127"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen128"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen129"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen130"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen131"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen132"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen133"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen134"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen135"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen136"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen137"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen138"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen139"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen140"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen141"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen142"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen143"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen144"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen145"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen146"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen147"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Screen148"
            position={[5.658, 1.644, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          <group
            name="Tower-light-007"
            position={[16.089, -3.47, -14.495]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.963}
          />
          <group
            name="Tower-light-008"
            position={[15.155, -3.47, -14.495]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.963}
          />
        </group>
        <group
          name="Monitor-B-_computer_0"
          position={[0.266, 1.132, 0.051]}
          rotation={[0, -0.033, 0]}
          scale={[0.042, 0.045, 0.045]}
        >
          <mesh
            name="Monitor-B-_computer_0_1"
            // castShadow
            // receiveShadow
            geometry={nodes["Monitor-B-_computer_0_1"].geometry}
            material={materials.computer}
          />
          <mesh
            name="Monitor-B-_computer_0_2"
            // castShadow
            // receiveShadow
            geometry={nodes["Monitor-B-_computer_0_2"].geometry}
            material={materials.base__0}
          />
          <mesh
            name="Monitor-B-_computer_0_3"
            // castShadow
            // receiveShadow
            geometry={nodes["Monitor-B-_computer_0_3"].geometry}
            material={materials.Material_36}
          />
          <mesh
            name="Monitor-B-_computer_0_4"
            // castShadow
            // receiveShadow
            geometry={nodes["Monitor-B-_computer_0_4"].geometry}
            material={materials.Material_35}
          />
          <mesh
            name="Monitor-B-_computer_0_5"
            // castShadow
            // receiveShadow
            geometry={nodes["Monitor-B-_computer_0_5"].geometry}
            material={materials.Material_34}
          />
          <mesh
            name="Monitor-B-_computer_0_6"
            // castShadow
            // receiveShadow
            geometry={nodes["Monitor-B-_computer_0_6"].geometry}
            material={materials.keys}
          />
          <mesh
            name="Monitor-B-_computer_0_7"
            // castShadow
            // receiveShadow
            geometry={nodes["Monitor-B-_computer_0_7"].geometry}
            material={materials.keys2}
          />
          <mesh
            name="Monitor-B-_computer_0_8"
            // castShadow
            // receiveShadow
            geometry={nodes["Monitor-B-_computer_0_8"].geometry}
            material={materials.Material_37}
          />
        </group>
      </group>
    </group>
  );
};

// Los hooks no pueden llamarse condicionalmente, así que la carga de
// textura de video vs imagen se separa en componentes wrapper.
const DemoComputerVideo = ({ texture, ...groupProps }) => {
  const txt = useVideoTexture(texture);
  return <DemoComputerModel txt={txt} {...groupProps} />;
};

const DemoComputerImage = ({ image, ...groupProps }) => {
  const txt = useTexture(image);
  return <DemoComputerModel txt={txt} {...groupProps} />;
};

// Placeholder animado "demo en camino": se dibuja en un canvas 2D que se usa
// como textura de la pantalla, sin necesidad de un archivo de video.
const drawPendingFrame = (canvas, t, label) => {
  const ctx = canvas.getContext("2d");
  const { width: w, height: h } = canvas;

  ctx.fillStyle = "#030712";
  ctx.fillRect(0, 0, w, h);

  const blob = (x, y, r, color) => {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, color);
    g.addColorStop(1, "rgba(3, 7, 18, 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  };
  blob(
    w * (0.28 + Math.sin(t * 0.5) * 0.12),
    h * (0.3 + Math.cos(t * 0.4) * 0.1),
    w * 0.45,
    "rgba(52, 211, 153, 0.22)"
  );
  blob(
    w * (0.74 + Math.cos(t * 0.45) * 0.12),
    h * (0.66 + Math.sin(t * 0.35) * 0.1),
    w * 0.5,
    "rgba(14, 165, 233, 0.22)"
  );

  ctx.textAlign = "center";
  ctx.fillStyle = "#f9fafb";
  ctx.font = "700 78px 'General Sans', sans-serif";
  ctx.fillText(label, w / 2, h * 0.44);

  const dots = ".".repeat(1 + (Math.floor(t * 1.5) % 3));
  ctx.fillStyle = "rgba(249, 250, 251, 0.55)";
  ctx.font = "500 34px 'General Sans', sans-serif";
  ctx.fillText(`Demo en camino${dots}`, w / 2, h * 0.56);

  const barW = w * 0.42;
  const barH = 10;
  const barX = (w - barW) / 2;
  const barY = h * 0.66;
  ctx.fillStyle = "rgba(249, 250, 251, 0.12)";
  ctx.beginPath();
  ctx.roundRect(barX, barY, barW, barH, barH / 2);
  ctx.fill();

  const segW = barW * 0.35;
  const travel = barW + segW;
  const segX = barX - segW + ((t * 220) % travel);
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(barX, barY, barW, barH, barH / 2);
  ctx.clip();
  const segGrad = ctx.createLinearGradient(segX, 0, segX + segW, 0);
  segGrad.addColorStop(0, "#34d399");
  segGrad.addColorStop(1, "#0ea5e9");
  ctx.fillStyle = segGrad;
  ctx.fillRect(segX, barY, segW, barH);
  ctx.restore();
};

const DemoComputerPending = ({ label, ...groupProps }) => {
  const { canvas, txt } = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 576;
    const txt = new CanvasTexture(canvas);
    txt.colorSpace = SRGBColorSpace;
    return { canvas, txt };
  }, []);

  useFrame(({ clock }) => {
    drawPendingFrame(canvas, clock.getElapsedTime(), label);
    txt.needsUpdate = true;
  });

  return <DemoComputerModel txt={txt} {...groupProps} />;
};

const DemoComputer = ({ texture, image, pendingLabel, ...groupProps }) =>
  pendingLabel ? (
    <DemoComputerPending label={pendingLabel} {...groupProps} />
  ) : image ? (
    <DemoComputerImage image={image} {...groupProps} />
  ) : (
    <DemoComputerVideo
      texture={texture ?? "/textures/project/en-progreso.mp4"}
      {...groupProps}
    />
  );

useGLTF.preload("/models/computer.glb");

export default DemoComputer;
