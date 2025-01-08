import React from "react";
import scss from "./layout.module.scss";
import { useSession } from "next-auth/react";
import Footer from "../footer";

const Layout = (props: any) => {
  const { data: session } = useSession();

  return (
    <main
      className={scss.main}
      style={{
        padding: session ? "0 24px 0 80px" : 0,
        display: `flex`,
        flexDirection: "column",
        // gap: "5rem",
        minHeight: `${session ? "100vh" : ""}`,
      }}
    >
      {props.children}
      {session && <Footer />}
    </main>
  );
};

export default Layout;
