import FooterAbout from "./FooterAbout";
import FooterLinks from "./FooterLinks";
import FooterCopyright from "./FooterCopyright";

function Footer() {
  return (
    <footer className="bg-base-200  py-16">
      {/* About + Links */}
      <div className="container-page py-12 grid gap-10 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2">
          <FooterAbout />
        </div>
        <FooterLinks />
      </div>

      <FooterCopyright />
    </footer>
  );
}

export default Footer;
