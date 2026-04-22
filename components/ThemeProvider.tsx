'use client';

import { useEffect } from 'react';
<<<<<<< HEAD
import { useAppStore } from '@/store/useAppStore';
=======
>>>>>>> from-master

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< HEAD
  const theme = useAppStore((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);
=======
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
  }, []);
>>>>>>> from-master

  return <>{children}</>;
}
