import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  image: string;
  tag: string;
  title: string;
  description?: string;
  featured?: boolean;
}

const BlogCard = ({ image, tag, title, description, featured = false }: BlogCardProps) => {
  if (featured) {
    return (
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-md">
            {tag}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Read more
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-md card-hover border border-border">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-md">
          {tag}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all"
        >
          Read more
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
