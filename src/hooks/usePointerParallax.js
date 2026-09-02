import { useEffect, useRef } from "react";

// Drifts an element against the pointer. The offset is written to CSS custom
// properties inside a rAF callback, so moving the mouse never re-renders React.
export function usePointerParallax(strength = 14) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return undefined;

        const canAnimate =
            window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!canAnimate) return undefined;

        let pointerX = 0;
        let pointerY = 0;
        let frame = 0;

        const apply = () => {
            frame = 0;
            const offsetX = (0.5 - pointerX / window.innerWidth) * 2 * strength;
            const offsetY = (0.5 - pointerY / window.innerHeight) * 2 * strength;
            element.style.setProperty("--parallax-x", `${offsetX.toFixed(2)}px`);
            element.style.setProperty("--parallax-y", `${offsetY.toFixed(2)}px`);
        };

        const handlePointerMove = (event) => {
            pointerX = event.clientX;
            pointerY = event.clientY;
            if (!frame) frame = window.requestAnimationFrame(apply);
        };

        window.addEventListener("pointermove", handlePointerMove, { passive: true });

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, [strength]);

    return ref;
}

export default usePointerParallax;
