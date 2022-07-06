import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="max-w-md w-full mx-auto">Header</header>
      <main className="flex-grow">Main</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Home;
