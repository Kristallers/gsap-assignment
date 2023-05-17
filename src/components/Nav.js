import React from "react";
import styles from "./styles/Nav.module.css";

const Nav = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navIcon}>
				<img src="/favicon.ico" alt="LOGO" />
			</div>
			<ul>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Nav;
