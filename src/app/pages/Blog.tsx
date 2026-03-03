import { Calendar, Clock, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Blog() {
  const blogPosts = [
    {
      title: "5 Essential Tips for Maintaining Healthy Teeth",
      excerpt: "Learn the fundamental practices that will keep your smile bright and healthy for years to come. From proper brushing techniques to dietary choices.",
      image: "https://images.unsplash.com/photo-1763886034104-140f5d127102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBoZWFsdGglMjBoeWdpZW5lJTIwdGlwc3xlbnwxfHx8fDE3NzIxNjg1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "February 20, 2026",
      readTime: "5 min read",
      category: "Oral Health",
    },
    {
      title: "The Connection Between Diet and Dental Health",
      excerpt: "Discover how your dietary choices impact your oral health and which foods can help strengthen your teeth and gums.",
      image: "https://images.unsplash.com/photo-1585909085111-2c2f311643af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwdGVldGglMjBudXRyaXRpb24lMjBkaWV0fGVufDF8fHx8MTc3MjE2ODU5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "February 15, 2026",
      readTime: "7 min read",
      category: "Nutrition",
    },
    {
      title: "Understanding the Importance of Regular Dental Checkups",
      excerpt: "Why visiting your dentist twice a year is crucial for preventing serious dental issues and maintaining optimal oral health.",
      image: "https://images.unsplash.com/photo-1763048819607-ea55217cff34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFsJTIwaGVhbHRoJTIwY2FyZSUyMHJvdXRpbmV8ZW58MXx8fHwxNzcyMTY4NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "February 10, 2026",
      readTime: "4 min read",
      category: "Preventive Care",
    },
    {
      title: "Teeth Whitening: What You Need to Know",
      excerpt: "Explore the different teeth whitening options available and find out which method might be best for achieving your dream smile.",
      image: "https://images.unsplash.com/photo-1584516151140-f79fde30d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWV0aCUyMHdoaXRlbmluZyUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzIxMzI2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "February 5, 2026",
      readTime: "6 min read",
      category: "Cosmetic Dentistry",
    },
    {
      title: "Dental Implants: A Complete Guide",
      excerpt: "Everything you need to know about dental implants, from the procedure itself to recovery and long-term care.",
      image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50cyUyMHByb2NlZHVyZXxlbnwxfHx8fDE3NzIxNTY4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "January 30, 2026",
      readTime: "8 min read",
      category: "Dental Procedures",
    },
    {
      title: "Caring for Your Child's First Teeth",
      excerpt: "A parent's guide to establishing good oral hygiene habits early and ensuring your child's dental health from the start.",
      image: "https://images.unsplash.com/photo-1758205308106-5760d0227cc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBkZW50aXN0cnklMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzIxNjg1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "January 25, 2026",
      readTime: "5 min read",
      category: "Pediatric Dentistry",
    },
  ];

  const categories = [
    "All Posts",
    "Oral Health",
    "Cosmetic Dentistry",
    "Preventive Care",
    "Dental Procedures",
    "Nutrition",
    "Pediatric Dentistry",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C4964] to-[#1a2d3f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl mb-6">Dental Health Blog</h1>
            <p className="text-lg lg:text-xl text-gray-300">
              Expert advice, tips, and insights for maintaining optimal oral health
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  index === 0
                    ? "bg-[#2C4964] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8">
              <ImageWithFallback
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-[#6BBE44] text-white text-sm rounded-full mb-4 self-start">
                  Featured Post
                </div>
                <h2 className="text-3xl lg:text-4xl text-[#2C4964] mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <button className="bg-[#2C4964] text-white px-6 py-3 rounded-lg hover:bg-[#1a2d3f] transition-colors inline-flex items-center gap-2 self-start">
                  Read Article
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#2C4964] mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-[#6BBE44] mb-2">{post.category}</div>
                  <h3 className="text-xl text-[#2C4964] mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="text-[#2C4964] hover:text-[#6BBE44] inline-flex items-center gap-1">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C4964] to-[#6BBE44] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Get the latest dental health tips and news delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-[#2C4964] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
