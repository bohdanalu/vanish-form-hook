import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import styles from "./Footer.module.css";
import Nav from "./Nav/Nav";
import Social from "./Social/Social";

function Footer() {
  return (
    <div className={styles.footer}>
      <PageContainer>
        <img
          style={{ width: "100%" }}
          src="/images/icons/pseudo.png"
          alt="Line"
        />
        <div className={styles.wrapper}>
          <Nav />
          <Social />
        </div>
      </PageContainer>
    </div>
  );
}

export default Footer;
