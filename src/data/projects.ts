export interface Project {
  name: string;
  description: string;
  link?: string;
  image?: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    name: "Solver LP",
    description:
      "The Visual Optimization System (Solver LP) is an interactive and didactic platform developed to assist in teaching and learning Operations Research. It focuses on the resolution and visualization of Linear Programming (Simplex Algorithm) and Integer Programming (Branch-and-Bound Algorithm) problems.",
    link: "https://github.com/mwblima/solver-lp",
    image: "/projects/Solver_LP.png",
    skills: ["Linear Programming", "Simplex Algorithm", "Branch-and-Bound"],
  },
  {
    name: "Apache Spark Hands-on",
    description:
      "Didactic simulations to master Apache Spark. Learn Query Plans, Spark UI, DAGs, Data Skew resolution, and performance tuning with hands-on exercises and real financial data.",
    link: "https://github.com/mwblima/apache-spark-studies",
    image: "/projects/Spark_studies.png",
    skills: ["Apache Spark", "Performance Tuning", "DAGs", "Spark UI"],
  },
  {
    name: "Economic Calendar Web Scraping",
    description:
      "Scraping of Economic Calendar from investing.com using Python 3 and the BeautifulSoup library.",
    link: "https://github.com/mwblima/web-scraping-investing",
    image: "/projects/Investing_webscraping.png",
    skills: ["Python", "Web Scraping", "BeautifulSoup", "Data Extraction"],
  },
];
