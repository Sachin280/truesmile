import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2C4964] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl mb-4">Truesmiles</h3>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted partner for comprehensive dental care. We provide exceptional
              service with a gentle touch.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#6BBE44] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#6BBE44] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#6BBE44] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#6BBE44] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#6BBE44] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#6BBE44] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-[#6BBE44] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#6BBE44] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>General Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Orthodontics</li>
              <li>Dental Implants</li>
              <li>Teeth Whitening</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>95-R, Model Town, Rewari, Haryana-123401</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+918397979704" className="hover:text-[#6BBE44]">+91 8397979704</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@truesmiles.in" className="hover:text-[#6BBE44]">info@truesmiles.in</a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Clock size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <div>Mon-Fri: 8AM - 6PM</div>
                  <div>Sat: 9AM - 3PM</div>
                  <div>Sun: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Truesmiles Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}