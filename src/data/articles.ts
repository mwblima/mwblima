export interface Article {
  title: string;
  date: string;
  category: string;
  link: string;
  image?: string;
  description?: string;
}

export const articles: Article[] = [
  {
    title: "Distributed Context Architecture: How I Scale Claude Code in Complex Environments",
    date: "APR 09, 2026",
    category: "AI Engineering & Architecture",
    link: "https://marcoswinicyus.substack.com/p/distributed-context-architecture",
    image: "/articles/Claude_code_managment.png",
    description: "Claude Code Context Management Beyond a Single Repository",
  },
  {
    title: "Orchestration Architecture in Practice: 6 Items That Highlight AWS Step Functions",
    date: "FEB 14, 2026",
    category: "AWS & Data Engineering",
    link: "https://marcoswinicyus.substack.com/p/arquitetura-de-orquestracao-na-pratica",
    image: "/articles/step_fuction_1.jpg",
  },
  {
    title: "Unveiling Data Engineering Architectural Patterns: Insights and Trends",
    date: "JAN 21, 2025",
    category: "Data Engineering",
    link: "https://www.linkedin.com/pulse/unveiling-data-engineering-architectural-patterns-trends-winicyus-pdbzf",
    image: "/articles/data_eng_patterns.jpg",
  },
  {
    title: "Optimize Your Time: Simple Strategies for Better Results with Generative AI",
    date: "JUL 23, 2024",
    category: "Prompt Engineering",
    link: "https://www.linkedin.com/pulse/otimize-seu-tempo-estrat%C3%A9gias-simples-para-melhores-com-winicyus-liq4f",
    image: "/articles/prompting_end.jpg",
  }
];
