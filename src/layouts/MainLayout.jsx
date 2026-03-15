import Header from "../components/sections/Header";
import Nav from "../components/sections/Nav";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import BackToTop from "../components/ui/BackToTop";

function MainLayout() {
  return (
    <>
      {/* <Header/> */}
      <Nav />

      {/* Page contents renders here */}

      <main>
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default MainLayout;
