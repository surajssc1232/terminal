'use client'

import { useTypewriterEffect } from '../hooks/useTypewriterEffect'

export default function Skills() {
  const displayedText = useTypewriterEffect(
    'My Skills\n\n' +
    'Languages:\n' +
    '- Python (Advanced)\n' +
    '- Java (Advanced)\n' +
    '- SQL (Proficient)\n' +
    '- JavaScript (Intermediate)\n' +
    '- HTML/CSS (Intermediate)\n\n' +
    'Frameworks & Libraries:\n' +
    '- Spring Framework (Advanced)\n' +
    '- Spring Boot (Advanced)\n' +
    '- Django (Intermediate)\n' +
    '- Flask (Intermediate)\n' +
    '- Hibernate (Proficient)\n' +
    '- JUnit (Proficient)\n' +
    '- Pandas (Proficient)\n' +
    '- NumPy (Proficient)\n\n' +
    'Databases:\n' +
    '- PostgreSQL (Advanced)\n' +
    '- MySQL (Proficient)\n' +
    '- MongoDB (Intermediate)\n' +
    '- Redis (Intermediate)\n\n' +
    'Tools & Technologies:\n' +
    '- Git (Advanced)\n' +
    '- Docker (Proficient)\n' +
    '- Kubernetes (Intermediate)\n' +
    '- Jenkins (Intermediate)\n' +
    '- Maven (Proficient)\n' +
    '- Gradle (Intermediate)\n\n' +
    'Concepts:\n' +
    '- RESTful API Design\n' +
    '- Microservices Architecture\n' +
    '- Test-Driven Development (TDD)\n' +
    '- Agile Methodologies\n' +
    '- Object-Oriented Programming (OOP)\n' +
    '- Design Patterns\n' +
    '- Data Structures and Algorithms\n\n' +
    '$ grep -r "expertise" /skills\n' +
    '/skills/backend.txt: Strong expertise in backend development with Java and Python\n' +
    '/skills/databases.txt: Proficient in SQL and NoSQL databases, with a focus on performance optimization\n' +
    '/skills/architecture.txt: Experienced in designing scalable and maintainable software architectures\n\n' +
    '$ cat learning_goals.txt\n' +
    '1. Deepen knowledge of cloud technologies (AWS, Azure)\n' +
    '2. Explore machine learning and AI integration in applications\n' +
    '3. Enhance frontend skills with React and Vue.js\n' +
    '4. Master Kubernetes for advanced container orchestration',
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

