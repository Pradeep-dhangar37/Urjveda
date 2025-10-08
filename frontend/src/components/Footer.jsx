import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const whatsappNumber = '919589810302'; // Replace with your number (no + or spaces)
  const emailAddress = 'contact@mycompany.com';
  return (
    <footer className="bg-white border-t shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 text-gray-700">
          {/* Company Info */}
          <div>
            <h1 className="text-xl font-bold text-gray-800 mb-2">MyCompany</h1>
            <p className="text-sm">Providing quality services since 2023.</p>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold mb-2">Contact Us</h2>
            <ul className="text-sm space-y-1">
              <li><span className="font-medium">Address:</span> 123 Main St, Indore, India</li>
              <li><span className="font-medium">Phone:</span> +91 98765 43210</li>
              <li><span className="font-medium">Email:</span> {emailAddress}</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold mb-2">Quick Links</h2>
            <ul className="text-sm space-y-1">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#products" className="hover:underline">Products</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social / Action Buttons */}
          <div>
            <h2 className="font-semibold mb-2">Reach Out</h2>
            <div className="flex space-x-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-600 hover:underline"
              >
                <FaWhatsapp className="text-2xl" />
                <span></span>
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center space-x-2 text-blue-600 hover:underline"
              >
                <FaEnvelope className="text-2xl" />
                <span></span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 border-t pt-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
