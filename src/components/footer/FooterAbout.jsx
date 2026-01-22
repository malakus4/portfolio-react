import profileImg from "/profile-74.webp";

function FooterAbout() {
  return (
    <div>
      <h3 className="footer-title mb-4">About</h3>

      <div className="flex items-start gap-4">
        <img
          src={profileImg}
          alt="Malak Udom, Frontend Developer"
          loading="lazy"
          decoding="async"
          className="
            w-12 h-12 sm:w-14 sm:h-14
            rounded-full object-cover
            shadow-sm flex-shrink-0
          "
        />

        <div className="space-y-3">
          <p className="footer-text max-w-md">
            Frontend Developer specializing in scalable React applications.
            I build clean, accessible user interfaces and help teams ship reliable features faster.
          </p>

          <address className="not-italic space-y-1 text-sm text-gray-700">
            <p>
              <span className="sr-only">Email:</span>
              <a
                href="mailto:malakus4@gmail.com"
                className="hover:text-primary transition-colors"
              >
                malakus4@gmail.com
              </a>
            </p>
            <p>
              <span className="sr-only">Phone:</span>
              <a
                href="tel:+2348138329589"
                className="hover:text-primary transition-colors"
              >
                +234 813 832 9589
              </a>
            </p>
          </address>
        </div>
      </div>
    </div>
  );
}

export default FooterAbout;
