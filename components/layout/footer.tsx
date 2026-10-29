import Link from "next/link";
import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-10">
      <Container className="flex flex-col gap-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-300">Tradex</p>
          <p className="mt-1">A clearer way to explore digital markets.</p>
        </div>
        <div className="flex gap-5">
          <Link className="hover:text-white" href="/markets">Markets</Link>
          <Link className="hover:text-white" href="/login">Log in</Link>
          <Link className="hover:text-white" href="/register">Get started</Link>
        </div>
      </Container>
    </footer>
  );
}
