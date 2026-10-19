import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HomeSections } from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeSections />
      </main>
      <Footer />
    </>
  );
}
