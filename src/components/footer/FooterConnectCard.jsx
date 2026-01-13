import { useState } from "react";

function FooterConnectCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full rounded-xl bg-surface p-5 shadow-sm">
      
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="text-sm flex w-full items-center justify-between section-subtitle lg:cursor-default"
      >
        Let's Connect
      </div>

      {/* Content */}
      <div
        className={`
          mt-4 flex flex-wrap gap-4 text-sm text-gray-600
          transition-all duration-300
          ${open ? "flex" : "hidden"}
          lg:flex
        `}
      >
        <a href="#" className="hover:text-gray-900">GitHub</a>
        <a href="#" className="hover:text-gray-900">LinkedIn</a>
        <a href="#" className="hover:text-gray-900">TikTok</a>
        <a href="#" className="hover:text-gray-900">YouTube</a>
      </div>
    </div>
  );
}

export default FooterConnectCard;
