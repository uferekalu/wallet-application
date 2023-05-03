import React from "react";
import Image from "next/image";
import Header from "./header";
import styles from "@/styles/Home.module.css";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <Header />
        <div className={styles.container}>
          <div className={styles.desktopSidebar}>
            <Image
              style={{
                width: "100px",
                maxWidth: "100%",
                marginTop: "50px",
              }}
              src="/img/logo.png"
              width="100"
              height="130"
              alt="logo"
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
