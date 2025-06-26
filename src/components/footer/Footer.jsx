import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" mt-2">
      <footer className="footer grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10 max-w-7xl mx-auto">
        <aside>
          <img
            className="w-40 h-40 "
            src={logo}
            alt=""
          />

          <p className="text-2xl font-bold text-green-500">
            Freelance <span className="text-red-500">MarketPlace</span>
            <br />
            Providing reliable search since 2010
          </p>
        </aside>
        <div>
          <h6 className="footer-title">Terms & Conditions</h6>
          <ol>
            <li>
              1. Freelancers and clients are responsible for their own agreements.
            </li>
            <li>
            2. All payments should be made through the platform.
            </li>
            <li>
             2. The platform may charge a small service fee.
            </li>
            <li>
              4. Content must be legal and respectful.
            </li>
            <li>
              5. Work belongs to the freelancer until payment is made.
            </li>
            <li>
              6. We are not responsible for disputes but may help resolve them.
            </li>
          </ol>
        </div>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a href="mailto:isrj173@gmail.com">isrj173@gmail.com</a>
          <p>+088012435654</p>
         
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/?ref=homescreenpwa" target="_blank"><FaFacebook size={24} color="blue"/></a>
            <a href="https://www.youtube.com/" target="_blank"><IoLogoYoutube size={24} color="red"/></a>
            <a href="https://github.com/rjriajul1" target="_blank"><FaGithub size={24} /></a>

          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
