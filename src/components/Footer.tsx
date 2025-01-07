import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-coffee text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Grounded Batteries</h3>
            <p className="text-gray-300">
              Innovative sodium-ion batteries using coffee grounds and sea salt.
              Based in La Fortuna, Costa Rica.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-eco-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-eco-light transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-eco-light transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a
                href="tel:+50661500559"
                className="flex items-center hover:text-eco-light transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +506 6150 0559
              </a>
              <a
                href="mailto:xmrtsolutions@gmail.com"
                className="flex items-center hover:text-eco-light transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                xmrtsolutions@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Grounded Batteries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};