'use client'

import { useTypewriterEffect } from '../hooks/useTypewriterEffect'

export default function About() {
  const displayedText = useTypewriterEffect(
    'About Me\n\n' +
    'Name: Suraj Singh Chauhan\n' +
    'Age: 21\n' +
    'Occupation: Python and Java Developer\n\n' +
    'I\'m a passionate developer with a focus on backend technologies and a drive for creating efficient, scalable solutions.\n\n' +
    'My journey:\n' +
    '- Started coding at the age of 16\n' +
    '- Completed my first major project at 18\n' +
    '- Specialized in Python and Java development\n' +
    '- Mastered the Spring framework\n' +
    '- Continuously learning and improving my skills\n\n' +
    'Philosophy:\n' +
    'I believe in writing clean, maintainable code and always strive to follow best practices. My goal is to create software that not only works flawlessly but is also easy to understand and extend.\n\n' +
    'Interests:\n' +
    '- Open source contribution\n' +
    '- Exploring new technologies\n' +
    '- Solving complex algorithmic problems\n' +
    '- Mentoring junior developers\n\n' +
    '$ cat about.txt\n' +
    'Enthusiastic about creating robust and scalable applications.\n' +
    'Always eager to learn and adapt to new technologies.\n' +
    'Committed to delivering high-quality software solutions.',
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

