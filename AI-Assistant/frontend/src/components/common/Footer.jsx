import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-4">
      <div className="w-full flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        <p>© 2025 AI Assistant. All rights reserved.</p>
        <a
          href="https://github.com/NIDELKAD/AI-Assistant"
          target="_blank"
          rel="noreferrer"
          className="text-2xl"
        >
          <FaGithub className="hover:text-gray-700" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
