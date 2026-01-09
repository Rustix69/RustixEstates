import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";
import { FadeInUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    name: "The Skyline Penthouse",
    address: "789 Park Avenue, New York, NY",
    bedrooms: 4,
    bathrooms: 5,
    sqft: "4,800",
    status: "For Rent" as const,
    price: "2800000$",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    name: "Golden Crest Estate",
    address: "452 Hillside Lane, Beverly Hills, CA",
    bedrooms: 7,
    bathrooms: 8,
    sqft: "9,500",
    status: "For Sell" as const,
    price: "1710000$",
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    name: "Serene Lakeside Retreat",
    address: "98 Willow Lake Road, Aspen, CO",
    bedrooms: 5,
    bathrooms: 6,
    sqft: "6,300",
    status: "For Sell" as const,
    price: "9800000$",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
    name: "Azure Heights Villa",
    address: "125 Oceanview Drive, Malibu, CA",
    bedrooms: 5,
    bathrooms: 6,
    sqft: "5,200",
    status: "For Sell" as const,
    price: "700000$",
  },
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop",
    name: "The Marbella Mansion",
    address: "321 Sunset Boulevard, Miami, FL",
    bedrooms: 9,
    bathrooms: 10,
    sqft: "12,000",
    status: "For Sell" as const,
    price: "990000$",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    name: "Zenith Hilltop Residence",
    address: "214 Summit Crest Road, San Francisco, CA",
    bedrooms: 6,
    bathrooms: 7,
    sqft: "7,400",
    status: "For Rent" as const,
    price: "1200000$",
  },
];

const PropertiesSection = () => {
  return (
    <section id="properties" className="section-light section-padding">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <FadeInUp className="space-y-4 mb-12">
          <span className="pill-tag">Properties</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-primary">latest</span> properties
          </h2>
        </FadeInUp>

        {/* Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <StaggerItem key={index}>
              <PropertyCard {...property} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeInUp delay={0.3} className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            View All Properties
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </FadeInUp>
      </div>
    </section>
  );
};

export default PropertiesSection;
