"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 list-none pl-0">
        <li>AWS</li>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>CI/CD</li>
        <li>Terraform</li>
        <li>Linux</li>
        <li>Jenkins</li>
        <li>GitHub</li>
        <li>Grafana</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Vellore Institute of Technology, Bhopal (B.Tech CSE 2025 , CGPA:8.33) </li>
        <li>Don Bosco High School, Bihar (Senior Secondary Education,2021) </li>
        <li>D.A.V Public School, Bihar (Secondary School Education, 2019)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>NPTEL Cloud Computing By IIT KGP</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Using <video> instead of <Image> */}
        <video
          className="w-full rounded-lg"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/intro.mp4" // Ensure the video is placed inside the "public/videos" directory
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a DevOps Engineer passionate about automating and optimizing cloud infrastructure. My expertise includes AWS, Kubernetes, Docker, Terraform, CI/CD pipelines, and Linux system administration. I specialize in designing scalable, high-availability architectures, implementing Infrastructure as Code (IaC), and streamlining deployments with GitHub Actions and Jenkins.
            <br />
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;