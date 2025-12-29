import { useEffect, useRef } from "react";


export const useFloatingCards = () => {
const containerRef = useRef<HTMLDivElement | null>(null);


useEffect(() => {
const container = containerRef.current;
if (!container) return;


const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-float-card]"));


const onScroll = () => {
const rect = container.getBoundingClientRect();
const viewportHeight = window.innerHeight;


cards.forEach((card, index) => {
const speed = 0.15 + index * 0.05; // subtle variation
const offset = (viewportHeight - rect.top) * speed;
card.style.transform = `translateY(${Math.max(-40, Math.min(40, offset))}px)`;
});
};


window.addEventListener("scroll", onScroll, { passive: true });
onScroll();


return () => window.removeEventListener("scroll", onScroll);
}, []);


return containerRef;
};