import { Outlet } from "react-router";
import Header from "../Header";

export default function HeaderAndFooterLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
