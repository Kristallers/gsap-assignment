import { RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import React from "react";
import { useFrame } from "@react-three/fiber";

const CanvasComponent = () => {
  const boxRef = useRef();

  useFrame((state, delta) => {
    boxRef.current.rotation.y += delta;
  });

  return (
    <>
      <color attach="background" args={["#333333"]} />
      <ambientLight intensity={1} />
      <mesh>
        <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4} ref={boxRef}>
          <meshPhongMaterial color="red" />
        </RoundedBox>
      </mesh>
    </>
  );
};

export default CanvasComponent;
