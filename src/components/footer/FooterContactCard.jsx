import { useState } from "react";

function FooterContactCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full rounded-xl bg-surface p-5 shadow-sm">
      
      {/* Header (clickable only on mobile) */}
      <div
        onClick={() => setOpen(!open)}
        className="footer-title flex w-full items-center justify-between 
        lg:cursor-default"
      >
        Contact
      </div>

      {/* Content */}
      <div
        className={`
          mt-4 space-y-2 footer-text
          transition-all duration-300
          ${open ? "block" : "hidden"}
          lg:block
        `}
      >
        <p>I'm open to frontend roles and freelance work.</p>
        <p>📞 08138329589</p>
        <a
          href="mailto:malakus4@gmail.com"
          className="block hover:text-gray-900"
        >
          malakus4@gmail.com
        </a>
        <p>📍 Abuja, Nigeria</p>
      </div>
    </div>
  );
}

export default FooterContactCard;
