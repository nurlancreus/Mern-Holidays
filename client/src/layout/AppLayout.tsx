import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="container mx-auto flex-1 py-10">
        <Outlet />
      </div>
    </div>
  );
}
