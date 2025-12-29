// import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
// import { useState } from "react";
// import PrivacyModal from "@/components/PrivacyModal";
// import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
// import TermsConditionsContent from "@/components/TermsConditionsContent";
// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const [openPrivacy, setOpenPrivacy] = useState(false);
//   const [openTerms, setOpenTerms] = useState(false);


//   const quickLinks = [
//     { label: "About Us", href: "#about" },
//     { label: "Our Projects", href: "#projects" },
//     { label: "Services", href: "#services" },
//     { label: "Contact", href: "#contact" },
//   ];

//   const propertyTypes = [
//     "Luxury Apartments",
//     "Independent Villas",
//     "Commercial Spaces",
//     "Plotted Developments",
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: "#", label: "Facebook" },
//     { icon: Instagram, href: "#", label: "Instagram" },
//     { icon: Twitter, href: "#", label: "Twitter" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" },
//     { icon: Youtube, href: "#", label: "YouTube" },
//   ];

//   return (
//     <>
//       <footer className="bg-stone-dark text-stone-light">
//         {/* Main Footer */}
//         <div className="section-padding pb-12">
//           <div className="container-wide">
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
//               {/* Brand */}
//               <div>
//                 <div className="mb-6">
//                   <span className="font-serif text-2xl font-semibold">
//                     Bhawna
//                   </span>
//                   <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground ml-2">
//                     Enterprises
//                   </span>
//                 </div>
//                 <p className="text-muted-foreground text-sm leading-relaxed mb-6">
//                   Building dreams since 2006. Your trusted partner for premium
//                   residential and commercial real estate solutions.
//                 </p>
//                 <div className="flex gap-3">
//                   {socialLinks.map((social, index) => (
//                     <a
//                       key={index}
//                       href={social.href}
//                       aria-label={social.label}
//                       className="w-10 h-10 rounded-sm bg-muted/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
//                     >
//                       <social.icon className="w-5 h-5" />
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* Quick Links */}
//               <div>
//                 <h4 className="font-serif text-lg font-medium mb-6">
//                   Quick Links
//                 </h4>
//                 <ul className="space-y-3">
//                   {quickLinks.map((link, index) => (
//                     <li key={index}>
//                       <a
//                         href={link.href}
//                         className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300"
//                       >
//                         {link.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Property Types */}
//               <div>
//                 <h4 className="font-serif text-lg font-medium mb-6">
//                   Properties
//                 </h4>
//                 <ul className="space-y-3">
//                   {propertyTypes.map((type, index) => (
//                     <li key={index}>
//                       <span className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 cursor-pointer">
//                         {type}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Legal */}
//               <div>
//                 <h4 className="font-serif text-lg font-medium mb-6">Legal</h4>
//                 <ul className="space-y-3">
//                   <li>
//                     <button
//                       onClick={() => setOpenPrivacy(true)}
//                       className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300"
//                     >
//                       Privacy Policy
//                     </button>
//                   </li>
                  
//                   <li>
//                     <button
//                       onClick={() => setOpenTerms(true)}
//                       className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300"
//                     >
//                       Terms & Conditions
//                     </button>
//                   </li>

             
//                   <li>
//                     <span className="text-muted-foreground text-sm cursor-pointer hover:text-foreground transition-colors duration-300">
//                       RERA Compliance
//                     </span>
//                   </li>
//                   <li>
//                     <span className="text-muted-foreground text-sm cursor-pointer hover:text-foreground transition-colors duration-300">
//                       Disclaimer
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-border/10">
//           <div className="container-wide section-padding py-6">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
//               <p>© {currentYear} Bhawna Enterprises. All rights reserved.</p>
//               <p>Designed with excellence, built with trust.</p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Privacy Policy Modal */}
//       <PrivacyModal
//         open={openPrivacy}
//         onClose={() => setOpenPrivacy(false)}
//         title="Website Privacy Policy"
//       >
//         <PrivacyPolicyContent />
//       </PrivacyModal>
//       <PrivacyModal
//         open={openTerms}
//         onClose={() => setOpenTerms(false)}
//         title="Website Terms & Conditions"
//       >
//         <TermsConditionsContent />
//       </PrivacyModal>
//     </>
//   );
// };

// export default Footer;
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom"; // ← Important: Import from react-router-dom

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const propertyTypes = [
    "Luxury Apartments",
    "Independent Villas",
    "Commercial Spaces",
    "Plotted Developments",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-stone-dark text-stone-light">
      {/* Main Footer */}
      <div className="section-padding pb-12">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="mb-6">
                <span className="font-serif text-2xl font-semibold">Bhawna</span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground ml-2">
                  Enterprises
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Building dreams since 2006. Your trusted partner for premium
                residential and commercial real estate solutions.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-sm bg-muted/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-medium mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Property Types */}
            <div>
              <h4 className="font-serif text-lg font-medium mb-6">Properties</h4>
              <ul className="space-y-3">
                {propertyTypes.map((type, index) => (
                  <li key={index}>
                    <span className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 cursor-pointer">
                      {type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-serif text-lg font-medium mb-6">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/privacy"
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/terms"
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <span className="text-muted-foreground text-sm cursor-pointer hover:text-foreground transition-colors duration-300">
                    RERA Compliance
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm cursor-pointer hover:text-foreground transition-colors duration-300">
                    Disclaimer
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/10">
        <div className="container-wide section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Bhawna Enterprises. All rights reserved.</p>
            <p>Designed with excellence, built with trust.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;