"use client";
import SectionTitle from "../Common/SectionTitle";
// import OfferList from "./OfferList";
import ProjectCard from "./PricingBox";

const Pricing = () => {
  const projectsData = [
    {
      projectName: "My Portfolio website",
      link: "https://sufianmustafa.com/",
      projectDescription:
        "  Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my portfolio showcasing expertise in ReactJs, Nextjs, HTML5, CSS, and more.",
      projectTechnologies: [
        "Next.js",
        "React",
        "Sanity.IO",
        "Prisma",
        "React MUI",
      ],
      projectFeatures: [
        "User Authentication & Like function",
        "Dark Mode",
        "CMS for Blogs & Projects",
        "Contact Form",
      ],
      image:
        "https://res.cloudinary.com/dtvtphhsc/image/upload/v1708186732/sufianmustafa_2024-2-17T21-20-6_drorno.png",
    },
    {
      projectName: "DevInsight Network (Full Stack Next js Blog Website)",
      link: "https://blog-website.sufianmustafa.com/",
      projectDescription:
        "DevInsight Network, a full-featured Next.js blog site that integrates with Prisma for powerful site management and NextAuth for secure and simple authentication.",
      projectTechnologies: [
        "Next.js",
        "React",
        "Prisma",
        "React MUI",
        "Tailwind CSS",
        "SVG's",
      ],
      projectFeatures: [
        "Responsive Design",
        "Dynamic Blogs Content",
        "Categories section",
      ],
      image:
        "https://res.cloudinary.com/dtvtphhsc/image/upload/v1708186517/sufianmustafa_2024-2-17T21-9-35_ryckkk.png",
    },
    {
      projectName: "Dev.to Clone (MERN-STACK-Project)",
      link: "https://dev-clone.sufianmustafa.com/",
      projectDescription:
        "With this platform, users can effortlessly create and share insightful posts, while also having the ability to update their user information.",
      projectTechnologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "React MUI",
      ],
      projectFeatures: [
        "Dev.to Clone",
        "User Authentication",
        "Update user info and Post Sharing",
        "RichText Editor for post",
      ],
      image:
        "https://res.cloudinary.com/dtvtphhsc/image/upload/v1708186517/screenshotr_2024-2-17T21-12-1_ujjjpr.png",
    },
  ];

  return (
    <section
      id="web-dev-projects"
      className="relative z-10 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Explore Our Web Development Projects"
          paragraph="Check out our latest web development projects. We take pride in delivering high-quality solutions and building unique websites for our clients."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
