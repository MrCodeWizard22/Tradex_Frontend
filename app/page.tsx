import { Cta } from "../components/home/cta";
import { Features } from "../components/home/features";
import { Hero } from "../components/home/hero";
import { MarketPreview } from "../components/home/market-preview";
import { Footer } from "../components/layout/footer";
import { Navbar } from "../components/layout/navbar";

export default function Home() {
  return <div className="flex min-h-screen flex-col"><Navbar /><main className="flex-1"><Hero /><MarketPreview /><Features /><Cta /></main><Footer /></div>;
}
