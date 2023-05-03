import Image from "next/image";
import { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./header.module.css";
import BtnComp from "../btnComp";

export default function Header(props: any) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          height: "100px",
          background: "#1A87DD",
        }}
      >
        <Image
          style={{
            width: "70px",
            maxWidth: "100%",
          }}
          src="/img/logo.png"
          width="70"
          height="70"
          alt="logo"
        />
        <div className={styles.walletHeader}>
          <BtnComp
            onClick={() => undefined}
            style={{
              background: "#F8BB18",
              borderRadius: "10px",
              color: "#1A1A1A",
              fontSize: "14px",
              height: "40px",
              fontWeight: "500",
            }}
          >
            Register
          </BtnComp>
        </div>
        <Image
          onClick={() => setShowMobileMenu((prevState) => !prevState)}
          className={styles.hamburger}
          style={{
            width: "20px",
            maxWidth: "100%",
          }}
          src={showMobileMenu ? "/img/close.png" : "/img/hamburger1.png"}
          width="20"
          height="20"
          alt="logo"
        />
      </div>
      <div
        className={
          showMobileMenu ? styles.mobileSidebar : styles.mobileSidebarNo
        }
      >
        <div className={styles.mobileSidebar_content}>
          <Form.Label
            style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#1A1A1A",
            }}
          >
            Register
          </Form.Label>
        </div>
      </div>
    </>
  );
}
