'use client'

import { useTypewriterEffect } from '../hooks/useTypewriterEffect'

export default function Projects() {
  const displayedText = useTypewriterEffect(
    'My Projects\n\n' +
    '1. Spring Boot E-commerce API\n' +
    '   - Developed a comprehensive RESTful API for an e-commerce platform\n' +
    '   - Implemented secure user authentication and authorization\n' +
    '   - Integrated with payment gateways and order management systems\n' +
    '   - Technologies: Java, Spring Boot, Spring Security, PostgreSQL\n\n' +
    '2. Python Data Analysis Tool\n' +
    '   - Created a data processing and visualization tool for large datasets\n' +
    '   - Implemented advanced statistical analysis features\n' +
    '   - Designed an intuitive GUI for easy data exploration\n' +
    '   - Technologies: Python, Pandas, NumPy, Matplotlib, PyQt\n\n' +
    '3. Java-based Web Scraper\n' +
    '   - Developed an efficient web scraping tool for market research\n' +
    '   - Implemented multi-threading for improved performance\n' +
    '   - Created a flexible, config-driven scraping engine\n' +
    '   - Technologies: Java, Jsoup, Apache HttpClient, MongoDB\n\n' +
    '4. Microservices-based Task Management System\n' +
    '   - Designed and implemented a scalable task management solution\n' +
    '   - Created separate microservices for user management, task CRUD, and notifications\n' +
    '   - Implemented service discovery and load balancing\n' +
    '   - Technologies: Java, Spring Boot, Spring Cloud, Docker, Kubernetes\n\n' +
    '$ ls -l projects/\n' +
    'drwxr-xr-x  2 suraj  dev  4096 Jul  1 12:34 spring-boot-ecommerce-api\n' +
    'drwxr-xr-x  2 suraj  dev  4096 Jul  2 23:45 python-data-analysis-tool\n' +
    'drwxr-xr-x  2 suraj  dev  4096 Jul  3 01:23 java-web-scraper\n' +
    'drwxr-xr-x  2 suraj  dev  4096 Jul  4 15:56 microservices-task-management\n\n' +
    '$ cat project_philosophy.txt\n' +
    'Each project is an opportunity to learn, innovate, and create value. I approach every challenge with enthusiasm and a commitment to excellence.',
    5
  )

  return (
    <div className="min-h-full flex items-center justify-center">
      <div className="terminal-border w-full max-w-4xl">
        <div 
          className="whitespace-pre-wrap text-xs sm:text-sm md:text-base lg:text-lg"
          dangerouslySetInnerHTML={{ __html: displayedText }}
        />
      </div>
    </div>
  )
}

