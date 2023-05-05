import React, { useState } from 'react';
import ReusableSignupContent from './reusableSignupContent';
import SocialComp from './socials';
import Heading from './heading';
import LinkComp from './linkComp';

export default function SignupComp(props: any) {
  const [isPassword] = useState(true);
  const [isConfirmPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Heading caption1="Signup and start" caption2="transfering" />
      <SocialComp />
      <ReusableSignupContent
        caption="Email"
        placeholder="Enter your email"
        type="text"
      />
      <ReusableSignupContent
        caption="Password"
        placeholder="Enter your password"
        type={showPassword ? 'text' : 'password'}
        isPassword={isPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <ReusableSignupContent
        caption="Reenter Password"
        placeholder="Enter your password again"
        type={showConfirmPassword ? 'text' : 'password'}
        isConfirmPassword={isConfirmPassword}
        showConfirmPassword={showConfirmPassword}
        setShowConfirmPassword={setShowConfirmPassword}
      />
      <LinkComp
        caption1="Create new account"
        caption2="Already have an account?"
        url={'/login'}
      />
    </>
  );
}
