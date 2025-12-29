import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of properties does Bhawna Enterprises offer?",
    answer: "We provide consultancy and deal execution for residential, commercial, industrial, and agricultural properties, including plots, land parcels, offices, retail spaces, warehouses, and farm land.",
  },
  {
    question: "Do you handle sale, purchase, and rental deals?",
    answer: "Yes. We handle sale, purchase, rent/lease, joint ventures, and property exchange transactions, offering end-to-end support from negotiation to final closure.",
  },
  {
    question: "Are you a broker or a consultant?",
    answer: "We are a real estate consultancy firm, not just brokers. We represent client interests, advise on market value, manage negotiations, coordinate documentation, and support deals until closure.",
  },
  {
    question: "Do you assist with joint ventures and large land deals?",
    answer: "Yes. We specialize in joint venture structuring, landowner–developer coordination, and large land transactions, ensuring transparency, fair terms, and long-term value.",
  },
  {
    question: "HHow do you charge for your services?",
    answer: "Our fees depend on the nature, size, and complexity of the transaction. All terms are discussed transparently before engagement. We aim to provide value that exceeds our fees through successful deal execution.",
  },
  {
    question: "Do you help with documentation and legal coordination?",
    answer: "We coordinate with legal professionals and relevant parties to ensure proper documentation, compliance, and smooth execution of the transaction.",
  },
  {
    question: "How can I start working with Bhawana Enterprises?",
    answer: "You can call us, email us, or book a consultation. We begin by understanding your requirement and then guide you through the best possible deal approach.",
  },
    {
    question: "Do you work with investors and NRI clients?",
    answer: "Yes. We regularly work with investors, business owners, and NRI clients, handling transactions with confidentiality and structured communication.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">FAQ – CORRECT VERSION FOR A REAL ESTATE CONSULTANT</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Clear answers about our consultancy services, deal process, and how we work with buyers, sellers, and investors.
            </p>
            <div className="p-6 bg-cream rounded-sm border border-border">
              <p className="text-foreground font-medium mb-2">Still have questions?</p>
              <p className="text-muted-foreground text-sm mb-4">
                Our team is here to help. Reach out for personalized assistance.
              </p>
              <a 
                href="#contact" 
                className="text-primary font-medium text-sm hover:underline underline-offset-4"
              >
                Contact our team →
              </a>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-sm px-6 data-[state=open]:bg-cream data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
