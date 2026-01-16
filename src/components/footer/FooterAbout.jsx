import profileImg from "../../assets/images/profile-74.webp";

function FooterAbout() {
  return (
    <div className="">
      <h3 className="footer-title">About</h3>

      <div className="flex items-start gap-3">
        <img
          src={profileImg}
          alt="Malak Udom"
          width="80"
          height="80"
          loading="lazy"
          decoding="async"
          className="mt-1 rounded-full object-cover shadow-sm"
        />

        <div className="space-y-2">
          <p className="max-w-md footer-text">
            I'm a frontend developer focused on building clean, responsive,
            and maintainable web interfaces using modern tools like React
            and Tailwind CSS.
          </p>

          <p className="max-w-md footer-text">
            I enjoy turning abstract problems into well-structured,
            user-friendly solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterAbout;
