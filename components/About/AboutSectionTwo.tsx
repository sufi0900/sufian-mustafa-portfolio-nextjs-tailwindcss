"use client";
import Image from "next/image";
import React, { useState } from "react";
import Education from "./Education";
import SectionTitle from "../Common/SectionTitle";

const Services = () => {
  const initialDisplayedServices = 3;
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Building user interfaces with modern frameworks like React JS and Next Js. Utilizing HTML, CSS, and JavaScript to create responsive and interactive web applications.",
    },
    {
      title: "API Integration",
      description:
        "Creating robust server-side logic and APIs using Node.js, Express, Prisma, Sanity.IO, etc.",
    },
    {
      title: "Full Stack Development",
      description:
        "Combining both frontend and backend to deliver end-to-end solutions.",
    },
    {
      title: "Database Management",
      description:
        "Designing and optimizing databases for efficient data storage and retrieval.",
    },
    {
      title: "Performance Optimization",
      description:
        "Ensure your website loads quickly and delivers a smooth user experience, even with high traffic. I optimize code, databases, and servers for peak performance.",
    },
    {
      title: "Content Management System (CMS) Integration",
      description:
        "Simplify content creation and management with user-friendly CMS solutions like Sanity.io. Empower your team to update content easily.",
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your website's visibility in search engine results and attract more organic traffic with strategic SEO techniques.",
    },
    {
      title: "Testing and Debugging",
      description:
        "Conducting thorough testing and debugging to ensure code quality and reliability.",
    },
    {
      title: "DevOps and Deployment",
      description:
        "Implementing CI/CD pipelines, ensuring smooth deployments, and system monitoring. Deploying websites on platforms like Vercel.",
    },
  ];

  const [showAllServices, setShowAllServices] = useState(false);
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <SectionTitle
            title="Services"
            paragraph="Discover the range of web development services I offer to bring your digital projects to life."
            mb="44px"
          />

          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                {/* Replace the image source and alt text with your own */}
                <Image
                  src="/images/services/services-image.svg"
                  alt="services image"
                  fill
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />

                <Image
                  src="/images/about/about-image-2-dark.svg"
                  alt="services image"
                  fill
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]">
                {services
                  .slice(
                    0,
                    showAllServices
                      ? services.length
                      : initialDisplayedServices,
                  )
                  .map((service, index) => (
                    <div
                      key={index}
                      className="mb-6"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        {service.title}
                      </h3>
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ))}
                {services.length > initialDisplayedServices && (
                  <div className="mt-4 flex justify-center">
                    {showAllServices ? (
                      <button
                        onClick={() => setShowAllServices(false)}
                        className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      >
                        View Less Services
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowAllServices(true)}
                        className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      >
                        View More Services
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
