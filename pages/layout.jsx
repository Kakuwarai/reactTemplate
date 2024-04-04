import Header from "./layouts/header";
import Footer from "./layouts/footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-primary">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
