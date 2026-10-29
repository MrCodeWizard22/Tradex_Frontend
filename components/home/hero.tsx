import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "../ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] py-20 sm:py-28">
      <div className="glow -right-32 top-12" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="eyebrow">A calmer trading workspace</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-7xl">
            Trade with clarity. <span className="text-accent">Stay in control.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Tradex brings your market watchlist, portfolio context, and trading workflow into one focused space built for thoughtful decisions.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/register">Get started <span aria-hidden="true" className="ml-2">↗</span></Button>
            <Link className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold text-slate-200 transition hover:border-accent/50 hover:bg-white/[0.05]" href="/markets">
              Explore markets
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">Demo interface · Market values shown are illustrative</p>
        </div>
        <TerminalPreview />
      </Container>
    </section>
  );
}

function TerminalPreview() {
  return (
    <div className="terminal-card p-4 sm:p-5" aria-label="Illustrative trading dashboard preview">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-white"><span className="size-2 rounded-full bg-accent" />Market overview</div>
        <span className="text-xs text-slate-500">DEMO DATA</span>
      </div>
      <div className="grid grid-cols-2 gap-3 py-5">
        <div><p className="text-xs text-slate-500">Portfolio value</p><p className="mt-1 text-2xl font-semibold text-white">$24,680.40</p><p className="mt-1 text-xs text-accent">+4.82% illustrative</p></div>
        <div><p className="text-xs text-slate-500">Watchlist</p><p className="mt-1 text-2xl font-semibold text-white">08 <span className="text-sm font-normal text-slate-500">assets</span></p><p className="mt-1 text-xs text-slate-400">Curated by you</p></div>
      </div>
      <div className="h-32 rounded-lg bg-[#0b1718] p-3">
        <div className="flex h-full items-end gap-1">
          {[30, 42, 35, 54, 49, 67, 58, 76, 64, 82, 72, 94].map((height, index) => <span className="flex-1 rounded-t-sm bg-accent/60" key={index} style={{ height: `${height}%` }} />)}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-3 text-sm">
        <span className="text-slate-300">BTC / USD</span><span className="font-medium text-white">$67,420.18</span><span className="text-accent">+2.14%</span>
      </div>
    </div>
  );
}
