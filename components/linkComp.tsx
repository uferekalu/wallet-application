import { Button, Form } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function LinkComp(props: any) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          marginTop: "50px",
        }}
      >
        <Button
          className={styles.link}
          style={{
            background: "#1A87DD",
            borderRadius: "10px",
            color: "white",
            fontSize: "14px",
            height: "40px",
            fontWeight: "500",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.caption1}
        </Button>
        <Link className={styles.link} href={props.url}>
          <Form.Label
            style={{
              fontSize: "11px",
              fontWeight: "600",
              color: "#1A87DD",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            {props.caption2}
          </Form.Label>
        </Link>
      </div>
    </>
  );
}
