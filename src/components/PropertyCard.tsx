import { Bed, Bath, Maximize } from "lucide-react";

interface PropertyCardProps {
  image: string;
  name: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  status: "For Rent" | "For Sell";
  price: string;
}

const PropertyCard = ({
  image,
  name,
  address,
  bedrooms,
  bathrooms,
  sqft,
  status,
  price,
}: PropertyCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover border border-border">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{address}</p>
        </div>

        {/* Features */}
        <div className="flex items-center gap-6 py-3 border-y border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Bed className="w-4 h-4" />
            <span>{bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Bath className="w-4 h-4" />
            <span>{bathrooms} Bathrooms</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Maximize className="w-4 h-4" />
            <span>{sqft} Sq. Ft.</span>
          </div>
        </div>

        {/* Status & Price */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{status}</span>
          <span className="price-tag">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
