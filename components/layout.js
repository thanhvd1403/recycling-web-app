import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import NavBar from "./nav-bar";
import AppBar from "@mui/material/ToolBar";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <div id="back-to-top-anchor" />
        <NavBar />
        <div>
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
