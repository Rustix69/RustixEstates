import { Home, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="px-4 md:px-6 lg:px-8 pb-4">
      <div className="section-dark rounded-3xl">
        <div className="container mx-auto container-padding py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left */}
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <Home className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-secondary-foreground">Haventra</span>
            </a>
            <p className="text-secondary-foreground/70 max-w-sm">
              Making Luxury Living Effortless
            </p>
            <Button variant="hero">
              Explore Properties
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Right - Newsletter */}
          <div className="space-y-4">
            <p className="text-secondary-foreground font-medium">
              Stay updated with the latest news, promotions, and exclusive offers.
            </p>
            <div className="flex gap-2 max-w-md">
              <Input
                type="email"
                placeholder="jane@framer.com"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 rounded-full"
              />
              <Button variant="hero">Submit</Button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid md:grid-cols-3 gap-8 py-8 border-t border-secondary-foreground/20">
          {/* Social */}
          <div>
            <p className="text-secondary-foreground font-medium mb-4">Social</p>
            <div className="flex gap-4">
              {["X", "in", "📷", "f"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="text-secondary-foreground font-medium mb-4">Pages</p>
            <div className="space-y-2">
              {["Home", "About", "Properties", "Contact", "404"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="flex items-center gap-1 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  {link}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-secondary-foreground font-medium mb-4">Info</p>
            <div className="space-y-2">
              {["Blog", "Privacy Policy", "Terms & Conditions", "Disclaimer"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="flex items-center gap-1 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  {link}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-secondary-foreground/60 text-sm">
          © All copyrights by Haventra
        </p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
