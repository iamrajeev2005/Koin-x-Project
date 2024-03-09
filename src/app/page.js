import Chart from "./components/Chart";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-zinc-200 overflow-x-hidden">
      <Header />
      <div className="px-12">
        <Chart />
      </div>
    </div>
  );
}
