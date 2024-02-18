/* eslint-disable react/no-unescaped-entities */
"use client";
import NewsLatterBox from "./NewsLatterBox";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Use your Email.js credentials
    emailjs
      .sendForm(
        "service_ugauc93",
        "template_adfk5bp",
        form.current,
        "Jwo8Jvergs2aiHjIX",
      )
      .then(
        (result) => {
          console.log(result.text);

          // Clear form fields
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";

          // Show window confirmation alert
          window.alert("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div
            data-aos="fade-up"
            data-aos-delay=".15s"
            className="w-full px-4 lg:w-7/12 xl:w-8/12"
          >
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2
                data-aos="fade-up"
                data-aos-delay=".15s"
                className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl"
              >
                Let's Connect!
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay=".15s"
                className="mb-12 text-base font-medium text-body-color"
              >
                Reach out to me for collaborations or any inquiries. I'll get
                back to you as soon as possible!
              </p>
              <form
                data-aos="fade-up"
                data-aos-delay=".15s"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        ref={nameRef}
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        ref={emailRef}
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        ref={messageRef}
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      type="submit"
                    >
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay=".20s"
            className="w-full px-4 lg:w-5/12 xl:w-4/12"
          >
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
