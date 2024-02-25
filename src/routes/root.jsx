import { Outlet } from "react-router-dom";
import Header from "../components/header";
import axios from "axios";

function Root() {
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true;
  return (
    <div className="max-w-[1440px] mx-auto font-poppins">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default Root;
