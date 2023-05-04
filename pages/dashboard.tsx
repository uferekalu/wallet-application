import Head from "next/head";
import DashboardComp from "@/components/dashboard";
import styles from "@/styles/Home.module.css";

export default function Dashboard(props: any) {
  return (
    <>
      <Head>
        <title>Wallet Application | Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={styles.dashboard}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className={styles.dashboardComp}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "812px",
          }}
        >
          <DashboardComp />
        </div>
      </div>
    </>
  );
}
