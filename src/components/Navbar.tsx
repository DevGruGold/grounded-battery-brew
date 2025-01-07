import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-coffee font-bold text-xl">
            Grounded Batteries
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-coffee transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-coffee transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-coffee transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-coffee" />
            ) : (
              <Menu className="h-6 w-6 text-coffee" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-coffee transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-coffee transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-coffee transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};