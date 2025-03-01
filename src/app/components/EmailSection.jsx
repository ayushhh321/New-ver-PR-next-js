"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import twitterIcon from "../../../public/tweet.svg";
import gmailicon from "../../../public/gmail.svg";
import phoneicon from "../../../public/phone.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you
          have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/ayushhh321">
            <Image src={GithubIcon} alt="Github Icon" width={47} height={47} className="w-12 h-12 object-contain" />
          </Link>
          <Link href="https://linkedin.com/in/ayushhh321">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={47} height={47} className="w-12 h-12 object-contain" />
          </Link>
          <Link href="https://x.com/hypo_sucks" target="_blank">
            <Image src={twitterIcon} alt="Twitter Icon" width={47} height={47} className="w-12 h-12 object-contain" />
          </Link>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=ayushguptab6@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image src={gmailicon} alt="Email Icon" width={48} height={60} className="w-12 h-14 object-contain" />
          </Link>
          <Link href="tel:+917324829593">
            <Image src={phoneicon} alt="Call Icon" width={48} height={60} className="w-12 h-14 object-contain" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form
            action="https://formspree.io/f/xjkbbqqv"
            method="POST"
            className="flex flex-col"
          >
            <div className="mb-6">
    <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
      Your Name
    </label>
    <input
      name="name"
      type="text"
      id="name"
      required
      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      placeholder="Your Name"
    />
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
      Your Email
    </label>
    <input
      name="email"
      type="email"
      id="email"
      required
      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      placeholder="Your Email"
    />
  </div>
  <div className="mb-6">
    <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
      Message
    </label>
    <textarea
      name="message"
      id="message"
      required
      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      placeholder="Let's talk about..."
    />
  </div>
  <button
    type="submit"
    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
  >
    Send Message
  </button>
</form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
