import React from "react";
import logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link, Links } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-6 mt-12">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Brand Name */}
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            <h2 className="text-2xl font-bold text-primary">FreelanceHub</h2>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Connecting talented freelancers with clients worldwide. Grow your
            career or business with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <a href="#featured" className="hover:text-primary">
                Browse Tasks
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-primary">
                Top Services
              </a>
            </li>
            <li>
              <a href="#success" className="hover:text-primary">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-primary">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/privacyPolicy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/contactUs" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <p className="text-sm text-gray-500">
            Email: riajul.karim52@gmail.com
          </p>
          <div className="flex gap-4 mt-3 text-lg">
            <Link
              to="https://www.facebook.com/share/1JHcRoWsFS/"
              target="_blank"
              className="hover:text-blue-500"
            >
              <FaFacebookF size={30} />
            </Link>
            <Link
              to="https://github.com/rjriajul1"
              target="_blank"
              className="hover:text-sky-400"
            >
              <FaGithub size={30} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-10 border-t pt-4 text-gray-400">
        © {new Date().getFullYear()} FreelanceHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
