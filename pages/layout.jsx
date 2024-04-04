import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Sidebar from "./layouts/side";

export default function Layout({ children }) {
  return (
    <>
      <main className="font-primary">
        <Sidebar />
        <div className="ml-[300px]">
          <Header />
          <div className="p-4">{children}</div>
          <div className="p-8">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
