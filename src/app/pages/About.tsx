import { Award, Heart, Users, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Patient-First Care",
      description: "At True Smile Dental Clinic, our patients always come first. We focus on providing a comfortable, friendly, and stress-free dental experience while ensuring the best possible treatment outcomes.",
    },
    {
      icon: Award,
      title: "Quality & Excellence",
      description: "We are committed to delivering high-quality dental care using modern techniques and the highest professional standards to ensure safe and effective treatments.",
    },
    {
      icon: Users,
      title: "Compassion & Trust",
      description: "We believe in building long-term relationships with our patients by treating everyone with honesty, care, and respect.",
    },
    {
      icon: Target,
      title: "Modern Dentistry",
      description: "We continuously adopt advanced dental technologies and updated treatment methods to provide more accurate, comfortable, and efficient dental care.",
    },
  ];

  const team = [
    {
      name: "Dr. Stela Kapoor",
      role: "General Dentist",
      description: "10+ years of experience in dental care.",
    },
    {
      name: "Dr. Rachit Batra",
      role: "Cosmetic Dentist",
      description: "Specialist in smile makeovers and aesthetic dentistry.",
    },
    {
      name: "Dr. Rekha",
      role: "Orthodontist",
      description: "Expert in braces and clear aligner treatments.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C4964] to-[#1a2d3f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl mb-6">About Truesmiles</h1>
            <p className="text-lg lg:text-xl text-gray-300">
              Building healthy smiles and lasting relationships since 2005
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl text-[#2C4964] mb-6">
                Doctor Introduction
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Dr. Stela Kapoor is a specialist orthodontist with advanced training in the diagnosis and correction of dental and facial irregularities. She completed her Master’s degree in Orthodontics where she was awarded a Gold Medal for academic and clinical excellence.
                </p>
                <p>
                  With strong clinical training in both routine and complex orthodontic treatments, she is committed to delivering ethical, evidence-based dental care. Her expertise includes braces, aligner therapy, and management of complex orthodontic conditions.
                </p>
                <p>
                  She has also received specialized exposure to cleft lip and palate orthodontic management, allowing her to contribute to multidisciplinary care for craniofacial patients.
                </p>
                <p>
                  Her vision is to make high-quality dental care accessible while maintaining the highest standards of clinical excellence.

                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2UlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcyMTY4NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern dental office"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#2C4964] mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at True Smile Dental Clinic
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-[#6BBE44] bg-opacity-10 rounded-full mb-4">
                  <value.icon className="text-[#6BBE44]" size={32} />
                </div> */}
                <h3 className="text-xl text-[#2C4964] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#2C4964] mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your oral health
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gradient-to-br from-[#2C4964] to-[#6BBE44]"></div>
                <div className="p-6">
                  <h3 className="text-xl text-[#2C4964] mb-1">{member.name}</h3>
                  <p className="text-[#6BBE44] mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1756699279701-99e1fd273517?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMTY4NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dental team"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C4964] to-[#6BBE44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl mb-2">20+</div>
              <div className="text-gray-200">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl mb-2">15K+</div>
              <div className="text-gray-200">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl mb-2">98%</div>
              <div className="text-gray-200">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl mb-2">25+</div>
              <div className="text-gray-200">Expert Staff</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
