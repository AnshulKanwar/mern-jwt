import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../context/AuthContext";

const Root = () => {
  return (
    <AuthContextProvider>
      <div className="bg-[#f0f1f4] text-[#475569] min-h-screen pb-36">
        <Navbar />
        <Outlet />
      </div>
    </AuthContextProvider>
  );
};

export default Root;
