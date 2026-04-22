'use client';

import { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> from-master
import {
  FileText,
  CheckCircle,
  XCircle,
  Circle,
<<<<<<< HEAD
  Zap,
  Flag,
  ChevronLeft,
  ChevronRight,
  Keyboard,
} from 'lucide-react';
=======
  Lightning,
  Flag,
  CaretLeft,
  CaretRight,
  CheckSquare,
  MagnifyingGlass,
  X,
  List,
} from '@phosphor-icons/react';
>>>>>>> from-master
import { Section } from '@/types/client';

interface SidebarProps {
  /** Section actuellement active */
  activeSection: Section;
  /** Fonction pour changer la section active */
  setActiveSection: (section: Section) => void;
  /** Comptes de clients par section */
  sectionCounts?: Record<string, number>;
  /** Callback appelé quand la sidebar est réduite/étendue */
  onCollapsedChange?: (collapsed: boolean) => void;
<<<<<<< HEAD
=======
  /** État mobile de la sidebar */
  isMobileOpen?: boolean;
  /** Callback pour fermer la sidebar mobile */
  onMobileClose?: () => void;
>>>>>>> from-master
}

const sectionGroups = [
  {
    title: 'Déclarations Préalables',
    sections: [
      {
        id: 'dp-en-cours' as const,
        label: 'DP En cours',
        icon: FileText,
      },
      {
        id: 'dp-accordes' as const,
        label: 'DP Accordés',
        icon: CheckCircle,
      },
      {
        id: 'dp-refuses' as const,
        label: 'DP Refus',
        icon: XCircle,
      },
<<<<<<< HEAD
=======
      {
        id: 'daact' as const,
        label: 'DAACT',
        icon: CheckSquare,
      },
>>>>>>> from-master
    ],
  },
  {
    title: 'Certifications Consuel',
    sections: [
      {
        id: 'consuel-en-cours' as const,
        label: 'Consuel En cours',
        icon: Circle,
      },
      {
        id: 'consuel-finalise' as const,
        label: 'Consuel Finalisé',
        icon: CheckCircle,
      },
    ],
  },
  {
    title: 'Raccordement',
    sections: [
      {
        id: 'raccordement' as const,
        label: 'Raccordement',
<<<<<<< HEAD
        icon: Zap,
=======
        icon: Lightning,
>>>>>>> from-master
      },
      {
        id: 'raccordement-mes' as const,
        label: 'Raccordement MES',
        icon: Flag,
      },
    ],
  },
];

export default function Sidebar({
  activeSection,
  setActiveSection,
  sectionCounts,
  onCollapsedChange,
<<<<<<< HEAD
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
=======
  isMobileOpen = false,
  onMobileClose,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
>>>>>>> from-master

  useEffect(() => {
    if (onCollapsedChange) {
      onCollapsedChange(isCollapsed);
    }
  }, [isCollapsed, onCollapsedChange]);

<<<<<<< HEAD
  // Raccourcis clavier pour la navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        const sections: Section[] = [
          'dp-en-cours',
          'dp-accordes',
          'dp-refuses',
          'consuel-en-cours',
          'consuel-finalise',
          'raccordement',
          'raccordement-mes',
        ];
        
        const keyIndex = parseInt(e.key);
        if (keyIndex >= 1 && keyIndex <= sections.length) {
          setActiveSection(sections[keyIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setActiveSection]);

  return (
    <aside
      className={`bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-r border-gray-200/50 dark:border-gray-700/50 h-[calc(100vh-3.5rem)] fixed top-14 left-0 z-40 flex flex-col shadow-lg transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-56'
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-4 z-50 p-1.5 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform duration-200"
        aria-label={isCollapsed ? 'Étendre la sidebar' : 'Réduire la sidebar'}
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        ) : (
          <ChevronLeft className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        )}
      </button>
      <nav className="py-4 flex-1 overflow-y-auto">
        {sectionGroups.map((group, groupIndex) => (
          <div key={group.title} className="mb-6">
            {!isCollapsed && (
              <div className="px-4 mb-3">
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
=======
  // Load saved state
  useEffect(() => {
    const savedCollapsed = localStorage.getItem('sidebar-collapsed');
    if (savedCollapsed !== null) setIsCollapsed(savedCollapsed === 'true');
  }, []);

  // Save state
  const handleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem('sidebar-collapsed', String(newState));
  };

  // Filter sections based on search query
  const filteredSectionGroups = sectionGroups.map(group => ({
    ...group,
    sections: group.sections.filter(section =>
      section.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.sections.length > 0);

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onMobileClose}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <aside
        className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-[calc(100vh-3.5rem)] z-40 flex flex-col shadow-md transition-all duration-200 flex-shrink-0 ${
          isMobile
            ? isMobileOpen
              ? 'translate-x-0 w-64 fixed left-0'
              : '-translate-x-full w-64 fixed left-0'
            : 'fixed left-0 top-14 ' + (isCollapsed ? 'w-16' : 'w-56')
        }`}
        role="navigation"
        aria-label="Navigation principale"
      >
      {/* Mobile Close Button */}
      {isMobile && (
        <button
          onClick={onMobileClose}
          className="absolute right-4 top-4 z-50 p-2 bg-white dark:bg-gray-700 rounded-lg shadow border border-gray-200 dark:border-gray-600 hover:scale-[1.01] transition-transform duration-200 md:hidden"
          aria-label="Fermer la sidebar"
        >
          <X className="h-5 w-5 text-gray-600 dark:text-gray-300" weight="bold" />
        </button>
      )}


      {/* Search Bar */}
      {!isCollapsed && (
        <div className="px-4 py-3">
          <div className="relative">
            <MagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Effacer la recherche"
              >
                <X className="h-4 w-4" weight="bold" />
              </button>
            )}
          </div>
        </div>
      )}

      <nav className="py-4 flex-1 overflow-y-auto">
        {filteredSectionGroups.map((group, groupIndex) => (
          <div key={group.title} className="mb-6">
            {!isCollapsed && (
              <div className="px-4 mb-3">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
>>>>>>> from-master
                  {group.title}
                </span>
              </div>
            )}
            <ul className="space-y-2 px-2" role="list">
              {group.sections.map((section, sectionIndex) => {
                const globalIndex = sectionGroups.slice(0, groupIndex).reduce((acc, g) => acc + g.sections.length, 0) + sectionIndex + 1;
                return (
                  <li key={section.id} role="listitem">
                    <button
                      onClick={() => setActiveSection(section.id)}
<<<<<<< HEAD
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-3 group relative overflow-hidden
                        ${
                          activeSection === section.id
                            ? 'bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 text-white shadow-xl ring-2 ring-teal-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 transform scale-[1.02]'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900'
=======
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-3 group relative overflow-hidden
                        ${
                          activeSection === section.id
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md ring-2 ring-amber-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 transform scale-[1.01]'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900'
>>>>>>> from-master
                        }`}
                      tabIndex={0}
                      aria-current={activeSection === section.id ? 'page' : undefined}
                      title={isCollapsed ? `${section.label} (Alt+${globalIndex})` : undefined}
                    >
                      {activeSection === section.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      )}
                      {section.icon && (
                        <section.icon
<<<<<<< HEAD
                          className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${
                            activeSection === section.id ? 'text-white scale-110' : 'text-gray-400 dark:text-gray-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:scale-110'
=======
                          weight="regular"
                          className={`h-5 w-5 flex-shrink-0 transition-all duration-200 ${
                            activeSection === section.id ? 'text-white scale-110' : 'text-gray-400 dark:text-gray-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 group-hover:scale-110'
>>>>>>> from-master
                          }`}
                          aria-hidden="true"
                        />
                      )}
                      {!isCollapsed && (
                        <>
                          <span className="flex-1 relative z-10">{section.label}</span>
                          {sectionCounts && sectionCounts[section.id] !== undefined && (
                            <span
<<<<<<< HEAD
                              className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all duration-300 relative z-10 ${
                                activeSection === section.id
                                  ? 'bg-white text-teal-600 shadow-md'
                                  : 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50'
=======
                              className={`text-xs font-bold px-2 py-1 rounded-full transition-all duration-200 relative z-10 ${
                                activeSection === section.id
                                  ? 'bg-white text-amber-600 shadow'
                                  : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 group-hover:bg-amber-200 dark:group-hover:bg-amber-800/50'
>>>>>>> from-master
                              }`}
                            >
                              {sectionCounts[section.id]}
                            </span>
                          )}
                        </>
                      )}
                      {isCollapsed && sectionCounts && sectionCounts[section.id] !== undefined && (
<<<<<<< HEAD
                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full relative z-10 ${
                          activeSection === section.id
                            ? 'bg-white text-teal-600'
                            : 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400'
=======
                        <span className={`text-xs font-bold px-2 py-1 rounded-full relative z-10 ${
                          activeSection === section.id
                            ? 'bg-white text-amber-600'
                            : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
>>>>>>> from-master
                        }`}>
                          {sectionCounts[section.id]}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
<<<<<<< HEAD
      
      {/* Keyboard shortcuts hint */}
      {!isCollapsed && (
        <div className="px-4 py-3 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Keyboard className="h-3 w-3" />
            <span>Alt + 1-7</span>
          </div>
        </div>
      )}
    </aside>
=======

      {/* Collapse Toggle - Desktop only */}
      {!isMobile && (
        <div className="px-2 py-3 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleCollapse}
            className="w-full flex items-center justify-center gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-200"
            aria-label={isCollapsed ? 'Étendre la sidebar' : 'Réduire la sidebar'}
          >
            {isCollapsed ? (
              <CaretRight className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            ) : (
              <>
                <CaretLeft className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Réduire</span>
              </>
            )}
          </button>
        </div>
      )}
    </aside>
    </>
>>>>>>> from-master
  );
}
