import { useState } from "react";

function Contact() {
  const email = "malakus4@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email");
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Let’s work together
        </h2>

        <p className="text-gray-600 mb-8">
          I’m open to frontend roles, freelance work, and collaborative projects.
          If you have an idea or opportunity, let’s talk.
      
            {/* Visible email  */}
            <span className="text-sm text-blue-500 mt-4"> Email: <span className="font-medium">{email}</span>
            </span>
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          {/* Mailto */}
          <a
            href={`mailto:${email}`}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Send an email
          </a>

          {/* Copy to clipboard */}
          <button
            onClick={handleCopy}
            className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
          >
            {copied ? "Email copied ✅" : "Copy email"}
          </button>

            <div><a
            href="https://www.linkedin.com/in/malak-udom-a6187257/"
            target="_blank"
            className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
          >
            LinkedIn
          </a></div>
        </div>

        
      </div>
      
    </section>
  );
}

export default Contact;
