import HeroSection from "@/components/HeroSection";
// import SkillsSection from "@/components/SkillsSection"; // Removed
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900">
      <HeroSection />
      {/* <SkillsSection /> */} {/* Removed */}
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      {/* Add Footer component here if needed */}
    </main>
  );
}
