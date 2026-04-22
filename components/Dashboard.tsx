'use client';

import { useEffect, useState } from 'react';
<<<<<<< HEAD
=======
import { List, CaretUp } from '@phosphor-icons/react';
>>>>>>> from-master
import Sidebar from '@/components/Sidebar';
import ClientSection from '@/components/ClientSection';
import DashboardOverview from '@/components/DashboardOverview';
import PageTransition from '@/components/PageTransition';
import SectionTransition from '@/components/SectionTransition';
import { Section } from '@/types/client';
import { useAppStore } from '@/store/useAppStore';

interface DashboardProps {
  /** Section initiale (optionnel, défaut: 'dp-en-cours') */
  initialSection?: Section;
}

export default function Dashboard({ initialSection = 'dp-en-cours' }: DashboardProps) {
  const { activeSection, setActiveSection, sectionCounts } = useAppStore();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
<<<<<<< HEAD
=======
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
>>>>>>> from-master

  useEffect(() => {
    if (initialSection) {
      setActiveSection(initialSection);
    }
  }, [initialSection, setActiveSection]);

<<<<<<< HEAD
  return (
    <div className="h-screen">
=======
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex h-screen">
>>>>>>> from-master
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sectionCounts={sectionCounts}
        onCollapsedChange={setIsSidebarCollapsed}
<<<<<<< HEAD
      />
      <main className={`flex-1 overflow-auto transition-all duration-300 ${
        isSidebarCollapsed ? 'pl-16' : 'pl-56'
      }`}>
=======
        isMobileOpen={isMobileSidebarOpen}
        onMobileClose={() => setIsMobileSidebarOpen(false)}
      />
      <main className={`flex-1 overflow-auto transition-all duration-200 relative ${
        isSidebarCollapsed ? 'ml-16' : 'ml-56'
      }`}>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="md:hidden fixed top-20 left-4 z-30 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:scale-[1.01] transition-transform duration-200"
          aria-label="Ouvrir le menu"
        >
          <List className="h-6 w-6 text-gray-600 dark:text-gray-400" weight="bold" />
        </button>

>>>>>>> from-master
        <PageTransition>
          <SectionTransition sectionKey={activeSection}>
            {activeSection === 'clients' ? (
              <DashboardOverview />
            ) : (
              <ClientSection section={activeSection} />
            )}
          </SectionTransition>
        </PageTransition>
<<<<<<< HEAD
=======

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg shadow-md hover:shadow hover:scale-[1.01] transition-all duration-200"
            aria-label="Retour en haut"
          >
            <CaretUp className="h-5 w-5" weight="bold" />
          </button>
        )}
>>>>>>> from-master
      </main>
    </div>
  );
}
