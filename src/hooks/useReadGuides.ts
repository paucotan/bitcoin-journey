import { useState } from 'react';

const STORAGE_KEY = 'bitcoin-journey:read-guides';

export function useReadGuides() {
  const [readGuides, setReadGuides] = useState<Set<string>>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  });

  const markAsRead = (slug: string) => {
    setReadGuides(prev => {
      const next = new Set(prev).add(slug);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  };

  return { readGuides, markAsRead };
}
