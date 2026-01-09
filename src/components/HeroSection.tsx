import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <section className="relative py-3 px-3 md:px-4">
      <div className="relative min-h-[85vh] flex items-center overflow-hidden rounded-3xl">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Modern luxury skyscrapers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-secondary/80" />
        </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight"
            >
              Find your home
              <br />
              with Haventra
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-secondary-foreground/80 max-w-md"
            >
              Luxury, comfort, and convenience — all in one place.
              Find the perfect place to call home — effortlessly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="lg">
                Explore Properties
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {["Explore", "Shortlist", "Visit", "Book"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                >
                  <Button variant="heroPill" size="pill">
                    {item}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Review Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-end"
          >
            <div className="bg-secondary/80 backdrop-blur-md rounded-2xl p-6 max-w-sm border border-secondary-foreground/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <motion.img
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
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
        </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
