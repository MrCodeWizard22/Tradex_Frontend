import Link from "next/link";
import { Container } from "../ui/container";

const instruments = [
  { symbol: "BTC / USD", name: "Bitcoin", price: "$67,420.18", change: "+2.14%", positive: true },
  { symbol: "ETH / USD", name: "Ethereum", price: "$3,482.09", change: "+1.68%", positive: true },
  { symbol: "SOL / USD", name: "Solana", price: "$164.72", change: "-0.42%", positive: false },
];

export function MarketPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="eyebrow">Market pulse</p><h2 className="section-title">A focused view of what matters.</h2></div>
          <Link className="text-sm font-semibold text-accent hover:text-accent-bright" href="/markets">View all markets <span aria-hidden="true">→</span></Link>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025]">
          <div className="hidden grid-cols-[1.5fr_1fr_1fr] border-b border-white/[0.08] px-5 py-3 text-xs uppercase tracking-[0.16em] text-slate-500 sm:grid"><span>Instrument</span><span>Illustrative price</span><span>24h change</span></div>
          {instruments.map((instrument) => <div className="grid grid-cols-2 gap-3 border-b border-white/[0.06] px-5 py-5 last:border-0 sm:grid-cols-[1.5fr_1fr_1fr] sm:items-center" key={instrument.symbol}><div><p className="font-semibold text-white">{instrument.symbol}</p><p className="mt-1 text-xs text-slate-500">{instrument.name}</p></div><div><span className="text-xs uppercase tracking-wider text-slate-500 sm:hidden">Price · </span><span className="font-medium text-slate-200">{instrument.price}</span></div><div className={instrument.positive ? "text-accent" : "text-rose-300"}><span className="text-xs uppercase tracking-wider text-slate-500 sm:hidden">Change · </span>{instrument.change}</div></div>)}
        </div>
        <p className="mt-4 text-xs text-slate-600">Sample values for demonstration only. Tradex does not display live market data yet.</p>
      </Container>
    </section>
  );
}
