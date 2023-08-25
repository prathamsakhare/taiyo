import React from "react";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="h-screen w-[350px] bg-black text-white fixed">
      <div>
        <div className="mt-5">
          <Link to="/taiyo/">
            <button className="bg-blue-800 w-[95%] hover:bg-blue-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline p-3 mt-3">
              Contacts
            </button>
          </Link>
        </div>
        <div>
          <Link to="/taiyo/charts">
            <button className="bg-blue-800 w-[95%] hover:bg-blue-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline p-3 mt-3">
              Charts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
