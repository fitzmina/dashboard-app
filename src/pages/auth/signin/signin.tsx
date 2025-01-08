import React from "react";
import Login from "@/components/login";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Dashboard from "@/pages/dashboard";
import scss from "./signin.module.scss";

const SignIn = () => {
  const { data: session } = useSession();

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >

    // </Box>
    <div
      className={scss.main}
      style={{
        padding: session ? "0 24px 0 0" : 0,
        display: `flex`,
        flexDirection: "column",
        // gap: "5rem",
        minHeight: `${session ? "100vh" : ""}`,
        width: "100%",
      }}
    >
      {session ? <Dashboard /> : <Login />}
    </div>
  );
};

export default SignIn;
