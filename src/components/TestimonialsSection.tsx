import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  return (
    <section className="section-dark section-padding rounded-3xl mx-4 lg:mx-8 my-8">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <span className="pill-tag bg-accent/20 text-accent border-accent/30">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
            Feedbacks from our valuable clients
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=500&fit=crop"
              alt="Happy clients with real estate agent"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Testimonial */}
          <div className="space-y-8 relative">
            <div className="text-6xl text-primary/50 font-serif">"</div>
            
            <blockquote className="text-xl md:text-2xl text-secondary-foreground/90 leading-relaxed">
              Buying my first home was overwhelming, but with the right guidance, it became a seamless process. The team was knowledgeable, patient, and always available to answer my questions. They made sure I found the perfect home within my budget. Highly recommend!
            </blockquote>

            <div>
              <p className="font-bold text-secondary-foreground text-lg">Emily R.</p>
              <p className="text-secondary-foreground/70">Buyer</p>
            </div>

            {/* Navigation */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
