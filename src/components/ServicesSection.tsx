// import { Building, Home, Key, Landmark, PenTool, Shield } from "lucide-react";

// const services = [
//   {
//     icon: Building,
//     title: "Sale & Purchase",
//     description: "Professional consultancy for property sales and purchases, including valuation guidance, negotiation, and complete transaction closure.",
//   },
//   {
//     icon: Landmark,
//     title: "Rent & Lease",
//     description: "Handling residential and commercial rental deals with clear terms, documentation coordination, and smooth handover.",
//   },
//   {
//     icon: Home,
//     title: "Joint Venture",
//     description: "Structuring and negotiating joint ventures between landowners and developers to ensure fair terms, clarity, and long-term value.",
//   },
//   {
//     icon: PenTool,
//     title: "Property Exchange",
//     description: "Facilitating property-to-property exchange transactions with proper valuation, negotiation, and legal coordination.",
//   },
//   {
//     icon: Key,
//     title: "Negotiation & Deal Closure",
//     description: "Focused handling of pricing discussions, offer structuring, and final closure to protect client interests.",
//   },
//   {
//     icon: Shield,
//     title: "Buyer & Seller Representation",
//     description: "Representing buyers, sellers, landlords, and investors with transparency and strong market insight.",
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="section-padding bg-background">
//       <div className="container-wide">
//         {/* Section Header */}
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Our Services</span>
//           <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4 mb-6">
//             Strategic Property Transactions & Deal Execution
//           </h2>
//           <p className="text-muted-foreground text-lg leading-relaxed">
//             From concept to completion, we offer comprehensive real estate solutions 
//             tailored to meet your unique requirements.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group p-8 bg-card rounded-sm border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
//             >
//               <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
//                 <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
//               </div>
//               <h3 className="font-serif text-xl font-medium text-foreground mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import { useRef, useState } from "react";
import {
  Building,
  Home,
  Key,
  Landmark,
  PenTool,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


const services = [
  {
    icon: Building,
    title: "Sale & Purchase",
    description: "Professional consultancy for property sales and purchases with end-to-end support.",
    features: [
      "Accurate property valuation",
      "Expert negotiation strategies",
      "Seamless transaction closure",
      "Legal & documentation coordination",
    ],
  },
  {
    icon: Landmark,
    title: "Rent & Lease",
    description: "Comprehensive rental and leasing solutions for residential and commercial spaces.",
    features: [
      "Clear lease agreements",
      "Tenant screening & placement",
      "Rent collection management",
      "Property handover support",
    ],
  },
  {
    icon: Home,
    title: "Joint Venture",
    description: "Strategic partnerships between landowners and developers for maximum value.",
    features: [
      "Fair profit-sharing models",
      "Risk assessment & mitigation",
      "Project planning guidance",
      "Long-term wealth creation",
    ],
  },
  {
    icon: PenTool,
    title: "Property Exchange",
    description: "Smooth property-to-property swaps with balanced valuation and legal compliance.",
    features: [
      "Comparative market analysis",
      "Exchange deal structuring",
      "Tax implication advisory",
      "Title transfer coordination",
    ],
  },
  {
    icon: Key,
    title: "Negotiation & Deal Closure",
    description: "Expert handling of offers, counter-offers, and final agreements in your favor.",
    features: [
      "Pricing strategy & positioning",
      "Contingency management",
      "Timeline optimization",
      "Client interest protection",
    ],
  },
  {
    icon: Shield,
    title: "Buyer & Seller Representation",
    description: "Dedicated advocacy for buyers, sellers, landlords, and investors.",
    features: [
      "Market insight & trends",
      "Exclusive off-market deals",
      "Portfolio diversification advice",
      "Full confidentiality assured",
    ],
  },
];
const CARD_WIDTH = 384;
const CARD_GAP = 64;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

const ServicesSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const STEP = 400; // 🔧 how much one arrow click moves

  // const pauseAnimation = () => {
  //   if (marqueeRef.current) {
  //     marqueeRef.current.style.animationPlayState = "paused";
  //   }
  // };

  // const resumeAnimation = () => {
  //   if (marqueeRef.current) {
  //     marqueeRef.current.style.animationPlayState = "running";
  //   }
  // };

  // const moveLeft = () => {
  //   pauseAnimation();
  //   setOffset((prev) => prev + STEP);
  // };

  // const moveRight = () => {
  //   pauseAnimation();
  //   setOffset((prev) => prev - STEP);
  // };


  const pauseMarquee = () => {
    if (!marqueeRef.current) return;
    marqueeRef.current.style.animationPlayState = "paused";
    setIsPaused(true);
  };

  const moveToPreviousCard = () => {
    if (!marqueeRef.current) return;

    pauseMarquee();

    setOffset((prev) => {
      const target = prev + CARD_STEP;
      return target;
    });
  };

  const moveToNextCard = () => {
    if (!marqueeRef.current) return;

    pauseMarquee();

    setOffset((prev) => {
      const target = prev - CARD_STEP;
      return target;
    });
  };


  return (
    <section id="services" className="section-padding bg-background py-32">
      <div className="container-wide">
        {/* Header (unchanged) */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Our Services
          </span>
          <h2 className="font-serif text-5xl md:text-6xl mt-6 mb-8">
            Strategic Property Transactions & Deal Execution
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            From concept to completion, we deliver tailored real estate solutions with expertise.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* LEFT ARROW */}
          <button
            // onClick={moveLeft}
            onClick={moveToPreviousCard}
            // onMouseLeave={resumeAnimation}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background border rounded-full shadow flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT ARROW */}
          <button
            // onClick={moveRight}
            onClick={moveToNextCard}
            // onMouseLeave={resumeAnimation}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background border rounded-full shadow flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronRight />
          </button>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* TRACK */}
          <div
            ref={marqueeRef}
            className={`flex ${
              isPaused
                ? "transition-transform duration-700 ease-in-out"
                : "animate-marquee"
            }`}
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {/* ORIGINAL + DUPLICATE — UNCHANGED */}
            {[...services, ...services].map((service, index) => (
              // <div
              //   key={index}
              //   className="mx-8 flex-shrink-0 w-96 group"
              // >
              //   <div className="p-12 bg-card border h-[800px] flex flex-col">
              //     <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mb-10">
              //       <service.icon className="w-12 h-12 text-primary" />
              //     </div>

              //     <h3 className="font-serif text-3xl mb-6">
              //       {service.title}
              //     </h3>

              //     <p className="text-muted-foreground mb-6 leading-relaxed">
              //       {service.description}
              //     </p>

              //     <ul className="space-y-4 mt-auto">
              //       {service.features.map((f, i) => (
              //         <li key={i} className="flex gap-3">
              //           <span className="text-primary">•</span>
              //           <span>{f}</span>
              //         </li>
              //       ))}
              //     </ul>
              //   </div>
              // </div>
              <div
                key={index}
                className="mx-8 flex-shrink-0 w-96 group"
              >
                <div className="relative h-[820px] bg-card border border-border rounded-sm overflow-hidden shadow-soft hover:shadow-large transition-all duration-700 flex flex-col">

                  {/* Accent strip */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-primary/10" />

                  {/* Icon */}
                  <div className="p-10 pb-0">
                    <div className="w-20 h-20 rounded-sm bg-primary/10 flex items-center justify-center mb-10 group-hover:bg-primary transition-colors duration-500">
                      <service.icon className="w-12 h-12 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-3xl font-medium text-foreground mb-4 leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-base leading-relaxed mb-10">
                      {service.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="mx-10 h-px bg-border/60" />

                  {/* Features */}
                  <div className="p-10 pt-8 flex-1">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-6">
                      What You Get
                    </span>

                    <ul className="space-y-5">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-foreground/80 text-base leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom CTA */}
                  <div className="px-10 py-8 border-t border-border bg-background/50">
                    <span className="text-sm font-medium text-primary tracking-wide">
                      Explore this service →
                    </span>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


// working
// import { Building, Home, Key, Landmark, PenTool, Shield } from "lucide-react";

// const services = [
//   {
//     icon: Building,
//     title: "Sale & Purchase",
//     description: "Professional consultancy for property sales and purchases with end-to-end support.",
//     features: [
//       "Accurate property valuation",
//       "Expert negotiation strategies",
//       "Seamless transaction closure",
//       "Legal & documentation coordination",
//     ],
//   },
//   {
//     icon: Landmark,
//     title: "Rent & Lease",
//     description: "Comprehensive rental and leasing solutions for residential and commercial spaces.",
//     features: [
//       "Clear lease agreements",
//       "Tenant screening & placement",
//       "Rent collection management",
//       "Property handover support",
//     ],
//   },
//   {
//     icon: Home,
//     title: "Joint Venture",
//     description: "Strategic partnerships between landowners and developers for maximum value.",
//     features: [
//       "Fair profit-sharing models",
//       "Risk assessment & mitigation",
//       "Project planning guidance",
//       "Long-term wealth creation",
//     ],
//   },
//   {
//     icon: PenTool,
//     title: "Property Exchange",
//     description: "Smooth property-to-property swaps with balanced valuation and legal compliance.",
//     features: [
//       "Comparative market analysis",
//       "Exchange deal structuring",
//       "Tax implication advisory",
//       "Title transfer coordination",
//     ],
//   },
//   {
//     icon: Key,
//     title: "Negotiation & Deal Closure",
//     description: "Expert handling of offers, counter-offers, and final agreements in your favor.",
//     features: [
//       "Pricing strategy & positioning",
//       "Contingency management",
//       "Timeline optimization",
//       "Client interest protection",
//     ],
//   },
//   {
//     icon: Shield,
//     title: "Buyer & Seller Representation",
//     description: "Dedicated advocacy for buyers, sellers, landlords, and investors.",
//     features: [
//       "Market insight & trends",
//       "Exclusive off-market deals",
//       "Portfolio diversification advice",
//       "Full confidentiality assured",
//     ],
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="section-padding bg-background py-32">
//       <div className="container-wide">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-24">
//           <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
//             Our Services
//           </span>
//           <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground mt-6 mb-8">
//             Strategic Property Transactions & Deal Execution
//           </h2>
//           <p className="text-muted-foreground text-xl leading-relaxed">
//             From concept to completion, we deliver tailored real estate solutions with expertise, transparency, and unwavering commitment to your success.
//           </p>
//         </div>

//         {/* Infinite Horizontal Marquee */}
//         <div className="relative overflow-hidden">
//           {/* Fade edges for polish */}
//           <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
//           <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

//           <div className="flex animate-marquee whitespace">
//             {/* First set */}
//             {services.map((service, index) => (
//               <div
//                 key={`first-${index}`}
//                 className="mx-8 flex-shrink-0 w-96 group" // Increased spacing
//               >
//                 <div className="p-12 bg-card rounded-sm border border-border hover:border-primary/40 hover:shadow-large transition-all duration-500 h-[800px] flex flex-col justify-start items-start">
//                   {/* Icon */}
//                   <div className="w-20 h-20 rounded-sm bg-primary/10 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
//                     <service.icon className="w-12 h-12 text-primary group-hover:text-primary-foreground transition-colors" />
//                   </div>

//                   {/* Title */}
//                   <h3 className="font-serif text-3xl font-semibold text-foreground mb-6">
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-muted-foreground text-base leading-relaxed mb-6 line-clamp-none break-words">
//                     {service.description}
//                   </p>

//                   {/* Feature List - Makes it richer */}
//                   <ul className="space-y-4 flex-1">
//                     {service.features.map((feature, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <span className="text-primary mt-1.5">•</span>
//                         <span className="text-foreground/80 text-base leading-relaxed">
//                           {feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}

//             {/* Duplicated set for seamless loop */}
//             {services.map((service, index) => (
//               <div
//                 key={`duplicate-${index}`}
//                 className="mx-8 flex-shrink-0 w-96 group"
//               >
//                 <div className="p-12 bg-card rounded-sm border border-border hover:border-primary/40 hover:shadow-large transition-all duration-500 h-[800px] flex flex-col justify-start items-start">
//                   <div className="w-20 h-20 rounded-sm bg-primary/10 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
//                     <service.icon className="w-12 h-12 text-primary group-hover:text-primary-foreground transition-colors" />
//                   </div>

//                   <h3 className="font-serif text-3xl font-semibold text-foreground mb-6">
//                     {service.title}
//                   </h3>

//                   <p className="text-muted-foreground text-lg leading-relaxed mb-10">
//                     {service.description}
//                   </p>

//                   <ul className="space-y-4 flex-1">
//                     {service.features.map((feature, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <span className="text-primary mt-1.5">•</span>
//                         <span className="text-foreground/80 text-base leading-relaxed">
//                           {feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


// import { Building, Home, Key, Landmark, PenTool, Shield } from "lucide-react";

// const services = [
//   {
//     icon: Building,
//     title: "Sale & Purchase",
//     description: "Professional consultancy for property sales and purchases with end-to-end support.",
//     features: [
//       "Accurate property valuation",
//       "Expert negotiation strategies",
//       "Seamless transaction closure",
//       "Legal & documentation coordination",
//     ],
//   },
//   {
//     icon: Landmark,
//     title: "Rent & Lease",
//     description: "Comprehensive rental and leasing solutions for residential and commercial spaces.",
//     features: [
//       "Clear lease agreements",
//       "Tenant screening & placement",
//       "Rent collection management",
//       "Property handover support",
//     ],
//   },
//   {
//     icon: Home,
//     title: "Joint Venture",
//     description: "Strategic partnerships between landowners and developers for maximum value.",
//     features: [
//       "Fair profit-sharing models",
//       "Risk assessment & mitigation",
//       "Project planning guidance",
//       "Long-term wealth creation",
//     ],
//   },
//   {
//     icon: PenTool,
//     title: "Property Exchange",
//     description: "Smooth property-to-property swaps with balanced valuation and legal compliance.",
//     features: [
//       "Comparative market analysis",
//       "Exchange deal structuring",
//       "Tax implication advisory",
//       "Title transfer coordination",
//     ],
//   },
//   {
//     icon: Key,
//     title: "Negotiation & Deal Closure",
//     description: "Expert handling of offers, counter-offers, and final agreements in your favor.",
//     features: [
//       "Pricing strategy & positioning",
//       "Contingency management",
//       "Timeline optimization",
//       "Client interest protection",
//     ],
//   },
//   {
//     icon: Shield,
//     title: "Buyer & Seller Representation",
//     description: "Dedicated advocacy for buyers, sellers, landlords, and investors.",
//     features: [
//       "Market insight & trends",
//       "Exclusive off-market deals",
//       "Portfolio diversification advice",
//       "Full confidentiality assured",
//     ],
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="section-padding bg-background py-32">
//       <div className="container-wide">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-24">
//           <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
//             Our Services
//           </span>
//           <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground mt-6 mb-8">
//             Strategic Property Transactions & Deal Execution
//           </h2>
//           <p className="text-muted-foreground text-xl leading-relaxed">
//             From concept to completion, we deliver tailored real estate solutions with expertise, transparency, and unwavering commitment to your success.
//           </p>
//         </div>

//         {/* Infinite Horizontal Marquee */}
//         <div className="relative overflow-hidden">
//           {/* Fade edges */}
//           <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
//           <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

//           <div className="flex animate-marquee whitespace-nowrap">
//             {/* First set of tiles */}
//             {services.map((service, index) => (
//               <div
//                 key={`first-${index}`}
//                 className="mx-8 flex-shrink-0 w-96 group"
//               >
//                 <div className="p-8 bg-card rounded-sm border border-border hover:border-primary/40 hover:shadow-large transition-all duration-500 h-[600px] flex flex-col overflow-hidden">
//                   {/* Icon */}
//                   <div className="w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 flex-shrink-0">
//                     <service.icon className="w-9 h-9 text-primary group-hover:text-primary-foreground transition-colors" />
//                   </div>

//                   {/* Title */}
//                   <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 flex-shrink-0">
//                     {service.title}
//                   </h3>

//                   {/* Description - Wrapped & clamped */}
//                   <p className="text-muted-foreground text-base leading-snug mb-6 line-clamp-3 break-words flex-shrink-0">
//                     {service.description}
//                   </p>

//                   {/* Feature List - Takes remaining space, scrolls internally if ever needed */}
//                   <ul className="space-y-3 flex-1 overflow-y-auto">
//                     {service.features.map((feature, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <span className="text-primary mt-1 flex-shrink-0">•</span>
//                         <span className="text-foreground/80 text-sm leading-snug break-words">
//                           {feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}

//             {/* Duplicated set for seamless loop */}
//             {services.map((service, index) => (
//               <div
//                 key={`duplicate-${index}`}
//                 className="mx-8 flex-shrink-0 w-96 group"
//               >
//                 <div className="p-8 bg-card rounded-sm border border-border hover:border-primary/40 hover:shadow-large transition-all duration-500 h-[600px] flex flex-col overflow-hidden">
//                   <div className="w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 flex-shrink-0">
//                     <service.icon className="w-9 h-9 text-primary group-hover:text-primary-foreground transition-colors" />
//                   </div>

//                   <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 flex-shrink-0">
//                     {service.title}
//                   </h3>

//                   <p className="text-muted-foreground text-base leading-snug mb-6 line-clamp-3 break-words flex-shrink-0">
//                     {service.description}
//                   </p>

//                   <ul className="space-y-3 flex-1 overflow-y-auto">
//                     {service.features.map((feature, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <span className="text-primary mt-1 flex-shrink-0">•</span>
//                         <span className="text-foreground/80 text-sm leading-snug break-words">
//                           {feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// import { Building, Home, Key, Landmark, PenTool, Shield } from "lucide-react";
// import { useHorizontalScroll } from "@/hooks/useHorizontalScroll"; // Adjust path if needed


// const services = [
//   {
//     icon: Building,
//     title: "Sale & Purchase",
//     description: "Professional consultancy for property sales and purchases with end-to-end support.",
//     features: [
//       "Accurate property valuation",
//       "Expert negotiation strategies",
//       "Seamless transaction closure",
//       "Legal & documentation coordination",
//     ],
//   },
//   {
//     icon: Landmark,
//     title: "Rent & Lease",
//     description: "Comprehensive rental and leasing solutions for residential and commercial spaces.",
//     features: [
//       "Clear lease agreements",
//       "Tenant screening & placement",
//       "Rent collection management",
//       "Property handover support",
//     ],
//   },
//   {
//     icon: Home,
//     title: "Joint Venture",
//     description: "Strategic partnerships between landowners and developers for maximum value.",
//     features: [
//       "Fair profit-sharing models",
//       "Risk assessment & mitigation",
//       "Project planning guidance",
//       "Long-term wealth creation",
//     ],
//   },
//   {
//     icon: PenTool,
//     title: "Property Exchange",
//     description: "Smooth property-to-property swaps with balanced valuation and legal compliance.",
//     features: [
//       "Comparative market analysis",
//       "Exchange deal structuring",
//       "Tax implication advisory",
//       "Title transfer coordination",
//     ],
//   },
//   {
//     icon: Key,
//     title: "Negotiation & Deal Closure",
//     description: "Expert handling of offers, counter-offers, and final agreements in your favor.",
//     features: [
//       "Pricing strategy & positioning",
//       "Contingency management",
//       "Timeline optimization",
//       "Client interest protection",
//     ],
//   },
//   {
//     icon: Shield,
//     title: "Buyer & Seller Representation",
//     description: "Dedicated advocacy for buyers, sellers, landlords, and investors.",
//     features: [
//       "Market insight & trends",
//       "Exclusive off-market deals",
//       "Portfolio diversification advice",
//       "Full confidentiality assured",
//     ],
//   },
// ];

// const ServicesSection = () => {
//   const scrollRef = useHorizontalScroll();

//   return (
//     <section id="services" className="bg-background py-32">
//       <div className="container-wide">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-24">
//           <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
//             Our Services
//           </span>
//           <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground mt-6 mb-8">
//             Strategic Property Transactions & Deal Execution
//           </h2>
//           <p className="text-muted-foreground text-xl leading-relaxed">
//             From concept to completion, we deliver tailored real estate solutions with expertise, transparency, and unwavering commitment to your success.
//           </p>
//         </div>

//         {/* Pinned Horizontal Scroll Area */}
//         <div className="h-screen sticky top-0 overflow-hidden"> {/* Locks vertical scroll */}
//           <div
//             ref={scrollRef}
//             className="h-full flex items-center overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-background"
//           >
//             {/* Tiles Row */}
//             <div className="flex gap-8 px-8">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-96 group"
//                 >
//                   <div className="p-8 bg-card rounded-sm border border-border hover:border-primary/40 hover:shadow-large transition-all duration-500 h-[600px] flex flex-col overflow-hidden">
//                     {/* Icon */}
//                     <div className="w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 flex-shrink-0">
//                       <service.icon className="w-9 h-9 text-primary group-hover:text-primary-foreground transition-colors" />
//                     </div>

//                     {/* Title */}
//                     <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 flex-shrink-0">
//                       {service.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-muted-foreground text-base leading-snug mb-6 line-clamp-3 break-words flex-shrink-0">
//                       {service.description}
//                     </p>

//                     {/* Feature List */}
//                     <ul className="space-y-3 flex-1 overflow-y-auto">
//                       {service.features.map((feature, i) => (
//                         <li key={i} className="flex items-start gap-3">
//                           <span className="text-primary mt-1 flex-shrink-0">•</span>
//                           <span className="text-foreground/80 text-sm leading-snug break-words">
//                             {feature}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//               {/* Optional extra space at end for smooth finish */}
//               <div className="w-96 flex-shrink-0" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;