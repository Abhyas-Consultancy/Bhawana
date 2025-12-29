import { CheckCircle2 } from "lucide-react";
import interiorImage from "@/assets/interior-1.jpg";

const AboutSection = () => {
  const features = [
    "Premium quality construction materials",
    "Sustainable & eco-friendly designs",
    "Prime locations across the city",
    "Transparent pricing & documentation",
  ];

  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">About Us</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4 mb-6">
            Consulting Deals & Closing with Confidence.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With over 25+ years of experience , Bhawana Enterprises is a trusted real estate consultancy firm specializing in residential, commercial, agricultural, and industrial property deals.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We work closely with buyers, sellers, and investors to manage negotiation, coordination, and complete deal execution, ensuring every transaction is clear, compliant, and successfully closed.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-large">
              <img
                src={interiorImage}
                alt="Luxury apartment interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-sm shadow-large max-w-xs">
              <span className="font-serif text-4xl font-semibold">28+</span>
              <p className="text-sm mt-1 opacity-90">Years of Excellence in Real Estate</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Our Story</span>
            <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mt-4 mb-6">
              Where Experience Drives Closure
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Established in 2005, Bhawana Enterprises has been providing end-to-end real estate consultancy backed by strong negotiation and structured deal management. We have guided clients across all types of property transactions by aligning market knowledge with clear execution. From initial discussion to final closure, we ensure every deal is handled with clarity, confidence, and accountability.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Bhawana Enterprises continues to be the preferred choice for clients who value trusted guidance and successful outcomes.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
