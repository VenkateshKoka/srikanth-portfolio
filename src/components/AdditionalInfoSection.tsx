"use client";

import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { Badge } from "@/components/ui/badge";
import { Languages, Sparkles } from "lucide-react";

// Animation variant for items
const itemVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const AdditionalInfoSection: React.FC = () => {
  const hasLanguages =
    resumeData.additionalInfo?.languages &&
    resumeData.additionalInfo.languages.length > 0;
  const hasInterests =
    resumeData.additionalInfo?.interests &&
    resumeData.additionalInfo.interests.length > 0;

  if (!hasLanguages && !hasInterests) {
    return null;
  }

  return (
    <section
      id="additional-info"
      className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 mx-auto max-w-6xl mb-16 md:mb-20 lg:mb-24 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className={`grid grid-cols-1 ${
            hasLanguages && hasInterests ? "md:grid-cols-2" : ""
          } gap-12`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {hasLanguages && (
            <div>
              <h2 className="text-2xl font-bold tracking-tighter text-center mb-6 md:mb-8 text-gray-800 dark:text-gray-100 flex items-center justify-center gap-2">
                <Languages size={24} /> Languages
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {resumeData.additionalInfo.languages.map((lang, index) => (
                  <motion.div
                    key={`lang-${index}`}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-base px-4 py-2 cursor-default
                                 bg-blue-100 border-blue-300 text-blue-800
                                 dark:bg-blue-700/30 dark:border-blue-500/50 dark:text-blue-200"
                    >
                      {lang}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {hasInterests && (
            <div>
              <h2 className="text-2xl font-bold tracking-tighter text-center mb-6 md:mb-8 text-gray-800 dark:text-gray-100 flex items-center justify-center gap-2">
                <Sparkles size={24} /> Interests
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {resumeData.additionalInfo.interests.map((interest, index) => (
                  <motion.div
                    key={`interest-${index}`}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-base px-4 py-2 cursor-default
                                 bg-emerald-100 border-emerald-300 text-emerald-800
                                 dark:bg-emerald-700/30 dark:border-emerald-500/50 dark:text-emerald-200"
                    >
                      {interest}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalInfoSection;
