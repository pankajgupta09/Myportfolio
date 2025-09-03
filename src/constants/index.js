import codame from "../assets/codame.svg";
import singularityAI from "../assets/singularityAI.jpg";
import metaverse from "../assets/metaverse.png";
import iiit from "../assets/iiitbhopal.jpg";
import EHR from "../assets/EHR.png";
const experiences = [
  {
    title: "Event Lead",
    company_name: "ARUNODAY, IIIT Bhopal",
    icon: codame,
    iconBg: "#000000",
    date: "August 2024 - Present",
    points: [
      "Led a team of core members in organizing and executing various social initiatives and outreach programs under the Arunoday Club, ensuring activities aligned with the club’s mission of social responsibility and community engagement.",
      "Guided the team in planning, coordinating, and managing events such as awareness campaigns, donation drives, and educational sessions, while ensuring efficient use of resources and maximum community impact.",
      "Fostered collaboration and teamwork by mentoring members, promoting creative ideas for social initiatives, and encouraging open communication to achieve goals and deliver meaningful experiences for both the student body and society.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Minasa",
    icon: singularityAI,
    iconBg: "#000000",
    date: "June 2025 - Aug 2025",
    points: [
      "Developed robust and reliable front-end for web and Android applications that increased ease by 90 %",
      "Integrated potent, reliable back-end using NestJS 13 and Nhipster to manage SASS applications.",
      "Incorporated GPT-based data scraping via 3rd party API and used Docker and Kubernetes for deployment",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Problem Setter",
    company_name: "Shipd Ai",
    icon: metaverse,
    iconBg: "#383E56",
    date: "August 2024 - October 2024",
    points: [
      "Designed and curated challenging algorithmic problems for coding assessments, ensuring a balance of difficulty, clarity, and relevance to real-world scenarios.",
      "Collaborated with the evaluation team to create diverse problem sets, covering topics such as data structures, dynamic programming, graph theory, and optimization.",
      "Implemented rigorous test case generation to validate correctness, efficiency, and edge-case handling of candidate submissions.",
      "Contributed to enhancing the platform’s problem repository, improving the quality and variety of assessments used for hiring and upskilling.",
    ],
  },
  {
    title: "AI Reviewer & Math Expert",
    company_name: "Outlier AI",
    icon: codame,
    iconBg: "#000000",
    date: "Jan 2025 - Mar 2025",
    points: [
      "Reviewed and evaluated AI-generated responses for mathematical accuracy, logical reasoning, and clarity",
      "Applied expertise in mathematics  to verify correctness of solutions and identify subtle errors.",
      "Provided structured feedback to improve AI performance, focusing on precision, step-by-step explanation, and problem-solving approaches.",

    ],
  },
  {
    title: "Chegg Expert",
    company_name: "Chegg",
    icon: iiit,
    iconBg: "#000000",
    date: "july 2024 - Present",
    points: [
      "Worked as a Chegg Subject Expert, providing accurate and step-by-step solutions in Computer Science and Mathematics. Assisted students worldwide by simplifying complex concepts, ensuring conceptual clarity, and delivering high-quality academic support within tight deadlines.",
    ],
  },
];
const projects = [
  {
    name: "EatWellthy",
    subHead: "AI-powered Nutrition App",
    description:
      "EatWellthy AI, a health and nutrition-focused platform, by leveraging AI-driven solutions to provide personalized dietary recommendations. Assisted in improving content accuracy and user experience through research, data analysis, and innovative applications of artificial intelligence in the wellness domain.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: EHR,
    source_code_link: "https://github.com/pankajgupta09?tab=repositories",
  },
  {
    name: "Gramify",
    subHead: "Social Media App",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: EHR,
    source_code_link: "https://github.com/pankajgupta09?tab=repositories",
  },
  {
    name: "DreamGood",
    subHead: "Immigration Services",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: EHR,
    source_code_link: "https://github.com/pankajgupta09?tab=repositories",
  },
];

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experiences",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export { experiences, projects, navLinks };
