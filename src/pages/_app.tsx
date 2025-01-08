import { CssBaseline } from "@mui/material";
import { SessionProvider, useSession } from "next-auth/react";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SideBar from "@/components/sidebar";
import Layout from "@/components/layout";
import Login from "@/components/login";
import Footer from "@/components/footer";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // const { data: session } = useSession();

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <CssBaseline />
        <SideBar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ThemeProvider>
  );
}
