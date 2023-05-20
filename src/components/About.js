import React from "react";
import styles from "./styles/About.module.css";

export const About = () => {
	return (
		<>
			<section className={styles.aboutWrapper}>
				<article className={styles.aboutArticle}>About Number one</article>
				<article className={styles.aboutArticle}>About Number two</article>
				<article className={styles.aboutArticle}>About Number three</article>
			</section>
		</>
	);
};
