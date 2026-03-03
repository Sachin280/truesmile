import { Smile, Sparkles, Stethoscope, Baby, Shield, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, exams, fillings, and preventive treatments.",
      image: "https://images.unsplash.com/photo-1758205308181-d52b41e00cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjaGVja3VwJTIwZXhhbWluYXRpb258ZW58MXx8fHwxNzcyMTY4NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Regular Checkups & Cleanings",
        "Digital X-Rays",
        "Cavity Fillings",
        "Gum Disease Treatment",
        "Root Canal Therapy",
      ],
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our aesthetic dental treatments and procedures.",
      image: "https://images.unsplash.com/photo-1769559893692-c6d0623bf8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGRlbnRpc3RyeSUyMHZlbmVlcnN8ZW58MXx8fHwxNzcyMTY3NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Teeth Whitening",
        "Porcelain Veneers",
        "Dental Bonding",
        "Smile Makeovers",
        "Gum Contouring",
      ],
    },
    {
      icon: Smile,
      title: "Orthodontics",
      description: "Straighten your teeth and correct bite issues with modern orthodontic solutions.",
      image: "https://images.unsplash.com/photo-1645118286859-0cf9c5c784b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RvbnRpY3MlMjBicmFjZXMlMjBzbWlsZXxlbnwxfHx8fDE3NzIwOTQwODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Traditional Braces",
        "Clear Aligners",
        "Invisalign",
        "Retainers",
        "Bite Correction",
      ],
    },
    {
      icon: Shield,
      title: "Dental Implants",
      description: "Permanent tooth replacement solution that looks and functions like natural teeth.",
      image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50cyUyMHByb2NlZHVyZXxlbnwxfHx8fDE3NzIxNTY4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Single Tooth Implants",
        "Multiple Implants",
        "Implant-Supported Dentures",
        "All-on-4 Treatment",
        "Bone Grafting",
      ],
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a fun and friendly environment.",
      image: "https://images.unsplash.com/photo-1758205308106-5760d0227cc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBkZW50aXN0cnklMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzIxNjg1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Children's Cleanings",
        "Fluoride Treatments",
        "Dental Sealants",
        "Early Orthodontic Evaluation",
        "Cavity Prevention Education",
      ],
    },
    {
      icon: Clock,
      title: "Emergency Dental Care",
      description: "Fast, effective treatment for dental emergencies and urgent care needs.",
      image: "https://images.unsplash.com/photo-1643660527078-743fc7c9f857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlbWVyZ2VuY3klMjBjYXJlfGVufDF8fHx8MTc3MjA4NTE3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Same-Day Appointments",
        "Toothache Relief",
        "Broken Tooth Repair",
        "Lost Filling/Crown Replacement",
        "Dental Trauma Treatment",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C4964] to-[#1a2d3f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl mb-6">Our Services</h1>
            <p className="text-lg lg:text-xl text-gray-300">
              Comprehensive dental care services for patients of all ages
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#6BBE44] bg-opacity-10 rounded-full mb-4">
                    <service.icon className="text-[#6BBE44]" size={28} />
                  </div>
                  <h2 className="text-3xl text-[#2C4964] mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-[#6BBE44] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl text-[#2C4964] mb-4">Insurance & Payment</h2>
              <p className="text-gray-600 mb-6">
                We accept most major dental insurance plans and offer flexible payment
                options to make quality dental care accessible to everyone.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#6BBE44] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Most PPO insurance plans accepted</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#6BBE44] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Flexible payment plans available</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#6BBE44] rounded-full mt-2 flex-shrink-0"></div>
                  <span>CareCredit financing options</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#6BBE44] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Senior and family discounts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl text-[#2C4964] mb-4">Advanced Technology</h2>
              <p className="text-gray-600 mb-6">
                We invest in the latest dental technology to provide you with the most
                effective and comfortable treatment experience.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#6BBE44] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Digital X-rays with reduced radiation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#6BBE44] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Intraoral cameras for detailed diagnostics</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#6BBE44] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Laser dentistry for minimally invasive procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#6BBE44] rounded-full mt-2 flex-shrink-0"></div>
                  <span>3D imaging for precise treatment planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C4964] to-[#6BBE44] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Schedule a consultation and let our experts help you find the right treatment
            plan for your needs.
          </p>
          <a
            href="/contact"
            className="bg-white text-[#2C4964] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
