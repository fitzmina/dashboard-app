import React from "react";
import scss from "./footer.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { Paper, useTheme } from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";

const Footer = () => {
  const { data: session } = useSession();
  //   const theme = useTheme();

  //   const FooterLink = styled(Link)`
  //     color: ${theme.palette.text.primary};
  //   `;

  return (
    <footer className={scss.footer} style={{ marginTop: "auto" }}>
      <Paper sx={{ width: "100%" }} color={"#262626"}>
        <ul role="menu">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/dashboard/analytics"}>Analytics</Link>
          </li>
          <li>
            <Link href={"/dashboard/profile"}>Profile</Link>
          </li>
          <li>
            <Link href={"/dashboard/settings"}>Settings</Link>
          </li>

          <li>
            <Link href={"/#termsandconditions"}>Terms & Conditions</Link>
          </li>
          <li>
            <Link href={"/#accessibilitystatement"}>
              Accessibility statement
            </Link>
          </li>
          <li>
            <Button
              variant={"text"}
              color={session ? "error" : "success"}
              onClick={() => (session ? signOut() : signIn())}
            >
              {session ? "Sign Out" : "Sign In"}
            </Button>
          </li>
        </ul>
      </Paper>
    </footer>
  );
};

export default Footer;
