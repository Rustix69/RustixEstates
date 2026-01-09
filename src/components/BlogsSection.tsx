import BlogCard from "./BlogCard";
import { FadeInUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const blogs = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    tag: "Latest",
    title: "How to Sell Your Property Quickly & Get the Best Price",
    description:
      "Discover expert strategies to sell your home quickly, from staging and pricing to marketing and negotiation.",
    featured: true,
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    tag: "Investment",
    title: "Top 5 Neighborhoods for Real Estate Investment",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop",
    tag: "Insights",
    title: "Understanding Market Trends: A Buyer's Guide",
  },
  {
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&h=300&fit=crop",
    tag: "News",
    title: "New Housing Regulations: What You Need to Know",
  },
];

const BlogsSection = () => {
  return (
    <section id="blogs" className="section-accent section-padding rounded-3xl mx-4 lg:mx-8 my-8">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <FadeInUp className="space-y-4 mb-12">
          <span className="pill-tag">Blogs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Latest <span className="text-primary">news, insights</span> and expert tips
          </h2>
        </FadeInUp>

        {/* Featured Blog */}
        <FadeInUp delay={0.1} className="mb-12">
          <BlogCard {...blogs[0]} />
        </FadeInUp>

        {/* Blog Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {blogs.slice(1).map((blog, index) => (
            <StaggerItem key={index}>
              <BlogCard {...blog} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default BlogsSection;
