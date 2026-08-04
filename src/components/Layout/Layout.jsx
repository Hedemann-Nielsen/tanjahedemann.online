import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LanguageToggle from "../LanguageToggle/LanguageToggle"

function Layout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
      <LanguageToggle />
    </>
  );
}

export default Layout;