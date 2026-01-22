import { Github, Linkedin, Twitter } from "lucide-react";

function FooterLinks() {
  return (
    <div>
      <h3 className="footer-title mb-4 hidden lg:inline-block">Links</h3>

      <ul
        className="
          flex 
          justify-around
          gap-10
          sm:justify-start
          sm:gap-10
          lg:gap-2
          lg:flex-col 
          footer-text
          
        "
      >
        <li>
          <a
            href="https://github.com/malakus4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-900"
            aria-label="GitHub"
          >
            <Github size={18} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/malakus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-900"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-900"
            aria-label="Twitter"
          >
            <Twitter size={18} />
            <span className="hidden sm:inline">Twitter</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterLinks;
