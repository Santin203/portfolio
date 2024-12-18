import Head from "next/head";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact-info";

export default function Home() {
  return (
    <>
      <Head>
        <title>Santiago's Portfolio</title>
        <meta name="description" content="Santiago Jiménez Casas Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 text-gray-800">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
