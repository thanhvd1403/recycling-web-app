import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import NavBar from "./nav-bar";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <NavBar />
        <div>
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
