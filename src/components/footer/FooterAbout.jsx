import profileImg from "/malak-udom-frontend-developer.webp";

function FooterAbout() {
  return (
    <div >
      <h3 className="footer-title mb-4">About</h3>

     
      <div className="block"> 
        <img
          src={profileImg}
          alt="Malak Udom - Frontend Developer Portfolio"
          loading="lazy"
          decoding="async"
          className="
            float-left mr-4 sm:mr-10
            my-2
            w-16 h-16 sm:w-20 sm:h-20
            rounded-full object-cover
            shadow-sm
          "
        />

        <div className="space-y-3">
          <p className="footer-text max-w-lg">
            I'm a Frontend Developer based in Abuja, Nigeria.
            
          </p>
          <p className="footer-text max-w-lg">I build clean, accessible user interfaces and help teams ship reliable features faster.</p>

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
        
        <div className="clear-both"></div>
      </div>
    </div>
  );
}

export default FooterAbout;