"use client";

import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

// Animation variants for staggering children (skills)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Slightly faster stagger for badges
      delayChildren: 0.5, // Start after hero text animation
    },
  },
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const HeroSection: React.FC = () => {
  const { name, contact, professionalSummary, technicalSkills } = resumeData;
  const skillCategories = Object.keys(technicalSkills);

  const handleLinkClick = (url: string) => {
    // Prepend https:// if missing, common for linkedin/github in data
    const safeUrl =
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : `https://${url}`;
    window.open(safeUrl, "_blank", "noopener,noreferrer");
  };

  const handleLinkKeyDown = (event: React.KeyboardEvent, url: string) => {
    if (event.key === "Enter" || event.key === " ") {
      handleLinkClick(url);
    }
  };

  return (
    <motion.section
      className="w-full py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center space-y-8 text-center 
                   bg-white dark:bg-slate-800/80 backdrop-blur-sm 
                   rounded-2xl p-8 md:p-12 lg:p-16 shadow-lg border border-slate-200 dark:border-slate-700
                   w-full max-w-7xl mx-auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
      >
        {/* Name */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
          {name}
        </h1>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            aria-label={`Email ${name} at ${contact.email}`}
            tabIndex={0}
          >
            <Mail size={16} /> {contact.email}
          </a>
          <span className="flex items-center gap-1">
            <Phone size={16} /> {contact.phone}
          </span>
          {/* Location */}
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {contact.location}
          </span>
          <span
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            onClick={() => handleLinkClick(contact.linkedin)}
            onKeyDown={(e) => handleLinkKeyDown(e, contact.linkedin)}
            role="link"
            tabIndex={0}
            aria-label={`View ${name}'s LinkedIn profile (opens in new tab)`}
          >
            <Linkedin size={16} /> LinkedIn
          </span>
          <span
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            onClick={() => handleLinkClick(contact.github)}
            onKeyDown={(e) => handleLinkKeyDown(e, contact.github)}
            role="link"
            tabIndex={0}
            aria-label={`View ${name}'s GitHub profile (opens in new tab)`}
          >
            <Github size={16} /> GitHub
          </span>
        </div>

        {/* Professional Summary */}
        <div className="text-left max-w-[800px] mx-auto space-y-2 text-gray-700 dark:text-gray-300 md:text-lg">
          <h2 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-100">
            Professional Summary
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {professionalSummary.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Separator */}
        <motion.hr
          className="w-2/3 border-t border-slate-300 dark:border-slate-600 my-6"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "66.66%", opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        />

        {/* Skills Section Integrated */}
        <motion.div
          className="w-full max-w-5xl space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category}
                className="space-y-3"
                variants={itemVariants}
              >
                <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400 text-left">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-start">
                  {technicalSkills[category].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm bg-teal-100 text-teal-800 dark:bg-teal-700 dark:text-teal-100 border border-teal-300 dark:border-teal-600 px-3 py-1 cursor-default transition-colors hover:bg-teal-200 dark:hover:bg-teal-600"
                      tabIndex={0}
                      aria-label={`Skill: ${skill}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
