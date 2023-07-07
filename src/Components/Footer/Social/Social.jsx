import React from "react";
import styles from "./Social.module.css";
import { socialIcons } from "../../../constants";

function Social() {
  return (
    <ul className={styles.socialLinks}>
      {socialIcons.map((social) => (
        <li className={styles.socialItem} key={social.id}>
          <a href="#" style={{ color: "var(--txt-color)" }}>
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Social;
