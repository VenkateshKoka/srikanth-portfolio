"use client";

import React from "react";
import { motion } from "framer-motion";
import { resumeData, type WorkExperience } from "@/data/resumeData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

// Animation variant for cards
const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const ExperienceCard: React.FC<{ experience: WorkExperience }> = ({
  experience,
}) => {
  return (
    <Card
      className="mb-6 break-inside-avoid
                 bg-white dark:bg-slate-800/80 backdrop-blur-sm
                 border border-slate-200 dark:border-slate-700 shadow-lg
                 text-gray-800 dark:text-gray-200"
    >
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
          {experience.role}
        </CardTitle>
        <CardDescription className="text-base text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row sm:items-center sm:gap-x-2">
          <span>{experience.company}</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            <MapPin size={14} className="inline-block" />{" "}
          </span>
          <span className="hidden sm:inline">•</span>
          <span>{experience.duration}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ExperienceSection: React.FC = () => {
  if (!resumeData.workExperience || resumeData.workExperience.length === 0) {
    return null;
  }

  return (
    <section
      id="experience"
      className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 mx-auto max-w-7xl mb-16 md:mb-20 lg:mb-24 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tighter text-center mb-10 md:mb-14 text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {resumeData.workExperience.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
