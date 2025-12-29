// import { Button } from "@/components/ui/button";
// import { ArrowRight, Award, Building2, Users } from "lucide-react";
// import heroImage from "@/assets/hero-building.jpg";

// const HeroSection = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center pt-20">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={heroImage}
//           alt="Luxurious modern residential building"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/20 to-transparent" />
//       </div>

//       <div className="relative z-10 container-wide section-padding">
//         <div className="max-w-2xl">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
//             <Award className="w-4 h-4" />
//             <span>Trusted Real Estate Consultancy Since 2006</span>
//           </div>

//           {/* Headline */}
//           <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
//             Expert consultancy for{" "}
//             <span className="italic text-primary">buying, selling & strategic property </span>{" "}
//             investments
//           </h1>

//           {/* Subheadline */}
//           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
//             Bhawana Enterprises delivers premium residential and commercial properties 
//             that blend architectural excellence with sustainable living. Your dream 
//             space awaits.
//           </p>

//           {/* CTAs */}
//           <div className="flex flex-wrap gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
//             <Button variant="hero" size="xl">
//               Book a Consultation
//               <ArrowRight className="w-5 h-5" />
//             </Button>
//             <Button variant="hero-outline" size="xl">
//               Schedule a Visit
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: "0.4s" }}>
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Building2 className="w-5 h-5 text-primary" />
//                 <span className="font-serif text-3xl md:text-4xl font-semibold text-foreground">150+</span>
//               </div>
//               <p className="text-sm text-muted-foreground">Projects Delivered</p>
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Users className="w-5 h-5 text-primary" />
//                 <span className="font-serif text-3xl md:text-4xl font-semibold text-foreground">2,500+</span>
//               </div>
//               <p className="text-sm text-muted-foreground">Happy Families</p>
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Award className="w-5 h-5 text-primary" />
//                 <span className="font-serif text-3xl md:text-4xl font-semibold text-foreground">28</span>
//               </div>
//               <p className="text-sm text-muted-foreground">Years of Trust</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
//         <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
//           <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import { Button } from "@/components/ui/button";
// import { ArrowRight, Award, Building2, Users } from "lucide-react";
// import heroImage from "@/assets/hero-building.jpg";

// const HeroSection = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center pt-20">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={heroImage}
//           alt="Luxurious modern residential building"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/20 to-transparent" />
//       </div>

//       <div className="relative z-10 container-wide section-padding w-full">
//         {/* CONTENT BLOCK */}
//         <div className="max-w-4xl ml-auto mr-8 text-left">
          
//           {/* Badge + RERA */}
//           <div className="mb-8 animate-fade-up">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
//               <Award className="w-4 h-4" />
//               <span>Trusted Real Estate Consultancy Since 2006</span>
//             </div>

//             <p className="mt-2 text-sm text-muted-foreground">
//               RERA Number:{" "}
//               <span className="font-medium text-foreground">
//                 RAJ/A/2017/125
//               </span>
//             </p>
//           </div>

//           {/* Headline */}
//           <h1
//             className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-foreground mb-6 animate-fade-up"
//             style={{ animationDelay: "0.1s" }}
//           >
//             Expert consultancy for{" "}
//             <span className="italic text-primary">
//               buying, selling & strategic property
//             </span>{" "}
//             investments
//           </h1>

//           {/* Subheadline */}
//           <p
//             className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up max-w-3xl"
//             style={{ animationDelay: "0.2s" }}
//           >
//             Bhawana Enterprises delivers premium residential and commercial
//             properties that blend architectural excellence with sustainable
//             living. Your dream space awaits.
//           </p>

//           {/* CTAs */}
//           <div
//             className="flex flex-wrap gap-4 mb-16 animate-fade-up"
//             style={{ animationDelay: "0.3s" }}
//           >
//             <Button variant="hero" size="xl">
//               Book a Consultation
//               <ArrowRight className="w-5 h-5" />
//             </Button>
//             <Button variant="hero-outline" size="xl">
//               Schedule a Visit
//             </Button>
//           </div>

//           {/* Stats */}
//           <div
//             className="grid grid-cols-3 gap-8 pt-8 border-t border-border animate-fade-up max-w-3xl"
//             style={{ animationDelay: "0.4s" }}
//           >
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Building2 className="w-5 h-5 text-primary" />
//                 <span className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
//                   150+
//                 </span>
//               </div>
//               <p className="text-sm text-muted-foreground">
//                 Projects Delivered
//               </p>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Users className="w-5 h-5 text-primary" />
//                 <span className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
//                   2,500+
//                 </span>
//               </div>
//               <p className="text-sm text-muted-foreground">Happy Families</p>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Award className="w-5 h-5 text-primary" />
//                 <span className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
//                   28
//                 </span>
//               </div>
//               <p className="text-sm text-muted-foreground">Years of Trust</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
//         <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
//           <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// import { Button } from "@/components/ui/button";
// import { ArrowRight, Award, Building2, Users } from "lucide-react";
// import heroImage from "@/assets/hero-building.jpg";

// const HeroSection = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center pt-20">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={heroImage}
//           alt="Luxurious modern residential building"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/20 to-transparent" />
//       </div>

//       <div className="relative z-10 container-wide section-padding w-full">
//         {/* CONTENT BLOCK */}
//         <div className="max-w-4xl ml-auto mr-0 text-left -mt-20">
          
//           {/* Headline */}
//           <h1
//             className="font-serif text-5xl md:text-6xl lg:text-6xl font-medium leading-tight text-foreground mb-6 animate-fade-up"
//             style={{ animationDelay: "0.05s" }}
//           >
//             Expert consultancy for{" "}
//             <span className="italic text-primary">
//               buying, selling & strategic property
//             </span>{" "}
//             investments
//           </h1>

//           {/* Subheadline */}
//           <p
//             className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 animate-fade-up max-w-3xl"
//             style={{ animationDelay: "0.15s" }}
//           >
//             Bhawana Enterprises delivers premium residential and commercial
//             properties that blend architectural excellence with sustainable
//             living. Your dream space awaits.
//           </p>
//           <div className="flex justify-end mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
//             <p className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
//               RERA Number:{" "}
//               <span className="font-medium text-foreground/80">
//                 RAJ/A/2017/125
//               </span>
//             </p>
//           </div>


//           {/* CTAs */}
//           <div
//             className="flex flex-wrap gap-4 mb-16 animate-fade-up"
//             style={{ animationDelay: "0.25s" }}
//           >
//             <Button variant="hero" size="xl">
//               Book a Consultation
//               <ArrowRight className="w-5 h-5" />
//             </Button>
//             <Button variant="hero-outline" size="xl">
//               Schedule a Visit
//             </Button>
//           </div>

//           {/* Stats */}
//           <div
//             className="grid grid-cols-3 gap-8 pt-8 border-t border-border animate-fade-up max-w-3xl"
//             style={{ animationDelay: "0.35s" }}
//           >
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Building2 className="w-5 h-5 text-primary" />
//                 <span className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
//                   150+
//                 </span>
//               </div>
//               <p className="text-sm text-muted-foreground">
//                 Projects Delivered
//               </p>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Users className="w-5 h-5 text-primary" />
//                 <span className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
//                   2,500+
//                 </span>
//               </div>
//               <p className="text-sm text-muted-foreground">Happy Families</p>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Award className="w-5 h-5 text-primary" />
//                 <span className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
//                   20
//                 </span>
//               </div>
//               <p className="text-sm text-muted-foreground">Years of Trust</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
//         <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
//           <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Building2, Users } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxurious modern residential building"
          className="w-full h-full object-cover object-center"
        />
        {/* Sharper overlay (no blur) */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative z-10 container-wide section-padding w-full">
        <div className="max-w-4xl ml-auto text-left">

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-6xl font-medium leading-tight text-[#FFFFFF] mb-6">
            Expert consultancy for{" "}
            <span className="italic text-[#FFFFFF] drop-shadow-sm">
              buying, selling & strategic property
            </span>{" "}
            investments
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#C9A24D] drop-shadow-sm leading-relaxed mb-12 max-w-3xl">
            {/* Bhawana Enterprises delivers premium residential and commercial
            properties that blend architectural excellence with sustainable
            living. Your dream space awaits. */}

          </p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>


          {/* RERA */}
          <div className="flex justify-end mb-14">
            <p className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium backdrop-blur-sm">
              RERA Number:
              <span className="font-medium text-foreground/80">
                RAJ/A/2017/125
              </span>
            </p>
          </div>

          {/* CTA Buttons (Pushed Down) */}
          <div className="flex justify-end flex-wrap gap-5 mb-20">
            <Button variant="gold-outline" size="xl">
              Book a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="bronze-gold" size="xl">
              Schedule a Visit
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-border max-w-3xl">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="font-serif text-3xl text-[#B86B2A] font-semibold">
                  150+
                </span>
              </div>
              <p className="text-sm text-[#D1B88C]">
                Projects Delivered
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-serif text-3xl text-[#B86B2A] font-semibold">
                  2,500+
                </span>
              </div>
              <p className="text-sm text-[#C9A24D]">
                Happy Families
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-serif text-3xl text-[#B86B2A] font-semibold">
                  20
                </span>
              </div>
              <p className="text-sm text-[#B5961E]">
                Years of Trust
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// import { Button } from "@/components/ui/button";
// import { ArrowRight, Award, Building2, Users } from "lucide-react";
// import heroImage from "@/assets/hero-building.jpg";

// const HeroSection = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex pt-24">

//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={heroImage}
//           alt="Luxurious modern residential building"
//           className="w-full h-full object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-black/15" />
//       </div>

//       {/* Content Wrapper */}
//       <div className="relative z-10 container-wide section-padding w-full flex flex-1">
//         <div className="max-w-4xl ml-auto w-full flex flex-col">

//           {/* TOP CONTENT */}
//           <div>
//             <h1 className="font-serif text-5xl md:text-6xl font-medium leading-tight text-foreground mb-6">
//               Expert consultancy for{" "}
//               <span className="italic text-[#C9A24D] drop-shadow-sm">
//                 buying, selling & strategic property
//               </span>{" "}
//               investments
//             </h1>

//             {/* RERA */}
//             <div className="flex justify-end mt-10">
//               <p className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium backdrop-blur-sm">
//                 RERA Number:
//                 <span className="font-medium text-foreground/80">
//                   RAJ/A/2017/125
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* 👉 BOTTOM CONTENT (PUSHED DOWN) */}
//           <div className="mt-1 pb-12">

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-5 mb-16">
//               <Button variant="hero" size="xl">
//                 Book a Consultation
//                 <ArrowRight className="w-5 h-5 ml-2" />
//               </Button>

//               <Button variant="bronze-gold" size="xl">
//                 Schedule a Visit
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border max-w-3xl">
//               <div>
//                 <div className="flex items-center gap-2 mb-2">
//                   <Building2 className="w-5 h-5 text-primary" />
//                   <span className="font-serif text-3xl font-semibold">
//                     150+
//                   </span>
//                 </div>
//                 <p className="text-sm text-muted-foreground">
//                   Projects Delivered
//                 </p>
//               </div>

//               <div>
//                 <div className="flex items-center gap-2 mb-2">
//                   <Users className="w-5 h-5 text-primary" />
//                   <span className="font-serif text-3xl font-semibold">
//                     2,500+
//                   </span>
//                 </div>
//                 <p className="text-sm text-muted-foreground">
//                   Happy Families
//                 </p>
//               </div>

//               <div>
//                 <div className="flex items-center gap-2 mb-2">
//                   <Award className="w-5 h-5 text-primary" />
//                   <span className="font-serif text-3xl font-semibold">
//                     20
//                   </span>
//                 </div>
//                 <p className="text-sm text-muted-foreground">
//                   Years of Trust
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
//         <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center p-2">
//           <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
//         </div>
//       </div>

//     </section>
//   );
// };

// export default HeroSection;
