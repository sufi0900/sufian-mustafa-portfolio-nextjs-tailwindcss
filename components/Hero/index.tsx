/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import AboutMe from "./AboutMeSection ";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Import social icons
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

import { getProfile } from "../../app/utils/sanity-utis";
import { Profile } from "../../types/Profile";

import { Social } from "../../types/Social";
export const revalidate = false;
export const dynamic = "force-dynamic";
type Props = {};
const Hero = async (props: Props) => {
  const profileData: Profile = await getProfile();

  return (
    <>
      <section
        suppressHydrationWarning
        id="home"
        // data-aos="fade-up" // Specify the animation type here
        // data-aos-delay="200" // Optionally add a delay
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                {/* Display Pic */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="group relative inline-block"
                >
                  <Image
                    src={profileData?.image}
                    width={100}
                    height={100}
                    alt="Display Pic"
                    className="mx-auto mb-4 h-32 w-32 transform rounded-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <Image
                    src="data:image/jpeg;base64,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"
                    width={100}
                    height={100}
                    alt="Display Pic"
                    className="mx-auto mb-4 h-32 w-32 transform rounded-full transition-transform duration-300 group-hover:scale-110"
                  />
                  Hi there 👋I am,
                </div>

                <h1
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                >
                  {profileData?.name}
                </h1>

                <h2
                  data-aos="fade-up"
                  data-aos-delay="360"
                  className=" full-stack-web-development grayscale-70  text-2xl font-bold leading-tight text-black dark:text-primary"
                >
                  {/* Full Stack Web Developer */}
                  <p className="font-bold">{profileData?.smallBio}</p>
                </h2>

                <p
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl"
                >
                  <span className="mt-2 block">
                    <span className=" font-bold">Age:</span> 27, residing in the
                    province of KPK, Pakistan, with a strong passion for coding.
                  </span>
                  <span className="mt-4 block">
                    I craft stunning static websites, but that's just the
                    beginning 😉 My superpower? Transforming them into dynamic
                    marvels 😍 with CMS magic (Node.js, Sanity, Prisma).
                    also  I've been deeply immersed in design and technology, creating stunning websites with the latest MERN stack and Next.js.

What excites me most is the seamless integration of design and development, and Canva plays a pivotal role in my projects. As an avid Canva user, I craft beautiful designs that enhance user experience on my websites.

Joining the Canva Creator Program is thrilling. I envision collaborating with fellow creators, leveraging my design skills, and contributing to the vibrant Canva community.
                  </span>
                  <span className="mt-4 block">
                    Think interactive, engaging, and SEO-friendly 🤝
                  </span>
                </p>
                <div className="flex items-center space-x-6">
                  {profileData?.socials?.map((s: Social, index: number) => (
                    <SocialIcon
                      key={index}
                      style={{ height: 25, width: 25 }}
                      bgColor="#793FEF"
                      className="duration-200 hover:scale-125"
                      url={s.url}
                    />
                  ))}
                </div>
                {/* Social Icons */}
                {/* <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="flex justify-center space-x-4"
                >
                  <a
                    href="https://twitter.com/SufianWebDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-dark text-primary transition-colors duration-300"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sufian-mustafa-7a7845226/"
                    target="blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-dark text-primary transition-colors duration-300"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/sufi0900"
                    target="blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-dark text-primary transition-colors duration-300"
                  >
                    <FaGithub size={24} />
                  </a>
                </div> */}

                <br />
                {/* CTA Buttons */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                >
                  <a
                    href="https://sufianmustafa.com/"
                    target="blank"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔍 Portfolio
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1bLb2Ak9tpS88qSlVdGcRWcGdD6F79jXC/view"
                    target="blank"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    📄 Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
      <AboutMe />
    </>
  );
};

export default Hero;
