import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto bg-sky-50 py-5">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <p className="text-gray-500">&copy;Shoppin - All Rights Reserved</p>
          <ul className="flex space-x-2">
            <li>
              <a href="#" target="_blank" className="hover:text-pink-600">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="hover:text-pink-600">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="hover:text-pink-600">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
