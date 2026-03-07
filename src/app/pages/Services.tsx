import { Smile, Sparkles, Stethoscope, Baby, Shield, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { ArrowRight, CheckCircle, Star, Calendar } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Metal Braces",
      description: "Metal Braces orthodontic treatment ka ek common aur effective type hai jo teeth ko straight aur properly align karne ke liye use hota hai.",
      image: "https://images.unsplash.com/photo-1626736903650-2289a3b32ed8?q=80&w=1224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ceramic Braces",
      description: "Ceramic Braces orthodontic treatment ka ek modern type hai jo teeth ko straighten karne ke liye use hota hai. Ye tooth-colored ya clear brackets se bane hote hain, isliye ye metal braces ki comparison me kam visible hote hain.",
      image: "https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Clear Aligners",
      description: "Clear Aligners ek modern orthodontic treatment hai jo teeth ko straighten aur align karne ke liye use hota hai. Ye transparent removable trays hote hain jo teeth par fit hote hain aur gradually unhe correct position me move karte hain.",
      image: "https://plus.unsplash.com/premium_photo-1677174625986-cf521afd7c8c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Retainers",
      description: "Retainers orthodontic treatment ka final step hote hain jo braces ya clear aligners ke baad teeth ko apni new position me stable rakhne ke liye use kiye jate hain.",
      image: "https://images.unsplash.com/photo-1611690061248-5f8f327e4551?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Space Management",
      description: "Space Management orthodontic treatment ka ek important part hai jo specially children ke teeth development me use hota hai. Iska purpose mouth me proper space maintain karna hota hai taaki permanent teeth sahi position me grow ho saken.",
      image: "https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=1271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const servicescosmetic = [
    {
      title: "Teeth Whitening",
      description: "Teeth Whitening ek popular cosmetic dental treatment hai jo teeth par pade stains aur discoloration ko remove karke smile ko brighter aur more attractive banata hai.",
      image: "https://images.unsplash.com/photo-1664529845836-433c172142ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // image: "https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T3J0aG9kb250aWMlMjBDYXJlJTIwJUUyJTgwJTkzJTIwQnJhY2VzJTIwJTI2JTIwQWxpZ25lcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Smile Designing",
      description: "Smile Designing ek advanced cosmetic dental treatment hai jo teeth ke shape, color, alignment aur overall appearance ko improve karke ek perfect and confident smile create karta hai.",
      image: "https://plus.unsplash.com/premium_photo-1677174625986-cf521afd7c8c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Dental Veneers",
      description: "Dental Veneers ek cosmetic dental treatment hai jisme teeth ke front surface par thin porcelain ya composite shells lagaye jate hain. Ye treatment teeth ke color, shape, size aur alignment ko improve karke ek natural aur attractive smile create karta hai.",
      image: "https://images.unsplash.com/photo-1660737216886-f44008e5c9fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const servicespreventive = [
    {
      title: " Dental Check-ups",
      description: "Dental Check-ups regular dental examinations hote hain jo teeth aur gums ki overall health ko monitor karne ke liye kiye jate hain. Regular check-ups se dental problems ko early stage me detect aur treat kiya ja sakta hai.",
      image: "https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T3J0aG9kb250aWMlMjBDYXJlJTIwJUUyJTgwJTkzJTIwQnJhY2VzJTIwJTI2JTIwQWxpZ25lcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Fluoride Treatment",
      description: "Fluoride Treatment ek preventive dental procedure hai jo teeth ko strong banane aur cavities se protect karne ke liye kiya jata hai. Fluoride ek natural mineral hai jo tooth enamel ko strengthen karta hai aur tooth decay ke risk ko reduce karta hai.",
      image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50cyUyMHByb2NlZHVyZXxlbnwxfHx8fDE3NzIxNTY4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Oral Hygiene Counseling",
      description: "Oral Hygiene Counseling ek preventive dental service hai jisme dentist patients ko proper brushing, flossing aur daily oral care habits ke baare me guide karta hai. Iska purpose teeth aur gums ko healthy rakhna aur dental problems ko prevent karna hota hai.",
      image: "https://images.unsplash.com/photo-1645118286859-0cf9c5c784b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RvbnRpY3MlMjBicmFjZXMlMjBzbWlsZXxlbnwxfHx8fDE3NzIwOTQwODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];
  const servicesgeneral = [
    {
      title: "Dental Fillings",
      description: "Dental Fillings ek common dental treatment hai jo cavities (tooth decay) ko repair karne ke liye use hota hai. Is treatment me dentist tooth ke damaged part ko clean karke us jagah ko special filling material se fill karta hai taaki tooth fir se strong aur functional ho jaye.",
      image: "https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=1271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Teeth Cleaning (Scaling & Polishing)",
      description: "Teeth Cleaning (Scaling & Polishing) ek professional dental procedure hai jo teeth se plaque, tartar, aur stains remove karne ke liye kiya jata hai. Ye treatment gums ko healthy banata hai aur teeth ko clean aur shiny appearance deta hai.",
      image: "https://images.unsplash.com/photo-1611690061822-b707a67bfebb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Root Canal Treatment",
      description: "Root Canal Treatment (RCT) ek dental procedure hai jo infected ya damaged tooth ko save karne ke liye kiya jata hai. Is treatment me tooth ke andar ki infected pulp ko remove karke tooth ko clean, disinfect aur seal kiya jata hai.",
      image: "https://plus.unsplash.com/premium_photo-1674179075498-0aa74bc607e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Extractions",
      description: "Tooth Extraction ek dental procedure hai jisme severely damaged, infected, ya problematic tooth ko safely remove kiya jata hai. Jab tooth ko repair karna possible nahi hota, tab extraction oral health ko protect karne ke liye recommended hota hai.",
      image: "https://plus.unsplash.com/premium_photo-1722873143643-ea42854f97d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Wisdom Tooth Management",
      description: "Wisdom Tooth Management dental treatment ka ek important part hai jo third molars (wisdom teeth) se related problems ko diagnose aur treat karne ke liye kiya jata hai. Wisdom teeth usually 17–25 years ki age me erupt hote hain aur kai cases me pain, swelling ya infection cause kar sakte hain.",
      image: "https://images.unsplash.com/photo-1645118286859-0cf9c5c784b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RvbnRpY3MlMjBicmFjZXMlMjBzbWlsZXxlbnwxfHx8fDE3NzIwOTQwODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
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


      {/* Services Orthodontic Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#2C4964] mb-4">
              Orthodontic Treatments
            </h2>
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
          </div>
        </div>
      </section>


      {/* Services General Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#2C4964] mb-4">
              General Dentistry
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {servicesgeneral.map((service, index) => (
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
          </div>
        </div>
      </section>


      {/* Services Cosmetic Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#2C4964] mb-4">
              Cosmetic Dentistry
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {servicescosmetic.map((service, index) => (
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
          </div>
        </div>
      </section>


      {/* Services Preventive Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#2C4964] mb-4">
              Preventive Dentistry
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {servicespreventive.map((service, index) => (
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
