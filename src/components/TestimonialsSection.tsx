import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Bhawana Enterprises handled our property sale with complete professionalism. Their negotiation skills and market understanding helped us close the deal smoothly and at the right value. We felt confident throughout the process.",
    name: "Rajesh & Priya Sharma",
    designation: "Residential Property Sellers, Jaipur",
    rating: 5,
  },
  {
    quote: "Transparent communication, strong follow-up, and timely coordination — Bhawana Enterprises made the entire purchase process simple and stress-free. Highly recommended for serious property transactions.",
    name: "Amit Kapoor",
    designation: "Commercial Property Buyer",
    rating: 5,
  },
  {
    quote: "We consulted Bhawana Enterprises for a land transaction, and their guidance was precise and reliable. From negotiation to documentation, everything was managed professionally till final closure.",
    name: "Meera & Vikram Singh",
    designation: "Agricultural Land Transaction",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70 font-medium">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mt-4 mb-6">
            What Our Clients Say About Working With Us
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-sm p-8 border border-primary-foreground/10"
            >
              <Quote className="w-10 h-10 text-primary-foreground/30 mb-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>

              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="pt-6 border-t border-primary-foreground/10">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-primary-foreground/60">{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
