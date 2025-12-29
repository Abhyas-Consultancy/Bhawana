// "use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// type ConsentDialogProps = {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// };

// export const ConsentDialog = ({ open, onOpenChange }: ConsentDialogProps) => {
//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-lg">
//         <DialogHeader>
//           <DialogTitle>Terms, Privacy & Communication Consent</DialogTitle>
//         </DialogHeader>

//         <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
//           <p>
//             By accessing and using our services, you agree to comply with our
//             Terms of Use and Privacy Policy.
//           </p>

//           <p>
//             <strong>Communication Consent:</strong> By submitting your
//             information, you authorize{" "}
//             <strong>Bhawana Enterprises</strong> & its partners to contact you
//             via phone, SMS, RCS, WhatsApp, or email for informational and
//             promotional purposes related to our services.
//           </p>

//           <p>
//             You may opt out of promotional communication at any time by
//             contacting us.
//           </p>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };


"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import PrivacyPolicyContent from "./PrivacyPolicyContent";
import TermsConditionsContent from "./TermsConditionsContent";

export type ConsentType = "privacy" | "terms" | "communication" | null;

type ConsentDialogProps = {
  open: boolean;
  type: ConsentType;
  onOpenChange: (open: boolean) => void;
};

const CommunicationConsentContent = () => (
  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
    <p>
      By accessing and using our services, you agree to comply with our Terms of
      Use and Privacy Policy.
    </p>

    <p>
      <strong>Communication Consent:</strong> By submitting your information,
      you authorize <strong>Bhawana Enterprises</strong> & its partners to
      contact you via phone, SMS, RCS, WhatsApp, or email for informational and
      promotional purposes related to our services.
    </p>

    <p>
      You may opt out of promotional communication at any time by contacting us.
    </p>
  </div>
);

export const ConsentDialog = ({
  open,
  type,
  onOpenChange,
}: ConsentDialogProps) => {
  if (!type) return null;

  const getTitle = () => {
    switch (type) {
      case "privacy":
        return "Privacy Policy";
      case "terms":
        return "Terms & Conditions";
      case "communication":
        return "Communication Consent";
      default:
        return "";
    }
  };

  const renderContent = () => {
    switch (type) {
      case "privacy":
        return <PrivacyPolicyContent />;
      case "terms":
        return <TermsConditionsContent />;
      case "communication":
        return <CommunicationConsentContent />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
        </DialogHeader>

        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};
