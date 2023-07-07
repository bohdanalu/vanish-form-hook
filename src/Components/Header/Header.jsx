import React from "react";
import styles from "./Header.module.css";
import PageContainer from "../PageContainer/PageContainer";

function Header() {
  return (
    <div className={styles.header}>
      <PageContainer>
        <div className={styles.wrapper}>
          <a href="#">
            <img className={styles.logo} src="/images/logo.png" alt="Logo" />
          </a>
          <a className={styles.link} href="#">
            <img src="/images/icons/wallet.svg" alt="" />
            Connect wallet
          </a>
        </div>
      </PageContainer>
    </div>
  );
}

export default Header;
