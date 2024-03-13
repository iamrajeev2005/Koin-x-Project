import Chart from "./components/Chart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Rightsidebar from "./components/Rightsidebar";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-zinc-200 overflow-x-hidden">
      <Header />
      <div className="px-12 max-md:px-5">
        <Chart />
      </div>
      <Footer />
      <div className="md:hidden">
        <Rightsidebar />
      </div>
    </div>
  );
}
