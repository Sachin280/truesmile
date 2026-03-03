import { Link } from "react-router";
import { ArrowRight, CheckCircle, Star, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const services = [
    {
      title: "Teeth Whitening",
      description: "Brighten your smile with professional whitening treatments.",
      image: "https://images.unsplash.com/photo-1584516151140-f79fde30d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWV0aCUyMHdoaXRlbmluZyUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzIxMzI2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Dental Implants",
      description: "Permanent solution for missing teeth with natural-looking results.",
      image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50cyUyMHByb2NlZHVyZXxlbnwxfHx8fDE3NzIxNTY4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with modern braces and aligners.",
      image: "https://images.unsplash.com/photo-1645118286859-0cf9c5c784b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RvbnRpY3MlMjBicmFjZXMlMjBzbWlsZXxlbnwxfHx8fDE3NzIwOTQwODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const features = [
    "Experienced & Caring Team",
    "State-of-the-Art Technology",
    "Comfortable Environment",
    "Flexible Payment Options",
    "Emergency Services Available",
    "Family-Friendly Practice",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The best dental experience I've ever had! The staff is incredibly friendly and professional.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Dr. Smith and the team made my dental implant procedure smooth and painless. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      text: "My kids actually look forward to their dental appointments now. Thank you Truesmiles!",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C4964] to-[#1a2d3f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Your Smile is Our Priority
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-8">
                Experience exceptional dental care in a comfortable, modern environment. 
                Our experienced team is dedicated to helping you achieve and maintain a healthy, beautiful smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#6BBE44] text-white px-8 py-3 rounded-lg hover:bg-[#5aa838] transition-colors inline-flex items-center justify-center gap-2"
                >
                  Contact Us
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#2C4964] transition-colors inline-flex items-center justify-center gap-2"
                >
                  Our Services
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684607632041-32d729cdee35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRlbnRpc3QlMjBwYXRpZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3NzIxNjg1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy dental patient"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#2C4964] mb-4">
              Why Choose Truesmiles?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality dental care with a personal touch.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start gap-3"
              >
                <CheckCircle className="text-[#6BBE44] flex-shrink-0" size={24} />
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#2C4964] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care for the whole family.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl text-[#2C4964] mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-[#6BBE44] hover:text-[#5aa838] inline-flex items-center gap-1"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#2C4964] text-white px-8 py-3 rounded-lg hover:bg-[#1a2d3f] transition-colors"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#2C4964] mb-4">
              What Our Patients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied patients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#6BBE44] fill-[#6BBE44]" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-[#2C4964]">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C4964] to-[#6BBE44] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Ready to Start Your Journey to a Better Smile?
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Schedule your appointment today and experience the Truesmiles difference.
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#2C4964] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Book Your Appointment
            <Calendar size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}