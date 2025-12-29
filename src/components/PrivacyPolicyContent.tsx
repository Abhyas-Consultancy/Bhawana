import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Bhawna Enterprises</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Bhawna Enterprises. Learn how we collect, use, and protect your personal information."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero / Header Section */}
        <section className="bg-stone-dark text-stone-light py-24">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
                Privacy Policy
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
                  At Bhawna Enterprises, we are committed to protecting your privacy
                  and ensuring that your personal information is handled responsibly.
                  This Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website.
                </p>

                {/* New First Section: Communication Consent */}
                <div className="space-y-6 p-6 bg-muted/30 rounded-lg border border-border/50">
                  <h2 className="font-serif text-2xl font-medium">
                    Communication Consent
                  </h2>
                  <p>
                    By accessing and using our services, you agree to comply with our
                    Terms of Use and Privacy Policy.
                  </p>
                  <p className="font-medium">
                    Communication Consent: By submitting your information (through
                    contact forms, inquiry submissions, or any other means), you
                    authorize Bhawna Enterprises and its partners to contact you via
                    phone, SMS, RCS, WhatsApp, or email for informational and
                    promotional purposes related to our real estate services and
                    offerings.
                  </p>
                  <p>
                    You may opt out of promotional communications at any time by
                    contacting us at <span className="font-medium">info@bhawanaenterprises.com</span> or
                    by using the unsubscribe option provided in our messages.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-medium">
                    1. Information We Collect
                  </h2>
                  <p>
                    We collect personally identifiable information (such as names,
                    email addresses, phone numbers, and postal addresses) only when
                    voluntarily submitted by you through contact forms, inquiries,
                    or newsletter subscriptions.
                  </p>
                  <p>
                    We may also automatically collect non-personal information such
                    as browser type, IP address, and pages visited to improve our
                    website experience.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-medium">
                    2. Use of Cookies & Tracking Technology
                  </h2>
                  <p>
                    Our website uses cookies and similar tracking technologies to
                    enhance user experience, analyze traffic, and personalize
                    content. You can control cookies through your browser settings.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-medium">
                    3. How We Use Your Information
                  </h2>
                  <p>
                    Information collected is used solely to:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
                    <li>Respond to your inquiries and requests</li>
                    <li>Send property updates or newsletters (with your consent)</li>
                    <li>Improve our services and website functionality</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-medium">
                    4. Sharing of Information
                  </h2>
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share information only with trusted
                    service providers bound by confidentiality or when required by
                    law.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-medium">
                    5. Data Security
                  </h2>
                  <p>
                    We implement appropriate technical and organizational measures
                    to protect your personal data against unauthorized access,
                    alteration, or destruction.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-medium">
                    6. Your Rights
                  </h2>
                  <p>
                    You have the right to access, correct, or delete your personal
                    information. You may also withdraw consent for marketing
                    communications at any time.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-medium">
                    7. Changes to This Policy
                  </h2>
                  <p>
                    We reserve the right to update this Privacy Policy. Any changes
                    will be posted on this page with an updated effective date.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-medium">
                    8. Contact Us
                  </h2>
                  <p>
                    For any questions regarding this Privacy Policy, please contact
                    us at:
                  </p>
                  <p className="font-medium">
                    Email: info@bhawanaenterprises.com
                  </p>
                </div>
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

export default PrivacyPage;