'use client'

import { useTypewriterEffect } from './hooks/useTypewriterEffect'

export default function Home() {
  const displayedText = useTypewriterEffect(
    'Welcome to Suraj Singh Chauhan\'s Portfolio\n\n' +
    'I am a 21-year-old Python and Java developer with a passion for building robust and scalable applications.\n\n' +
    'My expertise:\n' +
    '- Python Development\n' +
    '- Java Programming\n' +
    '- Spring Framework\n' +
    '- RESTful API Design\n' +
    '- Database Management\n' +
    '- Version Control (Git)\n\n' +
    'Feel free to explore my portfolio to learn more about my projects and skills.\n\n' +
    '$ cd /portfolio\n' +
    '$ ls\n' +
    'about  projects  skills\n\n' +
    '$ cat welcome.txt\n' +
    'Thank you for visiting my digital space. I\'m always excited to take on new challenges and collaborate on innovative projects. Let\'s build something amazing together!',
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

