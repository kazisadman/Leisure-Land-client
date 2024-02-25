import { Outlet } from "react-router-dom";
import Header from "../components/header";

function Root() {
  return (
    <div className="max-w-[1440px] mx-auto font-poppins">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default Root;
