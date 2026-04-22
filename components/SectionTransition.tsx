'use client';

import { useEffect, useState } from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  sectionKey: string;
  className?: string;
}

export default function SectionTransition({
  children,
  sectionKey,
  className = '',
}: SectionTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(sectionKey);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentSection !== sectionKey) {
      // Changement de section - animation de sortie
      setIsExiting(true);
      setIsVisible(false);

      const timer = setTimeout(() => {
        setCurrentSection(sectionKey);
        setIsExiting(false);
        setIsVisible(true);
      }, 200);

      return () => clearTimeout(timer);
    } else {
      // Première apparition
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [sectionKey, currentSection]);

  return (
    <div
      className={`
        transition-all duration-300 ease-out
        ${isVisible && !isExiting ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-95'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
