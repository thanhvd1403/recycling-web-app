import Footer from "../components/footer";
import Meta from "../components/meta";
import NavigationBar from "./navbar";
import AppBar from "@mui/material/ToolBar";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <div id="back-to-top-anchor" color="transparent"></div>
        <NavigationBar />
        <div>
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
