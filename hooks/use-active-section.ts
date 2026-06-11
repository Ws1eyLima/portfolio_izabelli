"use client";

import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[], defaultSection: string = "") {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();
    const visibilityMap = new Map<string, boolean>();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        visibilityMap.set(entry.target.id, entry.isIntersecting);
      });

      // Find the first section that is visible
      const visibleSection = sectionIds.find((id) => visibilityMap.get(id));
      if (visibleSection) {
        setActiveSection(visibleSection);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is in the top 20-40% of viewport
      threshold: 0,
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(element);
        observers.set(id, observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
