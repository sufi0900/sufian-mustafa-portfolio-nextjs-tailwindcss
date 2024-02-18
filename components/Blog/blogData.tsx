import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "6 Basic Tips For Optimizing React Performance",
    link: "/Tips-For-Optimizing-React-Performance",
    paragraph:
      "Welcome, fellow React enthusiasts! 🚀 If you've ever felt the need to turbocharge your React application's performance, you're in the right place.",
    image: "/images/react.png",
    author: {
      name: "Sufian Mustafa",
      image: "/images/sufi.jpeg",
      designation: "Web Developer",
      link: "",
    },
    tags: ["creative"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Power Of NextJS",
    link: "/Nextjs-vs-Reactjs",
    paragraph:
      "As web developers, we're always on the lookout for technologies that can enhance our projects. In this blog post, I'll explore the advantages of Next.js over React ",
    image: "/images/og.png",
    author: {
      name: "Sufian Mustafa",
      image: "/images/sufi.jpeg",
      designation: "Web Developer",
      link: "",
    },
    tags: ["Developer"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: " The NPM Packages Every UI/UX Developer Should Know",
    link: "/6-portfolio",
    paragraph:
      " In the ever-evolving world of web development, creating a seamless and visually appealing user interface (UI) and user experience (UX) is crucial.",
    image: "/images/react2.png",
    author: {
      name: "Sufian Mustafa",
      image: "/images/sufi.jpeg",
      designation: "Web Developer",
      link: "",
    },
    tags: ["design"],
    publishDate: "2024",
  },
];
export default blogData;
