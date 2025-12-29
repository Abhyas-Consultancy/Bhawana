// import { useEffect, useRef } from "react";

// export const useHorizontalScroll = () => {
//   const elRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const el = elRef.current;
//     if (!el) return;

//     const onWheel = (e: WheelEvent) => {
//       if (e.deltaY === 0) return;
//       e.preventDefault();
//       el.scrollLeft += e.deltaY + e.deltaX; // Supports trackpad horizontal too
//     };

//     el.addEventListener("wheel", onWheel, { passive: false });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, []);

//   return elRef;
// };


// src/hooks/useHorizontalScroll.ts
import { useEffect, useRef } from "react";

/**
 * Custom hook that converts vertical mouse wheel / trackpad scrolling
 * into smooth horizontal scrolling on the referenced element.
 * Perfect for creating "scroll-driven horizontal sections".
 */
export const useHorizontalScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onWheel = (e: WheelEvent) => {
      // Ignore pure horizontal scrolls (some trackpads)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      e.preventDefault();

      // Smooth horizontal scroll
      element.scrollTo({
        left: element.scrollLeft + e.deltaY * 1.8, // Adjust multiplier for faster/slower feel
        behavior: "smooth",
      });
    };

    // { passive: false } is required to allow preventDefault()
    element.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", onWheel);
    };
  }, []);

  return ref;
};