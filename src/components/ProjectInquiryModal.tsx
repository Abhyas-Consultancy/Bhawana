// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useState } from "react";
// import { toast } from "sonner";

// type Props = {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   project: {
//     title: string;
//     type: string;
//   } | null;
// };

// export default function ProjectInquiryModal({
//   open,
//   onOpenChange,
//   project,
// }: Props) {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     console.log({
//       ...formData,
//       project: project?.title,
//     });

//     toast.success("Inquiry submitted successfully!");
//     onOpenChange(false);

//     setFormData({
//       name: "",
//       phone: "",
//       email: "",
//       message: "",
//     });
//   };

//   if (!project) return null;

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-lg">
//         <DialogHeader>
//           <DialogTitle className="font-serif text-2xl">
//             {project.title} Property Inquiry
//           </DialogTitle>
//           <p className="text-sm text-muted-foreground mt-1">
//             {project.type}
//           </p>
//         </DialogHeader>

//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//           <Input
//             placeholder="Full Name"
//             required
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({ ...formData, name: e.target.value })
//             }
//           />

//           <Input
//             placeholder="Phone Number"
//             required
//             value={formData.phone}
//             onChange={(e) =>
//               setFormData({ ...formData, phone: e.target.value })
//             }
//           />

//           <Input
//             type="email"
//             placeholder="Email Address"
//             required
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />

//           <Textarea
//             placeholder={`I am interested in ${project.title} property`}
//             rows={4}
//             value={formData.message}
//             onChange={(e) =>
//               setFormData({ ...formData, message: e.target.value })
//             }
//           />

//           <Button type="submit" className="w-full">
//             Submit Inquiry
//           </Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DynamicProjectForm from "./DynamicProjectForm";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    type: string;
  } | null;
};

export default function ProjectInquiryModal({
  open,
  onOpenChange,
  project,
}: Props) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            {project.title} Property Enquiry
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            {project.type}
          </p>
        </DialogHeader>

        {/* 🔹 DYNAMIC STEP FORM */}
        <DynamicProjectForm project={project.title} />
      </DialogContent>
    </Dialog>
  );
}
