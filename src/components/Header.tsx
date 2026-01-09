import { Home, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <Home className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Rustix Estates</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#properties" className="text-primary font-medium hover:text-primary/80 transition-colors">
              Properties
            </a>
            <a href="#blogs" className="text-primary font-medium hover:text-primary/80 transition-colors">
              Blogs
            </a>
            <a href="#about" className="text-primary font-medium hover:text-primary/80 transition-colors">
              About
            </a>
          </nav>

          {/* CTA */}
          <Button variant="hero" size="default" className="hidden sm:flex">
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
