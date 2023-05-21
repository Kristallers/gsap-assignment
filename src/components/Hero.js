"use client";
import React, { useRef, useEffect } from "react";
import styles from "./styles/Hero.module.css";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const animation = gsap.to(".header", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 4,
    });

    return () => {
      animation.kill(); // Stop the animation when the component unmounts
    };
  }, []);

  return (
    <>
      <div className={styles.heroHeaderContainer} ref={heroRef}>
        <h1 className={`${styles.header} header`}>BINKY.</h1>
        <section className={styles.heroDescriptionContainer}>
          <h2>What is BINKY?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className={styles.readMoreButton}>Read more</button>
        </section>
      </div>
    </>
  );
};

export default Hero;
