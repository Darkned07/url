import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Boost from "../components/Boost";

function RootLayout() {
  return (
    <>
      <header className="bg-[#ffffff]">
        <Navbar />
      </header>
      <main className="grow max-container">
        <Outlet />
      </main>
      <Boost />
      <footer className="bg-[#232127]">
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
