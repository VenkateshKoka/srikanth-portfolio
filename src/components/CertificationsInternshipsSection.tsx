"use client";

import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { Badge } from "@/components/ui/badge";

// Animation variant for badges
const badgeVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const CertificationsInternshipsSection: React.FC = () => {
  const hasCertificates =
    resumeData.certificates && resumeData.certificates.length > 0;
  const hasInternships =
    resumeData.internships && resumeData.internships.length > 0;

  if (!hasCertificates && !hasInternships) {
    return null; // Don't render if no data
  }

  return (
    <section
      id="certs-internships"
      className="w-full py-16 md:py-20 lg:py-24 bg-black/10 dark:bg-white/5 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 mx-auto max-w-6xl"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {hasCertificates && (
            <div>
              <h2 className="text-2xl font-bold tracking-tighter text-center mb-6 md:mb-8 text-white">
                Certificates
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {resumeData.certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={badgeVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-base px-4 py-2 
                                 bg-purple-600/20 border-purple-400/50 text-purple-100 
                                 hover:bg-purple-600/40 transition-colors"
                    >
                      {cert}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          {hasInternships && (
            <div>
              <h2 className="text-2xl font-bold tracking-tighter text-center mb-6 md:mb-8 text-white">
                Internships
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {resumeData.internships.map((internship, index) => (
                  <motion.div
                    key={index}
                    variants={badgeVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-base px-4 py-2 
                                 bg-teal-600/20 border-teal-400/50 text-teal-100 
                                 hover:bg-teal-600/40 transition-colors"
                    >
                      {internship}
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

export default CertificationsInternshipsSection;
