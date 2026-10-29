import { Container } from "../ui/container";

const features = [
  ["01", "Trading, without the noise", "A considered foundation for order workflows and market decisions as the trading engine evolves."],
  ["02", "Wallets with context", "Keep balances and portfolio activity in view, ready for future account and funding integrations."],
  ["03", "Insights that inform", "Turn market signals into a clearer personal workflow with space for watchlists and research."],
];

export function Features() {
  return <section className="border-y border-white/[0.08] bg-[#0b1215] py-20 sm:py-28" id="features"><Container><p className="eyebrow">Built for the next move</p><h2 className="section-title max-w-2xl">The foundation for a more intentional trading habit.</h2><div className="mt-12 grid gap-4 md:grid-cols-3">{features.map(([number, title, description]) => <article className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-accent/30" key={number}><span className="text-sm font-semibold text-accent">{number}</span><h3 className="mt-12 text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p></article>)}</div></Container></section>;
}
