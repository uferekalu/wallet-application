import SignupComp from "@/components/SignupComp";
import styles from "@/styles/Home.module.css";

export default function Signup(props: any) {
  return (
    <>
      <div
        className={styles.signup}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "350px",
            height: "812px",
          }}
        >
          <SignupComp />
        </div>
      </div>
    </>
  );
}
