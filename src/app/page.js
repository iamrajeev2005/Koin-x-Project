import Chart from "./components/Chart";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-zinc-200 min-h-screen w-screen">
      <Header />
      <div className="px-12">
        <Chart />
      </div>
    </div>
  );
}
