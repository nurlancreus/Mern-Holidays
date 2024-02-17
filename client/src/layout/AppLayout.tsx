import { Outlet } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <div className="container mx-auto flex-1 py-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
