import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sufian Mustafa - Portfolio",
  description:
    "Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my portfolio showcasing expertise in ReactJs, Nextjs, HTML5, CSS, and more. Download my resume and get in touch for your web development needs",

  keywords:
    "sufian website, sufi website, sufi web developer, sufian web developer, sufi, sufian",
  icons: {
    icon: "https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.progressive/v1693675157/sufi_gt9fke.webp",
  },
  other: {
    "og:image":
      "https://res.cloudinary.com/dtvtphhsc/image/upload/ar_1.9,c_scale,h_630,w_1200/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />

      <Hero />
      {/* <Features /> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <div></div>
    </>
  );
}
