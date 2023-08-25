import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SideNav from "./components/SideNav";
import ContactPage from "./components/ContactPage";
import Charts from "./components/Charts";

function App() {
  return (
    <div className="App flex ">
      <Router>
        <div className="sm:collapse">
          <SideNav />
        </div>
        <div className="w-[85%] ml-[350px] sm:w-full sm:ml-0">
          <div className="bg-black w-full py-2  md:collapse">
            <Link to="/taiyo/">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Contacts
              </button>
            </Link>
            <Link to="/taiyo/charts">
              <button className="bg-blue-500 ml-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Charts
              </button>
            </Link>
          </div>
          <Routes>
            <Route path="/taiyo/" element={<ContactPage />} />
            <Route path="/taiyo/charts" element={<Charts />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
