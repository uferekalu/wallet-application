import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReusableSignupContent from "./reusableSignupContent";
import SocialComp from "./socials";
import Heading from "./heading";
import LinkComp from "./linkComp";

export default function LoginComp(props: any) {
  const [isPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Heading caption1="Login and start" caption2="transfering" />
      <SocialComp />
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Form.Label
          style={{
            fontSize: "11px",
            fontWeight: 400,
            color: "#1A87DD",
            marginTop: "20px",
          }}
        >
          Forgot password?
        </Form.Label>
      </div>
      <LinkComp caption1="Login" caption2="Create new account" url={"/signup"} />
    </>
  );
}
