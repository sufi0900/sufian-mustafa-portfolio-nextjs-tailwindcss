"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();
  const formRef = useRef();

  const subscribeEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!formRef.current) {
      // Handle the case where formRef.current is undefined
      console.error("formRef.current is undefined");
      return;
    }

    // Assert the type of formRef.current
    const formElement = formRef.current as HTMLFormElement;

    // Use your Email.js credentials
    try {
      const result = await emailjs.sendForm(
        "service_ugauc93",
        "template_adfk5bp",
        formElement, // Use the asserted formElement
        "Jwo8Jvergs2aiHjIX",
      );
      console.log(result.text);

      // Clear input fields after successful subscription
      formElement.reset(); // Use the asserted formElement

      // Show window confirmation alert
      window.alert("Subscription successful!");
    } catch (error) {
      console.log(error.text);
    }
  };
  return (
    <div
      className="wow fadeInUp relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Subscribe for Updates
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Stay informed about the latest developments and updates in web
        development.
      </p>
      <form ref={formRef} onSubmit={subscribeEmail}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="mb-4 w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="mb-4 w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
          <input
            type="submit"
            value="Subscribe"
            className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          />
          <p className="text-center text-base leading-relaxed text-body-color dark:text-body-color-dark">
            No spam guaranteed. Only valuable content for web enthusiasts!
          </p>
        </div>
      </form>
    </div>
  );
};

export default NewsLatterBox;
