import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import ReusableSignupContent from "./reusableSignupContent";
import styles from "../styles/Home.module.css";

export default function SignupComp(props: any) {
  const [isPassword] = useState(true);
  const [isConfirmPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "30px",
        }}
      >
        <Form.Label
          style={{
            fontSize: "19px",
            fontWeight: 600,
            color: "black",
          }}
        >
          Signup and start <br /> transfering
        </Form.Label>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "80px",
        }}
      >
        <Button
          style={{
            background: "#F3F4F5",
            borderRadius: "10px",
            color: "black",
            fontSize: "14px",
            width: "150px",
            border: "none",
            height: "40px",
            fontWeight: "500",
          }}
        >
          Google
        </Button>
        <Button
          style={{
            background: "#F3F4F5",
            borderRadius: "10px",
            color: "black",
            fontSize: "14px",
            width: "150px",
            border: "none",
            height: "40px",
            fontWeight: "500",
          }}
        >
          Facebook
        </Button>
      </div>
      <ReusableSignupContent
        caption="Email"
        placeholder="Enter your email"
        type="text"
      />
      <ReusableSignupContent
        caption="Password"
        placeholder="Enter your password"
        type={showPassword ? "text" : "password"}
        isPassword={isPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <ReusableSignupContent
        caption="Reenter Password"
        placeholder="Enter your password again"
        type={showConfirmPassword ? "text" : "password"}
        isConfirmPassword={isConfirmPassword}
        showConfirmPassword={showConfirmPassword}
        setShowConfirmPassword={setShowConfirmPassword}
      />
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
          //   onClick={handleCreateNewAccount}
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
          Create new account
        </Button>
        <Link className={styles.link} href={"/login"}>
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
        </Link>
      </div>
    </>
  );
}
