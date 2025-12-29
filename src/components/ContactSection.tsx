"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ConsentDialog} from "./ConsentDialog"; // adjust path if needed

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
  agreeTerms: boolean;      // REQUIRED
  agreeCommunication: boolean; // OPTIONAL
};
type ConsentType = "privacy" | "terms" | "communication" | null;
const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["10/615, Malviya nagar Near Kali Mata Mandir, Jaipur - 302017"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 9829066382", "+91 9820065382"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["narwani1975@gmail.com", "sales@bhawnaenterprises.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 10AM - 7PM", "Sunday: By Appointment"],
  },
  {
    icon: MapPin,
    title: "Rera Number",
    details: ["RAJ/A/2017/125"],
  },
];

const ContactSection = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      agreeTerms: false,
      agreeCommunication: false,
    },
  });

  // Modal state
  const [showComConsent, setShowComConsent] = useState(false);
  const [consentType, setConsentType] = useState<ConsentType>(null);
  const [showConsent, setShowConsent] = useState<ConsentType>(null);
  const onSubmit = async (data: ContactFormValues) => {
    const message = `
📩 New Property Inquiry

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Message: ${data.message}

Agreed to Terms: ${data.agreeTerms ? "Yes" : "No"}
Marketing Consent: ${data.agreeCommunication ? "Yes" : "No"}
`;

    const whatsappUrl = `https://wa.me/919829066382?text=${encodeURIComponent(
      message
    )}`;

    // Optional backend storage
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    window.open(whatsappUrl, "_blank");

    toast.success("WhatsApp opened. Please send the message.");
    form.reset();
  };

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-wide">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Contact
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mt-4 mb-6">
            Let’s Discuss Your Property Requirement
          </h2>
          <p className="text-muted-foreground text-lg">
            Connect with us for professional real estate consultancy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* FORM */}
          <div className="bg-card p-8 md:p-10 rounded-sm shadow-soft border">
            <h3 className="font-serif text-2xl font-medium mb-6">
              Send us a Message
            </h3>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Full name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    rules={{ required: "Phone number is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 XXXXX XXXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Tell us about your requirements..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* ✅ CHECKBOX 1 – REQUIRED */}
                {/* REQUIRED: Terms & Privacy */}
                <FormField
                  control={form.control}
                  name="agreeTerms"
                  rules={{
                    validate: (v) => v || "You must agree to Terms & Privacy Policy",
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start gap-3">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="mt-1 h-4 w-4 accent-primary rounded"
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal leading-relaxed cursor-pointer">
                          I agree to the{" "}
                          <Link
                            to="/terms"
                            className="underline text-primary hover:text-primary/80"
                            target="_blank" // optional: opens in new tab to not lose form data
                            rel="noopener noreferrer"
                          >
                            Terms of Use
                          </Link>{" "}
                          and{" "}
                          <Link
                            to="/privacy"
                            className="underline text-primary hover:text-primary/80"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Privacy Policy
                          </Link>
                          <span className="text-primary ml-1">*</span>
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* OPTIONAL: Communication Consent */}
                <FormField
                  control={form.control}
                  name="agreeCommunication"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start gap-3">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="mt-1 h-4 w-4 accent-primary rounded"
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal leading-relaxed cursor-pointer">
                          I agree to receive updates via calls, SMS, WhatsApp, or email as per our{" "}
                          <Link
                            to="/privacy"
                            className="underline text-primary hover:text-primary/80"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Communication Consent
                          </Link>
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />


                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </Form>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="font-serif text-2xl font-medium mb-8">
              Get in Touch
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-sm border hover:border-primary/30 transition"
                >
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ CONSENT MODAL */}
      <ConsentDialog
        open={!!consentType}
        type={consentType}
        onOpenChange={(open) => {
          if (!open) setConsentType(null);
        }}
      />

    </section>
  );
};

export default ContactSection;
