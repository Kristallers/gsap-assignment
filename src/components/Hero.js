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
				<h1 className="header">BINKY.</h1>
			</div>
		</>
	);
};

export default Hero;
