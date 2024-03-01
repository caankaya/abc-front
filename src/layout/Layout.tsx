import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import CreateSequenceModal from "../components/sub-components-sequence-modal/CreateSequenceModal";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <CreateSequenceModal />
      <Outlet />
      <Footer />
    </div>
  );
}
