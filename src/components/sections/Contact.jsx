function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Let’s work together
        </h2>

        <p className="text-gray-600 mb-8">
          I’m open to frontend roles, freelance work, and collaborative projects.
          If you have an idea or opportunity, let’s talk.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:malakus4@gmail.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Send an email
          </a>

          <a
            href="https://github.com/malakus4"
            target="_blank"
            className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/malak-udom-a6187257/"
            target="_blank"
            className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
