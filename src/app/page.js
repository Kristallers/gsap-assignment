"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import { About } from "@/components/About";
import { Canvas } from "@react-three/fiber";
import CanvasComponent from "@/components/CanvasComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <Canvas style={{ height: "100vh" }}>
        <CanvasComponent />
      </Canvas>
    </main>
  );
}
