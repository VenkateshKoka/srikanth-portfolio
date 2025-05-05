"use client";

import React from "react";
import { motion } from "framer-motion";
import { resumeData, type Project } from "@/data/resumeData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Animation variant for cards
const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card
      className="mb-6 break-inside-avoid
                 bg-white dark:bg-slate-800
                 border border-slate-200 dark:border-slate-700 shadow-md
                 text-gray-800 dark:text-gray-200"
    >
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
          {project.name}
        </CardTitle>
        {project.duration && (
          <CardDescription className="text-base text-gray-300">
            {project.duration}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <ul className="list-disc space-y-2 pl-5 text-gray-300">
          {project.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ProjectsSection: React.FC = () => {
  if (!resumeData.projects || resumeData.projects.length === 0) {
    return null;
  }

  return (
    <section
      id="projects"
      className="w-full py-16 md:py-20 lg:py-24 bg-black/10 dark:bg-white/5 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 mx-auto max-w-7xl mb-16 md:mb-20 lg:mb-24"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tighter text-center mb-10 md:mb-14 text-white"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="space-y-8">
          {resumeData.projects.map((proj, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProjectCard project={proj} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
