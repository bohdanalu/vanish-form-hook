import React from "react";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        <li>
          <a href="#">Partners</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Roadmap</a>
        </li>
        <li>
          <a href="#">Ecosystem</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
