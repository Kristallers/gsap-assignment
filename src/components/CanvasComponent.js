import { useRef } from "react";
import React from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  RoundedBox,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { BoxGeometry } from "three";
import Hero from "./Hero";
import Nav from "./Nav";
import { About } from "./About";
import Footer from "./Footer";
import { Bunny } from "./Bunny";
import Contact from "./Contact";

const CanvasComponent = () => {
  return (
    <>
      <color attach="background" args={["#333333"]} />

      <ScrollControls pages={3} damping={0.1}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
        <ambientLight intensity={0.3} />
        <spotLight
          position={[0, 25, 0]}
          angle={1.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        {/* <Environment
          background={false} // can be true, false or "only" (which only sets the background) (default: false)
          preset="warehouse"
          scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
          encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
        /> */}
        <mesh scale={0.2}>
          <Bunny position={[4, -10, 0]} />
        </mesh>
        <Scroll>
          {/* Canvas contents in here will scroll along */}
          {/* <RoundedBox args={[1, 1, 1]} radius={[0.05]} smoothness={4}>
            <meshPhongMaterial color={"f2f2f2"} wireframe />
          </RoundedBox> */}
        </Scroll>
        <Scroll html style={{ width: "100%" }}>
          {/* DOM contents in here will scroll along */}
          <Nav />
          <Hero />
          <About
            style={{
              position: "absolute",
              top: "100vh",
              width: "100vw",
              height: "100vh",
            }}
          />
          <Contact style={{ position: "absolute", top: "200vh" }} />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default CanvasComponent;
