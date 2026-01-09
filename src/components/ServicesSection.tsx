import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeInUp, FadeInRight } from "./ScrollAnimations";

const services = [
  {
    id: "01",
    title: "Buy a Property",
    description:
      "We help you find your dream home or investment property by offering a wide range of listings with expert guidance. From modern apartments to luxury villas, we ensure a seamless buying experience.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
  },
  {
    id: "02",
    title: "Rent a Property",
    description:
      "Find the perfect rental property that fits your lifestyle and budget. Our extensive listings cover everything from urban apartments to suburban homes.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
  },
  {
    id: "03",
    title: "Sell a Property",
    description:
      "Maximize your property's value with our expert selling services. We provide market analysis, professional staging advice, and extensive marketing reach.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop",
  },
  {
    id: "04",
    title: "Property Management",
    description:
      "Let us handle the day-to-day management of your property. From tenant screening to maintenance, we ensure your investment is well taken care of.",
    image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=400&h=300&fit=crop",
  },
  {
    id: "05",
    title: "Real Estate Consultation",
    description:
      "Get expert advice on real estate investments, market trends, and property valuations. Our consultants are here to guide you every step of the way.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-light section-padding">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp className="space-y-4 mb-12">
          <span className="pill-tag">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-2xl">
            We offer inclusive services of{" "}
            <span className="text-primary">buying</span>,{" "}
            <span className="text-primary">selling</span> and{" "}
            <span className="text-primary">managing</span> properties
          </h2>
        </FadeInUp>

        {/* Accordion */}
        <div className="grid lg:grid-cols-5 gap-8">
          <FadeInUp className="lg:col-span-3">
            <Accordion type="single" collapsible defaultValue="01" className="space-y-4">
              {services.map((service) => (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="py-6 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <span className="text-sm text-muted-foreground">{service.id}</span>
                      <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground max-w-xl pl-10">
                      {service.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInUp>

          {/* Image */}
          <FadeInRight className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-32">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=400&fit=crop"
                  alt="Happy family with keys"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
