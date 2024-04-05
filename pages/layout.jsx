import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Sidebar from "./layouts/side";
import { useStore } from "@/store/store";

export default function Layout({ children }) {
  const openbar = useStore((state) => state.bar);

  return (
    <>
      <main className="font-primary">
        <Sidebar />
        <div className={` ${openbar ? "ml-[80px]" : "ml-[300px]"}`}>
          <Header />
          <div className="p-4">
            <div className="">{children}</div>
            <div className="my-4">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
