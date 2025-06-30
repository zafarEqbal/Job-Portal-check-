import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">JobPortal</h1>
          <p className="text-sm text-gray-400">
            Helping you connect with top companies and land your dream job.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-white">Company</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4 text-white">Resources</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4 text-white">Follow Us</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
