import { Button } from "../ui/button";
import { Container } from "../ui/container";

export function Cta() {
  return <section className="py-20 sm:py-28"><Container><div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-accent/[0.06] px-6 py-14 text-center sm:px-12"><div className="glow left-1/2 top-0 -translate-x-1/2" /><div className="relative"><p className="eyebrow">Start with a clearer view</p><h2 className="mx-auto mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">Your trading workspace starts here.</h2><p className="mx-auto mt-5 max-w-lg text-slate-400">Create your Tradex account to explore the interface. Authentication integration is coming next.</p><Button className="mt-8" href="/register">Create an account <span aria-hidden="true" className="ml-2">↗</span></Button></div></div></Container></section>;
}
