import { MarketPreview } from "../../components/home/market-preview";
import { PageFrame } from "../../components/layout/page-frame";

export default function MarketsPage() {
  return <PageFrame><div className="pt-14 sm:pt-20"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><p className="eyebrow">Markets</p><h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">Find your next angle.</h1><p className="mt-5 max-w-xl text-lg text-slate-400">Browse a calm, focused market view. Values below are illustrative demo data while live feeds are being built.</p></div><MarketPreview /></div></PageFrame>;
}
