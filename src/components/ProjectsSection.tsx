// import { ArrowUpRight, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import villaImage from "@/assets/property-villa.jpg";
// import aerialImage from "@/assets/project-aerial.jpg";
// import interiorImage from "@/assets/interior-1.jpg";

// const projects = [
//   {
//     image: villaImage,
//     title: "Resedential",
//     location: "Sector 45, Gurugram",
//     type: "Luxury Apartments",
//     status: "Ready to Move",
//     price: "₹1.2 Cr onwards",
//   },
//   {
//     image: aerialImage,
//     title: "Industrial",
//     location: "Sohna Road, Gurugram",
//     type: "Integrated Township",
//     status: "Under Construction",
//     price: "₹85 Lac onwards",
//   },
//   {
//     image: interiorImage,
//     title: "Commercial",
//     location: "Cyber City, Gurugram",
//     type: "Commercial Complex",
//     status: "Pre-Launch",
//     price: "₹65 Lac onwards",
//   },
//   {
//     image: interiorImage,
//     title: "Agricultural",
//     location: "Cyber City, Gurugram",
//     type: "Commercial Complex",
//     status: "Pre-Launch",
//     price: "₹65 Lac onwards",
//   },
// ];

// const ProjectsSection = () => {
//   return (
//     <section id="projects" className="section-padding bg-cream">
//       <div className="container-wide">
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
//           <div className="max-w-xl">
//             <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Featured Projects</span>
//             <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4">
//               The Architecture of Well-being
//             </h2>
//           </div>
//           <Button variant="hero-outline" size="lg">
//             View All Projects
//             <ArrowUpRight className="w-5 h-5" />
//           </Button>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-card rounded-sm overflow-hidden shadow-soft hover:shadow-large transition-all duration-500"
//             >
//               {/* Image */}
//               <div className="relative aspect-[4/3] overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="px-3 py-1 text-xs font-medium bg-background/90 text-foreground rounded-sm">
//                     {project.status}
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
//                   <MapPin className="w-4 h-4" />
//                   <span>{project.location}</span>
//                 </div>
//                 <h3 className="font-serif text-xl font-medium text-foreground mb-1">
//                   {project.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm mb-4">{project.type}</p>
//                 <div className="flex items-center justify-between pt-4 border-t border-border">
//                   <span className="font-semibold text-primary">{project.price}</span>
//                   <Button variant="minimal" size="sm" className="group-hover:text-primary">
//                     View Details
//                     <ArrowUpRight className="w-4 h-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;


// import { ArrowUpRight, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import villaImage from "@/assets/property-villa.jpg";
// import aerialImage from "@/assets/project-aerial.jpg";
// import interiorImage from "@/assets/interior-1.jpg";
// import { useHorizontalScroll } from "@/hooks/useHorizontalScroll"; // Adjust path if needed

// const projects = [
//   {
//     image: villaImage,
//     title: "Resedential",
//     location: "Sector 45, Gurugram",
//     type: "Luxury Apartments",
//     status: "Ready to Move",
//     price: "₹1.2 Cr onwards",
//   },
//   {
//     image: aerialImage,
//     title: "Industrial",
//     location: "Sohna Road, Gurugram",
//     type: "Integrated Township",
//     status: "Under Construction",
//     price: "₹85 Lac onwards",
//   },
//   {
//     image: interiorImage,
//     title: "Commercial",
//     location: "Cyber City, Gurugram",
//     type: "Commercial Complex",
//     status: "Pre-Launch",
//     price: "₹65 Lac onwards",
//   },
//   {
//     image: interiorImage,
//     title: "Agricultural",
//     location: "Cyber City, Gurugram",
//     type: "Commercial Complex",
//     status: "Pre-Launch",
//     price: "₹65 Lac onwards",
//   },
// ];

// const ProjectsSection = () => {
//   const scrollRef = useHorizontalScroll();

//   return (
//     <section id="projects" className="bg-cream py-32">
//       <div className="container-wide">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-24">
//           <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
//             Featured Projects
//           </span>
//           <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground mt-6 mb-8">
//             The Architecture of Well-being
//           </h2>
//           <div className="flex justify-center mt-8">
//             <Button variant="hero-outline" size="lg">
//               View All Projects
//               <ArrowUpRight className="w-5 h-5 ml-2" />
//             </Button>
//           </div>
//         </div>

//         {/* Pinned Horizontal Scroll Area – Tiles "float" on scroll */}
//         <div className="h-screen sticky top-0 overflow-hidden -mt-32">
//           <div
//             ref={scrollRef}
//             className="h-full flex items-center overflow-x-auto overflow-y-hidden px-8 scrollbar-none"
//           >
//             <div className="flex gap-12">
//               {projects.map((project, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-96 group"
//                 >
//                   <div className="bg-card rounded-sm overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 h-[580px] flex flex-col">
//                     {/* Image */}
//                     <div className="relative aspect-[4/3] overflow-hidden">
//                       <img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       />
//                       <div className="absolute top-4 left-4">
//                         <span className="px-3 py-1 text-xs font-medium bg-background/90 text-foreground rounded-sm">
//                           {project.status}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 flex-1 flex flex-col justify-between">
//                       <div>
//                         <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
//                           <MapPin className="w-4 h-4" />
//                           <span>{project.location}</span>
//                         </div>
//                         <h3 className="font-serif text-2xl font-medium text-foreground mb-1">
//                           {project.title}
//                         </h3>
//                         <p className="text-muted-foreground text-sm mb-4">{project.type}</p>
//                       </div>
//                       <div className="flex items-center justify-between pt-4 border-t border-border">
//                         <span className="font-semibold text-primary">{project.price}</span>
//                         <Button variant="minimal" size="sm" className="group-hover:text-primary">
//                           View Details
//                           <ArrowUpRight className="w-4 h-4 ml-1" />
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* Extra space at the end for smooth finish */}
//               <div className="w-96 flex-shrink-0" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;


// import { ArrowUpRight, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import villaImage from "@/assets/property-villa.jpg";
// import aerialImage from "@/assets/project-aerial.jpg";
// import interiorImage from "@/assets/interior-1.jpg";
// import { useHorizontalScroll } from "@/hooks/useHorizontalScroll"; // Make sure this hook exists

// const projects = [
//   {
//     image: villaImage,
//     title: "Residential",
//     location: "Sector 45, Gurugram",
//     type: "Luxury Apartments",
//     status: "Ready to Move",
//     price: "₹1.2 Cr onwards",
//   },
//   {
//     image: aerialImage,
//     title: "Industrial",
//     location: "Sohna Road, Gurugram",
//     type: "Integrated Township",
//     status: "Under Construction",
//     price: "₹85 Lac onwards",
//   },
//   {
//     image: interiorImage,
//     title: "Commercial",
//     location: "Cyber City, Gurugram",
//     type: "Commercial Complex",
//     status: "Pre-Launch",
//     price: "₹65 Lac onwards",
//   },
//   {
//     image: interiorImage,
//     title: "Agricultural",
//     location: "Cyber City, Gurugram",
//     type: "Commercial Complex",
//     status: "Pre-Launch",
//     price: "₹65 Lac onwards",
//   },
// ];

// const ProjectsSection = () => {
//   const scrollRef = useHorizontalScroll();

//   return (
//     <section id="projects" className="bg-cream py-32">
//       <div className="container-wide">
//         {/* Section Header - Same style as Services */}
//         <div className="text-center max-w-3xl mx-auto mb-24">
//           <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
//             Featured Projects
//           </span>
//           <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground mt-6 mb-8">
//             The Architecture of Well-being
//           </h2>
//           <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
//             Discover our curated selection of premium developments designed for modern living, work, and investment.
//           </p>
//           <div className="mt-10">
//             <Button variant="hero-outline" size="lg">
//               View All Projects
//               <ArrowUpRight className="w-5 h-5 ml-2" />
//             </Button>
//           </div>
//         </div>

//         {/* Pinned Full-Screen Horizontal Scroll Area */}
//         <div className="h-screen sticky top-0 overflow-hidden -mt-32">
//           <div
//             ref={scrollRef}
//             className="h-full flex items-center overflow-x-auto overflow-y-hidden px-8 scrollbar-none snap-x snap-mandatory"
//           >
//             <div className="flex gap-12">
//               {projects.map((project, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-96 group snap-start"
//                 >
//                   <div className="bg-card rounded-sm overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 h-[600px] flex flex-col">
//                     {/* Project Image */}
//                     <div className="relative aspect-[4/3] overflow-hidden">
//                       <img
//                         src={project.image || interiorImage}
//                         alt={project.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       />
//                       <div className="absolute top-4 left-4">
//                         <span className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-background/95 backdrop-blur-sm text-foreground rounded-sm">
//                           {project.status}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Project Details */}
//                     <div className="p-8 flex-1 flex flex-col justify-between">
//                       <div>
//                         <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
//                           <MapPin className="w-4 h-4" />
//                           <span>{project.location}</span>
//                         </div>
//                         <h3 className="font-serif text-3xl font-semibold text-foreground mb-2">
//                           {project.title}
//                         </h3>
//                         <p className="text-muted-foreground text-base mb-6">
//                           {project.type}
//                         </p>
//                       </div>

//                       <div className="flex items-center justify-between pt-6 border-t border-border">
//                         <span className="font-bold text-2xl text-primary">
//                           {project.price}
//                         </span>
//                         <Button variant="minimal" size="sm" className="group-hover:text-primary transition-colors">
//                           View Details
//                           <ArrowUpRight className="w-4 h-4 ml-2" />
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* Extra padding at the end so last card is fully viewable */}
//               <div className="w-96 flex-shrink-0" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
// import { useEffect, useRef } from "react";
// import { ArrowUpRight, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import villaImage from "@/assets/property-villa.jpg";
// import aerialImage from "@/assets/project-aerial.jpg";
// import interiorImage from "@/assets/interior-1.jpg";

// const projects = [
//   {
//     image: villaImage,
//     title: "Residential",
//     location: "Sector 45, Gurugram",
//     type: "Luxury Apartments",
//     status: "Ready to Move",
//     price: "₹1.2 Cr onwards",
//   },
//   {
//     image: aerialImage,
//     title: "Industrial",
//     location: "Sohna Road, Gurugram",
//     type: "Integrated Township",
//     status: "Under Construction",
//     price: "₹85 Lac onwards",
//   },
//   {
//     image: interiorImage,
//     title: "Commercial",
//     location: "Cyber City, Gurugram",
//     type: "Commercial Complex",
//     status: "Pre-Launch",
//     price: "₹65 Lac onwards",
//   },
//   {
//     image: interiorImage,
//     title: "Agricultural",
//     location: "Farukhnagar, Gurugram",
//     type: "Farmland Plots",
//     status: "Pre-Launch",
//     price: "₹35 Lac onwards",
//   },
// ];

// const CARD_WIDTH = 420;
// const GAP = 64;

// const ProjectsSection = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const trackRef = useRef<HTMLDivElement | null>(null);
//   const progressRef = useRef(0);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const track = trackRef.current;
//     if (!section || !track) return;

//     let raf: number;
//     let locked = false;

//     const lock = () => {
//       if (!locked) {
//         document.body.style.overflow = "hidden";
//         locked = true;
//       }
//     };

//     const unlock = () => {
//       if (locked) {
//         document.body.style.overflow = "";
//         locked = false;
//       }
//     };

//     const onWheel = (e: WheelEvent) => {
//       if (!locked) return;
//       e.preventDefault();
//       progressRef.current += e.deltaY * 0.0008;
//     };

//     window.addEventListener("wheel", onWheel, { passive: false });

//     const animate = () => {
//       const rect = section.getBoundingClientRect();
//       const vh = window.innerHeight;

//       // lock only when section is fully in view
//       if (rect.top <= 0 && rect.bottom >= vh) {
//         lock();
//       } else {
//         unlock();
//       }

//       const totalWidth = projects.length * (CARD_WIDTH + GAP);
//       const viewportCenter = window.innerWidth / 2 - CARD_WIDTH / 2;
//       const maxTranslate = totalWidth - window.innerWidth + viewportCenter;

//       progressRef.current = Math.max(0, Math.min(1, progressRef.current));
//       const x = -progressRef.current * maxTranslate + viewportCenter;

//       track.style.transform = `translate3d(${x}px, 0, 0)`;

//       // unlock only after last card is centered
//       if (progressRef.current >= 1) {
//         unlock();
//       }

//       raf = requestAnimationFrame(animate);
//     };

//     raf = requestAnimationFrame(animate);

//     return () => {
//       cancelAnimationFrame(raf);
//       unlock();
//       window.removeEventListener("wheel", onWheel);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="projects"
//       className="relative bg-cream min-h-[220vh] overflow-hidden"
//     >
//       {/* Header */}
//       <div className="container-wide pt-40 pb-20 text-center">
//         <span className="text-sm uppercase tracking-[0.25em] text-primary font-medium">
//           Featured Projects
//         </span>
//         <h2 className="font-serif text-5xl md:text-6xl font-medium mt-6 mb-6">
//           A Curated Journey of Spaces
//         </h2>
//         <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
//           Scroll slowly. Each project arrives at the center — one at a time.
//         </p>
//       </div>

//       {/* Sticky viewport */}
//       <div className="sticky top-0 h-screen flex items-center justify-center">
//         <div
//           ref={trackRef}
//           className="flex gap-16 will-change-transform"
//         >
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="w-[420px] shrink-0 bg-card rounded-2xl shadow-soft transition-all duration-500"
//             >
//               {/* Image */}
//               <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="h-full w-full object-cover"
//                 />
//                 <span className="absolute top-5 left-5 rounded-full bg-background/90 px-4 py-1 text-xs font-semibold backdrop-blur">
//                   {project.status}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="p-8 flex flex-col justify-between h-[280px]">
//                 <div>
//                   <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
//                     <MapPin className="h-4 w-4" />
//                     {project.location}
//                   </div>
//                   <h3 className="font-serif text-2xl font-semibold mb-1">
//                     {project.title}
//                   </h3>
//                   <p className="text-muted-foreground mb-6">
//                     {project.type}
//                   </p>
//                 </div>

//                 <div className="flex items-center justify-between border-t pt-5">
//                   <span className="text-lg font-bold text-primary">
//                     {project.price}
//                   </span>
//                   <Button variant="minimal" size="sm">
//                     View Details
//                     <ArrowUpRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;



// import { useEffect, useRef } from "react";
// import { ArrowUpRight, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";

// import villaImage from "@/assets/property-villa.jpg";
// import aerialImage from "@/assets/project-aerial.jpg";
// import interiorImage from "@/assets/interior-1.jpg";

// const projects = [
//   {
//     image: villaImage,
//     title: "Residential",
//     location: "Sector 45, Gurugram",
//     type: "Luxury Apartments",
//     status: "Ready to Move",
//     price: "₹1.2 Cr onwards",
//   },
//   {
//     image: aerialImage,
//     title: "Industrial",
//     location: "Sohna Road, Gurugram",
//     type: "Integrated Township",
//     status: "Under Construction",
//     price: "₹85 Lac onwards",
//   },
//   {
//     image: interiorImage,
//     title: "Commercial",
//     location: "Cyber City, Gurugram",
//     type: "Commercial Complex",
//     status: "Pre-Launch",
//     price: "₹65 Lac onwards",
//   },
//   {
//     image: interiorImage,
//     title: "Agricultural",
//     location: "Farukhnagar, Gurugram",
//     type: "Farmland Plots",
//     status: "Pre-Launch",
//     price: "₹35 Lac onwards",
//   },
// ];

// export default function ProjectsSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const trackRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const onScroll = () => {
//       if (!sectionRef.current || !trackRef.current) return;

//       const section = sectionRef.current;
//       const rect = section.getBoundingClientRect();

//       const scrollStart = window.innerHeight;
//       const scrollEnd = section.offsetHeight - window.innerHeight;

//       const scrolled =
//         Math.min(Math.max(scrollStart - rect.top, 0), scrollEnd);

//       const progress = scrolled / scrollEnd;

//       const cardWidth = 384;
//       const gap = 48;
//       const totalWidth =
//         projects.length * (cardWidth + gap);

//       const maxTranslate =
//         totalWidth - window.innerWidth + cardWidth;

//       const x = -progress * maxTranslate;

//       trackRef.current.style.transform = `translate3d(${x}px,0,0)`;
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-cream"
//       style={{ height: "300vh" }} // ⬅️ SCROLL SPACE
//     >
//       {/* Sticky viewport */}
//       <div className="sticky top-0 h-screen flex items-center overflow-hidden">
//         <div
//           ref={trackRef}
//           className="flex gap-12 px-24 will-change-transform transition-transform duration-200 ease-out"
//         >
//           {projects.map((p, i) => (
//             <div
//               key={i}
//               className="w-96 flex-shrink-0 bg-card rounded-md shadow-soft overflow-hidden"
//             >
//               <div className="relative aspect-[4/3]">
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <span className="absolute top-4 left-4 bg-background/90 px-3 py-1 text-xs rounded-sm">
//                   {p.status}
//                 </span>
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
//                   <MapPin className="w-4 h-4" />
//                   {p.location}
//                 </div>
//                 <h3 className="font-serif text-xl mb-1">
//                   {p.title}
//                 </h3>
//                 <p className="text-muted-foreground mb-4">
//                   {p.type}
//                 </p>

//                 <div className="flex justify-between items-center border-t pt-4">
//                   <span className="font-semibold text-primary">
//                     {p.price}
//                   </span>
//                   <Button variant="minimal" size="sm">
//                     View Details
//                     <ArrowUpRight className="ml-1 w-4 h-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectInquiryModal from "./ProjectInquiryModal";

import villaImage from "@/assets/property-villa.jpg";
import aerialImage from "@/assets/project-aerial.jpg";
import interiorImage from "@/assets/interior-1.jpg";
import agri from "@/assets/Agricultural.jpeg";
import luxury from "@/assets/luxury.png";

const projects = [
  {
    image: villaImage,
    title: "Residential",
    // location: "Sector 45, Gurugram",
    type: "Luxury Apartments, Pre-Leased Assets & Growth Plots",
    status: "Early-Mover Advantage",
    // price: "Strong Capital Appreciation",
  },
  {
    image: aerialImage,
    title: "Industrial",
    // location: "Sohna Road, Gurugram",
    type: "Integrated Township, Grade-A Warehousing & Manufacturing Hub",
    status: "Under Construction",
    // price: "High-ROI Investment Opportunity",
  },
  {
    image: interiorImage,
    title: "Commercial",
    // location: "Cyber City, Gurugram",
    type: "Smart Office Spaces & Retail Boulevard",
    status: "Limited Inventory Available",
    // price: "₹Assured Lease Returns",
  },
  {
    image: agri,
    title: "Agricultural",
    // location: "Farukhnagar, Gurugram",
    type: "Fertile Farmland & Weekend Retreat Plots",
    status: "Secure Title & Ready Possession",
    // price: "Affordable Land Investment",
  },
  {
    image: luxury,
    title: "Luxury",
    // location: "Elite Urban Enclave",
    type: "Ultra-Luxury Residences & Signature Spaces",
    status: "Pre-Launch",
    // price: "Price on Request",
  },
];
export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const START_OFFSET = -500;
      const END_OFFSET = 0;

      if (!sectionRef.current || !trackRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const scrollable = section.offsetHeight - viewportH;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      const progress = scrolled / scrollable;

      const cardWidth = 384;
      const gap = 48;
      const totalCards = projects.length;

      const trackWidth =
        totalCards * cardWidth + (totalCards - 1) * gap;

      const viewportCenter = window.innerWidth / 2;
      const firstCardCenter = cardWidth / 2;
      const lastCardCenter = trackWidth - cardWidth / 2;

      const minTranslate =
        viewportCenter - firstCardCenter + START_OFFSET;

      const maxTranslate =
        viewportCenter - lastCardCenter + END_OFFSET;

      const x =
        minTranslate +
        (maxTranslate - minTranslate) * progress;

      trackRef.current.style.transform = `translate3d(${x}px,0,0)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
  <section
    ref={sectionRef}
    className="relative bg-cream"
    style={{ height: "380vh" }} // controls scroll speed
  >
    {/* 🔹 STATIC HEADER CONTAINER (NO OVERLAP EVER) */}
    <div className="relative z-10 pt-10 pb-0 text-center">
      <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
        Domains We Serve
      </span>
      <h2 className="font-serif text-4xl md:text-5xl font-medium mt-4">
        Our Deal Expertise
      </h2>
    </div>

    {/* 🔹 STICKY SCROLLING CARDS */}
    <div className="sticky top-0 h-screen flex items-center overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-12 px-0 will-change-transform"
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="w-96 flex-shrink-0 bg-card rounded-md shadow-soft overflow-hidden"
          >
            <div className="relative aspect-[4/3]">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-background/90 px-3 py-1 text-xs rounded-sm">
                {p.status}
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                {p.location}
              </div>
              <h3 className="font-serif text-xl mb-1">
                {p.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {p.type}
              </p>

              <div className="flex justify-between items-center border-t pt-4">
                <span className="font-semibold text-primary">
                  {p.price}
                </span>
                <Button
                  variant="minimal"
                  size="sm"
                  onClick={() => {
                    setSelectedProject(p);
                    setOpen(true);
                  }}
                >
                  Connect With US
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </Button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <ProjectInquiryModal
      open={open}
      onOpenChange={setOpen}
      project={selectedProject}
    />

  </section>
);


  // return (
  //   <section
  //     ref={sectionRef}
  //     className="relative bg-cream"
  //     style={{ height: "320vh" }} // ⬅️ scroll speed
  //   >
  //     {/* 🔹 TOP CENTER HEADING */}
  //     <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 text-center">
  //       <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
  //         Domains We Serve
  //       </span>
  //       <h2 className="font-serif text-4xl md:text-5xl font-medium mt-4">
  //         Our Deal Expertise


  //       </h2>
  //     </div>

  //     {/* 🔹 STICKY SCROLL AREA */}
  //     <div className="sticky top-0 h-screen flex items-center overflow-hidden">
  //       <div
  //         ref={trackRef}
  //         className="flex gap-12 px-0 will-change-transform"
  //       >
  //         {projects.map((p, i) => (
  //           <div
  //             key={i}
  //             className="w-96 flex-shrink-0 bg-card rounded-md shadow-soft overflow-hidden"
  //           >
  //             <div className="relative aspect-[4/3]">
  //               <img
  //                 src={p.image}
  //                 alt={p.title}
  //                 className="w-full h-full object-cover"
  //               />
  //               <span className="absolute top-4 left-4 bg-background/90 px-3 py-1 text-xs rounded-sm">
  //                 {p.status}
  //               </span>
  //             </div>

  //             <div className="p-6">
  //               <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
  //                 <MapPin className="w-4 h-4" />
  //                 {p.location}
  //               </div>
  //               <h3 className="font-serif text-xl mb-1">
  //                 {p.title}
  //               </h3>
  //               <p className="text-muted-foreground mb-4">
  //                 {p.type}
  //               </p>

  //               <div className="flex justify-between items-center border-t pt-4">
  //                 <span className="font-semibold text-primary">
  //                   {p.price}
  //                 </span>
  //                 <Button variant="minimal" size="sm">
  //                   View Details
  //                   <ArrowUpRight className="ml-1 w-4 h-4" />
  //                 </Button>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}
