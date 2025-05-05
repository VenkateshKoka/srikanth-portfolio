// import { type } from "os"; // Remove unused import

// Define interfaces for structured data
export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  location: string; // Added location property
  duration: string;
  points: string[];
}

export interface Project {
  name: string;
  client?: string; // Added client property
  duration?: string;
  technologies: string[]; // Added technologies property
  points: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string; // Added location property
  duration: string;
}

export interface AdditionalInfo {
  languages: string[];
  interests: string[];
}

export interface ResumeData {
  name: string; // Changed from intro
  contact: ContactInfo; // Added contact
  professionalSummary: string[]; // Changed from aboutMe
  technicalSkills: {
    [category: string]: string[];
  }; // Changed from skills
  workExperience: WorkExperience[];
  education: Education;
  projects: Project[];
  additionalInfo: AdditionalInfo; // Added additionalInfo
  // Removed certificates and internships as they're not used in the new design
}

export const resumeData: ResumeData = {
  name: "Srikanth T",
  contact: {
    email: "srikanthth2025@gmail.com",
    phone: "+91 9121962379",
    location: "Bangalore, India",
    linkedin: "linkedin.com/in/srikantht998",
    github: "github.com/Srikanth-Thottempudi",
  },
  professionalSummary: [
    "4+ years as a Software Developer building client/server and web applications using Java, Spring Boot, and Microservices.",
    "Proficient in Agile, delivering scalable solutions with RESTful APIs, AWS, Kafka, and Kubernetes.",
    "Skilled in React JS, Angular, HTML, CSS, and JavaScript for responsive front-end development.",
    "Experienced in post-production support, bug fixing, and CI/CD with Jenkins and Maven.",
  ],
  technicalSkills: {
    Languages: ["Java", "JavaScript", "SQL", "Node.js"],
    Frameworks: [
      "Spring",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "Struts",
    ],
    "Web Technologies": [
      "RESTful APIs",
      "SOAP",
      "HTML",
      "CSS",
      "React JS",
      "Angular",
      "JSP",
    ],
    Databases: ["MySQL", "MongoDB"],
    "Cloud & DevOps": ["AWS", "Kubernetes", "Jenkins", "Maven", "Git", "Jira"],
    Messaging: ["Kafka", "RabbitMQ"],
    "Tools & IDEs": ["IntelliJ IDEA", "Eclipse", "STS", "JUnit"],
    Servers: ["Apache Tomcat", "IBM WebSphere"],
    Other: [
      "Microservices",
      "Spring Security",
      "Multithreading",
      "Design Patterns",
    ],
  },
  workExperience: [
    {
      company: "Wipro",
      role: "Software Developer",
      location: "Bangalore, India",
      duration: "May 2024 – Present",
      points: [
        "Develop enterprise applications using Java, Spring Boot, and Microservices for scalability.",
        "Build RESTful APIs and integrate Kafka for real-time data processing, boosting efficiency by 15%.",
        "Collaborate in Agile teams to design and deliver high-quality code.",
        "Resolve production issues, ensuring application stability.",
      ],
    },
    {
      company: "Capgemini",
      role: "Software Engineer",
      location: "Bangalore, India",
      duration: "March 2021 – May 2024",
      points: [
        "Built web applications with Java, Spring, Hibernate, and React JS, enhancing user experience.",
        "Implemented Microservices and RESTful APIs, improving system modularity by 20%.",
        "Led requirement analysis and created Requirement Understanding Documents (RUD).",
        "Coordinated onshore-offshore teams for seamless development and deployment.",
      ],
    },
  ],
  education: {
    institution: "Lovely Professional University",
    degree: "B.Tech",
    location: "Punjab, India",
    duration: "Graduated: 2021",
  },
  projects: [
    {
      name: "B2B Gateway",
      client: "AT&T",
      duration: "June 2024 – Present",
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "JPA",
        "Angular",
        "AWS",
        "Kafka",
        "REST APIs",
        "JUnit",
        "Maven",
        "Jenkins",
        "Git",
      ],
      points: [
        "Built banking transaction system for AMEX, handling 24% of U.S. credit card volume.",
        "Developed RESTful APIs and Angular interfaces, improving user experience.",
        "Used AWS and Kafka for real-time processing, enhancing performance by 20%.",
      ],
    },
    {
      name: "Merchandising NGPP",
      client: "Kroger",
      duration: "September 2022 – May 2024",
      technologies: [
        "Java",
        "Spring",
        "Hibernate",
        "Spring Boot",
        "React JS",
        "Kubernetes",
        "Kafka",
        "REST APIs",
        "JUnit",
      ],
      points: [
        "Created platform for pricing and promotions, streamlining vendor contracts.",
        "Deployed Microservices on Kubernetes, ensuring high availability.",
        "Conducted code reviews and unit testing in Agile environment.",
      ],
    },
    {
      name: "Hospital Empanelment",
      client: "NICSI (MoHFW)",
      duration: "May 2021 – August 2022",
      technologies: [
        "Java",
        "J2EE",
        "Spring MVC",
        "Hibernate",
        "JSP",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
      ],
      points: [
        "Developed web app for hospital empanelment under NHPS, cutting processing time by 15%.",
        "Implemented Spring MVC and Hibernate for efficient data management.",
        "Designed JSP pages with JavaScript for improved form accuracy.",
      ],
    },
  ],
  additionalInfo: {
    languages: ["English (Fluent)", "Hindi (Fluent)"],
    interests: ["Open-source contributions", "cloud-native technologies"],
  },
};
