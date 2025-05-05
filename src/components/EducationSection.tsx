"use client";

import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, GraduationCap } from "lucide-react";

const EducationSection: React.FC = () => {
  const { institution, degree, duration } = resumeData.education;

  if (!institution || !degree) {
    return null;
  }

  return (
    <motion.section
      id="education"
      className="w-full py-20 px-4 sm:px-8 md:px-12 bg-gray-900 mx-auto max-w-7xl mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="h-0.5 bg-gradient-to-r from-transparent via-purple-700 to-transparent w-full max-w-[100px] mr-6"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          <motion.h2
            className="text-3xl font-bold text-white relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Education
            </span>
          </motion.h2>
          <motion.div
            className="h-0.5 bg-gradient-to-r from-purple-700 via-transparent to-transparent w-full max-w-[100px] ml-6"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 50,
          }}
        >
          <Card className="bg-gray-800 backdrop-blur-md border border-gray-700 shadow-xl text-gray-100 overflow-hidden">
            <CardHeader className="pb-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CardTitle className="text-xl font-semibold text-purple-300 flex items-center gap-2">
                  <GraduationCap size={18} className="opacity-70" />
                  {degree}
                </CardTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CardDescription className="text-base text-gray-300 flex flex-col sm:flex-row sm:items-center sm:gap-x-2">
                  <span className="font-medium text-gray-200">
                    {institution}
                  </span>
                  <span className="hidden sm:inline text-cyan-500">•</span>
                  <span className="flex items-center gap-1 text-sm">
                    <MapPin size={14} className="inline-block text-gray-400" />{" "}
                  </span>
                  <span className="hidden sm:inline text-cyan-500">•</span>
                  <span className="text-gray-400 italic">{duration}</span>
                </CardDescription>
              </motion.div>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
