import React from "react";
import styles from "./styles/Contact.module.css";
import Footer from "./Footer";

const Contact = ({ style }) => {
  return (
    <section style={style} className={styles.contactWrapper}>
      <h2 className={styles.contactHeader}>Contact us</h2>
      <form className={styles.contactForm}>
        <input placeholder="name" className={styles.contactInput} />
        <input placeholder="email" className={styles.contactInput} />
        <textarea
          placeholder="message"
          className={styles.contactInput}
        ></textarea>
        <button className={styles.contactButton}>Send message</button>
      </form>
      <div>
        <h3>We love to hear from you</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </section>
  );
};

export default Contact;
