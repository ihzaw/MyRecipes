import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Container = () => {
  return (
    <div className="flex">
      <div className="w-1/12">
        <Sidebar />
      </div>
      <div className="w-11/12 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Container;