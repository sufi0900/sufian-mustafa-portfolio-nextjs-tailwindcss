import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import RepeatIcon from "@mui/icons-material/Repeat";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SectionTitle from "../Common/SectionTitle";

export default function DevEducationTimeline() {
  const educationData = [
    {
      title: "Bachelor's Degree",
      date: "2020-2022",
      description:
        "From ▶️ FG College Nowshera (Linked to UOP)\nMarks ▶️ 372/550 (67%)",
      icon: <SchoolIcon />,
    },
    {
      title: "Master's Degree",
      date: "2022-2024",
      description:
        "From ▶️ Abdul Wali Khan University Mardan (AWKUM)\nGPA ▶️ 3.2",
      icon: <SchoolIcon />,
    },
    {
      title: "Front-End Developer",
      date: "2022-2024",
      description:
        "Designed and developed responsive user interfaces for various web applications, ensuring a seamless and user-friendly experience.\nHTML5 | CSS3 | Tailwind CSS | React JS | Next JS",
      icon: <CodeIcon />,
    },
    {
      title: "Back-End Developer",
      date: "2022-2024",
      description:
        "Built RESTful APIs for various clients, ensuring data security and scalability.\nNode JS | Express JS | Sanity.io | Prisma | MongoDB",
      icon: <CodeIcon />,
    },
    {
      title: "Full-Stack Developer",
      date: "2022-2024",
      description:
        "Leveraging full-stack expertise to build a personal portfolio website and other independent projects.",
      icon: <CodeIcon />,
    },
  ];

  return (
    <section id="education" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Education & Experience"
          paragraph="Explore my academic journey and professional experiences in the world of web development."
          mb="44px"
        />

        <Timeline position="alternate">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">{item.icon}</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card className="wow fadeInUp transform-gpu cursor-pointer rounded-sm bg-white p-8 shadow-two transition-transform duration-300 hover:scale-105 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
                  <CardContent>
                    <div>
                      <p className="mb-2 text-xl font-bold leading-loose text-blue-500 dark:text-blue-300">
                        {item.title}
                      </p>
                      <p className="mb-2 text-lg font-medium leading-loose text-green-500 dark:text-green-300">
                        {item.date}
                      </p>
                      <p className="leading-loose text-gray-700 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
