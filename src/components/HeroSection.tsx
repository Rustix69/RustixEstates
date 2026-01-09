import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
              Find your home
              <br />
              with Haventra
            </h1>
            
            <p className="text-lg text-secondary-foreground/80 max-w-md">
              Luxury, comfort, and convenience — all in one place.
              Find the perfect place to call home — effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Explore Properties
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Explore", "Shortlist", "Visit", "Book"].map((item) => (
                <Button key={item} variant="heroPill" size="pill">
                  {item}
                </Button>
              ))}
            </div>
          </div>

          {/* Right Content - Review Card */}
          <div className="flex justify-end">
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
          </div>
        </div>
      </div>

      {/* Rounded bottom corners */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-background rounded-t-3xl" />
    </section>
  );
};

export default HeroSection;
