import { Outlet } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";

function ShardLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default ShardLayout;
