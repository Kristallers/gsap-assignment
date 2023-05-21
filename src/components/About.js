import React from "react";
import styles from "./styles/About.module.css";

export const About = ({ style }) => {
  return (
    <>
      <section style={style} className={styles.aboutWrapper}>
        <article className={styles.aboutArticle}>
          <h3 className={styles.articleTitle}>number one</h3>
        </article>
        <article className={styles.aboutArticle}>
          <h3 className={styles.articleTitle}>number two</h3>
        </article>
        <article className={styles.aboutArticle}>
          <h3 className={styles.articleTitle}>number three</h3>
        </article>
      </section>
    </>
  );
};
