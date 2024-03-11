import Chart from "./components/Chart";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-zinc-200 overflow-hidden">
      <Header />
      <div className="px-12 max-md:px-5">
        <Chart />
      </div>
      <Footer />
    </div>
  );
}
