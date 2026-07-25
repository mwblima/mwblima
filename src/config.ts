import { projects, type Project } from "./data/projects";
import { articles, type Article } from "./data/articles";
import { aboutMe, skills, experience, education, type Experience, type Education } from "./data/about";

export { type Project, type Article, type Experience, type Education };

export const siteConfig = {
  name: "Marcos Winicyus",
  title: "Senior Analytics Engineer",
  description: "Portfolio website of Marcos Winicyus",
  accentColor: "#2A7F6E",
  heroHeadline: "Architecting intelligent systems that transform complexity into clarity.",
  heroSubheadline: "I design and build scalable data platforms and AI solutions that solve complex problems and generate real business impact.",
  social: {
    email: "marcoswinicyusbl@gmail.com",
    linkedin: "https://www.linkedin.com/in/marcos-winicyus",
    twitter: "",
    github: "https://github.com/mwblima",
  },
  aboutMe,
  skills,
  projects,
  articles,
  experience,
  education,
};
