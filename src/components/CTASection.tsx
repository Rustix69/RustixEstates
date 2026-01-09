import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInLeft, FadeInRight } from "./ScrollAnimations";
import { motion } from "framer-motion";

const CTASection = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden my-8 mx-4 lg:mx-8 rounded-3xl">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
          alt="Luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeInLeft className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-tight">
              Build your dream house with Haventra
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-md">
              Luxury, comfort, and convenience — all in one place.
              Find the perfect place to call home — effortlessly.
            </p>
            <Button variant="hero" size="lg">
              Explore Properties
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </FadeInLeft>

          {/* Review Card */}
          <FadeInRight className="flex justify-end">
            <div className="bg-secondary/80 backdrop-blur-md rounded-2xl p-6 max-w-sm border border-secondary-foreground/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Customer ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-secondary object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary-foreground">1.2k+</p>
                  <p className="text-sm text-secondary-foreground/70">Positive reviews</p>
                </div>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                More than 1.2k of our customers found their dream houses with Haventra
              </p>
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
