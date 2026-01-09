import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInLeft, FadeInRight } from "./ScrollAnimations";

const WhyUsSection = () => {
  return (
    <section id="about" className="section-dark section-padding rounded-3xl px-3 md:px-4 my-8">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <FadeInLeft className="space-y-6">
            <span className="pill-tag bg-primary text-primary-foreground border-none">
              Why us?
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-tight">
              We are Building 🏠 homes with purpose since 2002.
            </h2>
            
            <div className="space-y-4 text-secondary-foreground/80">
              <p>
                At <strong className="text-secondary-foreground">Rustix Estates</strong>, we believe finding a home should be more than a transaction — it should be a meaningful experience. Our platform is built to bridge the gap between premium properties and people searching for a space that truly fits their lifestyle.
              </p>
              <p>
                Backed by a passionate team of real estate professionals and creative minds, Rustix Estates combines design, technology, and local expertise to deliver exceptional service and seamless user experiences. Whether you're a first-time buyer or just beginning your search, we're here to help you navigate the journey.
              </p>
            </div>

            <Button variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" size="lg">
              About Us
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </FadeInLeft>

          {/* Right Image */}
          <FadeInRight>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=500&fit=crop"
                alt="Real estate agent handing keys to happy couple"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
