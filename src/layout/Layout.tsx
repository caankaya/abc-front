import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import LoginModal from "../components/LoginModal";
import CreateSequenceModal from "../components/sub-components-sequence-modal/CreateSequenceModal";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <LoginModal />
      <CreateSequenceModal />
      <Outlet />
      <Footer />
    </div>
  );
}
