import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["95-R, Model Town", "Rewari, Haryana-123401"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 8397979704"],
      link: "tel:+918397979704",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@truesmiles.in"],
      link: "mailto:info@truesmiles.in",
    },
    {
      icon: MessageCircle,
      title: "Connect With Us",
      details: ["Chat Now"],
      link :"https://wa.me/8397979704?text=Hi How Can I Help You",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C4964] to-[#1a2d3f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl mb-6">Contact Us</h1>
            <p className="text-lg lg:text-xl text-gray-300">
              Get in touch with us. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#6BBE44] bg-opacity-10 rounded-full mb-4">
                  <info.icon className="" size={24} />
                </div>
                <h3 className="text-lg text-[#2C4964] mb-3">{info.title}</h3>
                <div className="space-y-1 text-gray-600 text-sm">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex}>
                      {info.link ? (
                        <a href={info.link} className="hover:text-[#6BBE44] transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Map and Additional Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h2 className="text-3xl text-[#2C4964] mb-6">Find Us</h2>
              <div className="bg-gray-200 rounded-xl h-[400px] mb-6 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3182.4298499055985!2d76.61631517548457!3d28.186054175911412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDExJzA5LjgiTiA3NsKwMzcnMDguMCJF!5e1!3m2!1sen!2sin!4v1772863041687!5m2!1sen!2sin" width={600} height={550} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  {/* <MapPin size={48} className="mx-auto mb-2" />
                  <p className="text-lg mb-2">Our Location</p>
                  <p className="text-sm px-4">
                    95-R, Model Town<br />
                    Rewari, Haryana-123401
                  </p> */}
                </div>
              </div>

              {/* Directions Info */}
              {/* <div className="bg-[#6BBE44] bg-opacity-10 mt-4 p-6 rounded-lg">
                <h3 className="text-xl text-[#2C4964] mb-2">
                  Directions
                </h3>
                <p className="text-gray-700">
                  We are located in Model Town, Rewari. Our clinic is easily accessible
                  from all parts of the city. Call us for detailed directions.
                </p>
              </div> */}
            </div>

            {/* Contact Details & Additional Info */}
            <div>
              <h2 className="text-3xl text-[#2C4964] mb-6">Get in Touch</h2>
              
              {/* Contact Details Card */}
              <div className="bg-white p-8 rounded-xl shadow-sm mb-6">
                <h3 className="text-xl text-[#2C4964] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#6BBE44] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-gray-800">95-R, Model Town</p>
                      <p className="text-gray-800">Rewari, Haryana-123401</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#6BBE44] flex-shrink-0" size={20} />
                    <a href="tel:+918397979704" className="text-gray-800 hover:text-[#6BBE44]">
                      +91 8397979704
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#6BBE44] flex-shrink-0" size={20} />
                    <a href="mailto:info@truesmiles.in" className="text-gray-800 hover:text-[#6BBE44]">
                      info@truesmiles.in
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-[#6BBE44] flex-shrink-0 mt-1" size={20} />
                    <div className="text-gray-800">
                      <p>Mon–Sat: 10 AM – 2 PM | 5 PM – 8 PM</p>
                      <p>Sun: 10 AM – 2 PM</p>
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Visit Us */}
              <div className="bg-gradient-to-br from-[#2C4964] to-[#1a2d3f] p-8 rounded-xl text-white">
                <h3 className="text-xl mb-4">Why Visit Truesmiles?</h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6BBE44] mt-1">✓</span>
                    <span>Experienced & certified dental professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6BBE44] mt-1">✓</span>
                    <span>State-of-the-art dental equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6BBE44] mt-1">✓</span>
                    <span>Comprehensive dental care services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6BBE44] mt-1">✓</span>
                    <span>Comfortable and hygienic environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6BBE44] mt-1">✓</span>
                    <span>Affordable and transparent pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#2C4964] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Do you accept walk-in appointments?",
                answer:
                  "Yes, we accept walk-in appointments whenever possible. However, we recommend scheduling an appointment in advance to reduce waiting time and ensure availability with our dentist",
              },
              {
                question: "What should I bring to my first dental appointment?",
                answer:
                  "For your first visit, please bring a valid ID proof and any previous dental records or X-rays if available. This helps our dentist understand your dental history and provide better treatment planning.",
              },
              {
                question: "Do you provide emergency dental care?",
                answer:
                  "Yes, True Smile Dental Clinic provides emergency dental care during clinic hours. If you are experiencing severe tooth pain, swelling, or a dental injury, please call us immediately at +91 8397979704 so we can assist you as soon as possible.",
              },
              {
                question: "How often should I visit the dentist?",
                answer:
                  "We recommend visiting the dentist every 6 months for routine dental check-ups and professional cleaning to maintain healthy teeth and gums.",
              },
              {
                question: "Are dental treatments painful?",
                answer:
                  "Most modern dental treatments are safe and comfortable. We use advanced technology and anesthesia techniques to ensure minimal discomfort during procedures.",
              },
              {
                question: "Do you offer teeth whitening treatments?",
                answer:
                  "Yes, we provide professional teeth whitening treatments that safely remove stains and help restore the natural brightness of your smile.",
              },
              {
                question: "Do you treat children?",
                answer:
                  "Yes, we offer pediatric dentistry services and provide gentle dental care for children in a friendly and comfortable environment.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg text-[#2C4964] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}