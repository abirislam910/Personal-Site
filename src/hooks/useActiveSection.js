import { useEffect, useState } from "react";

const THRESHOLDS = [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

// Reports which section currently fills most of the viewport so the nav can
// highlight it. Ranks by intersected height rather than intersectionRatio: a
// section taller than the screen can never reach a high ratio, and would
// otherwise always lose to a short one.
export function useActiveSection(ids, topOffset = 0) {
    const [activeId, setActiveId] = useState(ids[0]);

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        if (sections.length === 0) return undefined;

        const visibleHeights = new Map();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    visibleHeights.set(
                        entry.target.id,
                        entry.isIntersecting ? entry.intersectionRect.height : 0
                    );
                });

                let best = null;
                let bestHeight = 0;
                visibleHeights.forEach((height, id) => {
                    if (height > bestHeight) {
                        bestHeight = height;
                        best = id;
                    }
                });

                if (best) setActiveId(best);
            },
            {
                // Discount the strip hidden behind the fixed header.
                rootMargin: `-${topOffset}px 0px 0px 0px`,
                threshold: THRESHOLDS,
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [ids, topOffset]);

    return activeId;
}

export default useActiveSection;
