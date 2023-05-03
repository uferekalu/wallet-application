import Image from "next/image";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import styles from '../styles/Home.module.css'

export default function GetStartedContent(props: any) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "212px",
        }}
      >
        <Image
          style={{
            width: "100px",
            maxWidth: "100%",
          }}
          src="/img/logo.png"
          width="100"
          height="130"
          alt="logo"
        />
        <Form.Label
          style={{
            fontSize: "11px",
            fontWeight: "600",
            color: "white",
            marginTop: "115px",
          }}
        >
          The best way to <b>Transfer Money</b> safely
        </Form.Label>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          marginTop: "30px",
        }}
      >
        <Link
          className={styles.link}
          href={"/signup"}
          style={{
            background: "#1A87DD",
            borderRadius: "10px",
            color: "white",
            fontSize: "14px",
            height: "40px",
            fontWeight: "500",
            marginTop: "301px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Create new account
        </Link>
        <Form.Label
          style={{
            fontSize: "11px",
            fontWeight: "600",
            color: "#1A87DD",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Already have an account?
        </Form.Label>
      </div>
    </>
  );
}
