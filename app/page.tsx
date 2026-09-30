import Achievements from "@/components/achivements";
import Contact from "@/components/contact";
import CustomCursor from "@/components/custom-cursor";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MediaStrip from "@/components/media-stripe";
import Navbar from "@/components/navbar";
import Story from "@/components/story";
import Testimonials from "@/components/testimonials";
import Vision from "@/components/vision";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-obsidian">
      <div className="sovereign-noise" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Vision />
        <Achievements />
        <MediaStrip />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>

  );
}
