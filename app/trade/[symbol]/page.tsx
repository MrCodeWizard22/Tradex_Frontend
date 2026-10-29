import { Button } from "../../../components/ui/button";
import { Container } from "../../../components/ui/container";
import { PageFrame } from "../../../components/layout/page-frame";

export const instant = false;

export default async function TradePage({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;
  const displaySymbol = decodeURIComponent(symbol).toUpperCase();
  return <PageFrame><Container className="py-14 sm:py-20"><p className="eyebrow">Trading workspace</p><div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><h1 className="text-5xl font-semibold tracking-tight text-white">{displaySymbol}</h1><p className="mt-3 text-slate-400">Charting and order tools will be connected here in a future milestone.</p></div><Button href="/markets" variant="secondary">Back to markets</Button></div><div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_.6fr]"><div className="terminal-card flex min-h-80 items-center justify-center p-8 text-center"><div><span className="text-4xl text-accent">⌁</span><p className="mt-4 font-semibold text-white">Chart preview coming soon</p><p className="mt-2 text-sm text-slate-500">Live price data is not connected.</p></div></div><div className="terminal-card p-6"><p className="text-sm font-semibold text-white">Order ticket</p><p className="mt-3 text-sm leading-6 text-slate-500">Order submission is intentionally disabled until the trading API is available.</p><Button className="mt-6 w-full" variant="secondary" disabled>Place order</Button></div></div></Container></PageFrame>;
}
