import Head from "next/head";
import { Inter } from "next/font/google";

import Dashboard from "./dashboard";
import Header from "@/components/header";
import SideBar from "@/components/sidebar";
import Login from "@/components/login";
import { useSession } from "next-auth/react";
import scss from "./home.module.scss";
import MyApp from "@/components/theme";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Dashboard App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={scss.main}>
        {session && <Dashboard />}
        {!session && <Login />}
      </main>
    </>
  );
}
