// const TermsConditionsContent = () => {
//   return (
//     <div className="space-y-6">
//       <h3 className="text-base font-medium text-foreground">
//         Website Terms & Conditions
//       </h3>

//       <p>
//         By visiting, viewing, accessing or otherwise using any of the services
//         or information created, collected, compiled or submitted to
//         www.bhawanaenterprises.com, you agree to be bound by the following Terms
//         and Conditions of Service.
//       </p>

//       <h4 className="font-medium text-foreground">
//         1. Acceptance of our Terms
//       </h4>
//       <p>
//         If you do not want to be bound by our Terms, your only option is not to
//         use the services of www.bhawanaenterprises.com. Your use of this website
//         shall indicate your conclusive acceptance of this agreement.
//       </p>

//       <h4 className="font-medium text-foreground">
//         2. Provision of Services
//       </h4>
//       <p>
//         www.bhawanaenterprises.com reserves the right to modify, improve or
//         discontinue any of its services or products at its sole discretion
//         without notice.
//       </p>

//       <h4 className="font-medium text-foreground">
//         3. Proprietary Rights
//       </h4>
//       <p>
//         The website may contain proprietary and confidential information
//         protected by intellectual property laws. Content may not be reproduced
//         or distributed without written permission.
//       </p>

//       <h4 className="font-medium text-foreground">
//         4. Submitted Content
//       </h4>
//       <p>
//         When you submit content, you grant www.bhawanaenterprises.com a
//         worldwide, royalty-free license to publish and distribute your content.
//       </p>

//       <h4 className="font-medium text-foreground">
//         5. Termination of Agreement
//       </h4>
//       <p>
//         These Terms shall continue to apply until terminated by either party.
//         Provisions intended to continue shall survive termination.
//       </p>

//       <h4 className="font-medium text-foreground">
//         6. Disclaimer of Warranties
//       </h4>
//       <p>
//         Services are provided “As Is” and “As Available” without warranties of
//         any kind, including merchantability or fitness for a particular
//         purpose.
//       </p>

//       <h4 className="font-medium text-foreground">
//         7. Limitation of Liability
//       </h4>
//       <p>
//         www.bhawanaenterprises.com shall not be liable for any direct or indirect
//         damages arising from use or inability to use the service.
//       </p>

//       <h4 className="font-medium text-foreground">
//         8. External Content
//       </h4>
//       <p>
//         The website may contain links to third-party websites. We are not
//         responsible for external content or resources.
//       </p>

//       <h4 className="font-medium text-foreground">
//         9. Jurisdiction
//       </h4>
//       <p>
//         Any disputes shall be subject to the jurisdiction determined solely by
//         www.bhawanaenterprises.com.
//       </p>

//       <h4 className="font-medium text-foreground">
//         10. Entire Agreement
//       </h4>
//       <p>
//         These Terms constitute the entire agreement between you and
//         www.bhawanaenterprises.com.
//       </p>

//       <h4 className="font-medium text-foreground">
//         11. Changes to the Terms
//       </h4>
//       <p>
//         We reserve the right to modify these Terms at any time. Continued use of
//         the website signifies acceptance of updated Terms.
//       </p>
//     </div>
//   );
// };

// export default TermsConditionsContent;


import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Bhawna Enterprises</title>
        <meta
          name="description"
          content="Read the Terms and Conditions governing the use of Bhawna Enterprises website and services."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero / Header Section */}
        <section className="bg-stone-dark text-stone-light py-24">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
                Terms & Conditions
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: December 28, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding py-20">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto prose prose-lg text-foreground">
              <div className="space-y-10">
                <p className="lead text-xl text-muted-foreground">
                  Welcome to Bhawna Enterprises. By accessing or using our website,
                  you agree to be bound by these Terms and Conditions.
                </p>

                {[
                  {
                    title: "1. Acceptance of Terms",
                    content:
                      "By using this website, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree, please refrain from using our services.",
                  },
                  {
                    title: "2. Use of Website",
                    content:
                      "You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the site.",
                  },
                  {
                    title: "3. Intellectual Property",
                    content:
                      "All content on this website, including text, images, logos, and designs, is the property of Bhawna Enterprises and protected by copyright and trademark laws. Unauthorized use is prohibited.",
                  },
                  {
                    title: "4. Property Information",
                    content:
                      "All property listings, images, and details are for informational purposes only and subject to change without notice. We do not guarantee accuracy or availability.",
                  },
                  {
                    title: "5. Third-Party Links",
                    content:
                      "Our website may contain links to external sites. We are not responsible for the content or practices of these third-party websites.",
                  },
                  {
                    title: "6. Disclaimer of Warranties",
                    content:
                      "The website and its content are provided 'as is' without warranties of any kind, express or implied, including but not limited to merchantability or fitness for a particular purpose.",
                  },
                  {
                    title: "7. Limitation of Liability",
                    content:
                      "Bhawna Enterprises shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website.",
                  },
                  {
                    title: "8. Modifications",
                    content:
                      "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Continued use constitutes acceptance of updated terms.",
                  },
                  {
                    title: "9. Governing Law",
                    content:
                      "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in [Your City/State].",
                  },
                  {
                    title: "10. Contact Information",
                    content:
                      "For questions about these Terms, please contact us at info@bhawanaenterprises.com.",
                  },
                ].map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h2 className="font-serif text-2xl font-medium">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Back to Home Link */}
            <div className="max-w-4xl mx-auto mt-16 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;