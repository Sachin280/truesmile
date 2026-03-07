import { Link } from "react-router";
import { ArrowRight, CheckCircle, Star, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const services = [
    // {
    //   title: "Teeth Whitening",
    //   description: "Brighten your smile with professional whitening treatments.",
    //   image: "https://images.unsplash.com/photo-1584516151140-f79fde30d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWV0aCUyMHdoaXRlbmluZyUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzIxMzI2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    // },
    {
      title: "Orthodontic Care – Braces & Aligners",
      description: "Achieve a perfectly aligned smile with our advanced orthodontic treatments. We offer traditional braces and clear aligners designed to straighten teeth comfortably and effectively for patients of all ages.",
      image: "https://plus.unsplash.com/premium_photo-1667511022655-00c97e29a32a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3J0aG9kb250aWMlMjBDYXJlJTIwJUUyJTgwJTkzJTIwQnJhY2VzJTIwJTI2JTIwQWxpZ25lcnN8ZW58MHx8MHx8fDA%3D",
      // image: "https://images.unsplash.com/photo-1584516151140-f79fde30d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWV0aCUyMHdoaXRlbmluZyUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzIxMzI2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Teeth Cleaning & Gum Care",
      description: "Maintain a healthy smile with our professional teeth cleaning and gum care services. We remove plaque, tartar, and stains while helping prevent gum disease and bad breath.",
      image: "https://images.unsplash.com/photo-1611690061822-b707a67bfebb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Root Canal Treatment",
      description: "Save your natural tooth with our safe and painless root canal treatment. Our advanced procedures remove infection from the tooth and restore its strength and function.",
      image: "https://plus.unsplash.com/premium_photo-1674179075498-0aa74bc607e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Tooth Extractions",
      description: "Tooth Extraction ek dental procedure hai jisme severely damaged, infected, ya problematic tooth ko safely remove kiya jata hai. Jab tooth ko repair karna possible nahi hota, tab extraction oral health ko protect karne ke liye recommended hota hai.",
      image: "https://plus.unsplash.com/premium_photo-1722873143643-ea42854f97d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Dental Fillings",
      description: "Dental Fillings ek common dental treatment hai jo cavities (tooth decay) ko repair karne ke liye use hota hai. Is treatment me dentist tooth ke damaged part ko clean karke us jagah ko special filling material se fill karta hai taaki tooth fir se strong aur functional ho jaye.",
      image: "https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=1271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Teeth Whitening",
      description: "Teeth Whitening ek popular cosmetic dental treatment hai jo teeth par pade stains aur discoloration ko remove karke smile ko brighter aur more attractive banata hai.",
      image: "https://images.unsplash.com/photo-1664529845836-433c172142ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const features = [
    "MDS Specialist Orthodontist",
    "Gold Medalist – Academic Excellence",
    "Advanced Braces & Aligners",
    "Comprehensive Dental Care",
    "Patient-Friendly Approach",
    "Modern Equipment & Sterilization",
  ];

  const testimonials = [
    {
      name: "Rohit Sharma",
      text: "One of the best dental clinics I have visited. The doctor explained the treatment clearly and the staff was very polite and supportive. Highly recommended!”",
      rating: 5,
    },
    {
      name: "Priya Verma",
      text: "I had severe tooth pain and the team at True Smile Dental Clinic treated it quickly. The root canal treatment was smooth and completely painless.",
      rating: 5,
    },
    {
      name: "Amit Gupta",
      text: "Very clean clinic with modern equipment. The dentist made me feel comfortable throughout the treatment. I’m very happy with my smile now.",
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
              <h1 className="text-4xl lg:text-4xl xl:text-4xl mb-6">
                Specialist Orthodontic & Comprehensive Dental Care
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-8">
                Advanced braces, aligners, and complete dental treatments delivered with precision and patient-focused care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#6BBE44] text-white px-8 py-3 rounded-lg hover:bg-[#5aa838] transition-colors inline-flex items-center justify-center gap-2"
                >
                  Book Appointment
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
              Why Patients Trust Us
              {/* Why Choose Truesmiles? */}
            </h2>
            {/* <p className="text-gray-600 max-w-2xl mx-auto">
              At TrueSmiles Dental Clinic, we are dedicated to providing high-quality dental care with a compassionate and patient-focused approach. Our goal is to ensure every patient feels comfortable, confident, and well cared for during every visit.
            </p> */}
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
            {/* <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care for the whole family.
            </p> */}
            <p className="text-gray-600 max-w-2xl mx-auto">
              At TrueSmiles Dental Clinic, we offer a wide range of modern dental treatments designed to keep your smile healthy, beautiful, and confident. Our experienced dental team uses advanced technology and gentle care to provide the best treatment for every patient.
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