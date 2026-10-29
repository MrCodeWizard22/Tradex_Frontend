"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-white/[0.08]">
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link className="flex items-center gap-2 text-lg font-bold tracking-tight text-white" href="/" onClick={() => setIsOpen(false)}>
          <span className="grid size-8 place-items-center rounded-lg bg-accent text-sm font-black text-[#06100d]">T</span>
          Tradex
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link className="nav-link" href="/markets">Markets</Link>
          <Link className="nav-link" href="/#features">Features</Link>
          <Link className="nav-link" href="/login">Log in</Link>
          <Button href="/register" className="min-h-10 px-4">Get started</Button>
        </div>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="rounded-lg p-2 text-slate-300 hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-accent md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-white/[0.08] px-5 py-4 md:hidden" id="mobile-navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <Link className="mobile-nav-link" href="/markets" onClick={() => setIsOpen(false)}>Markets</Link>
            <Link className="mobile-nav-link" href="/#features" onClick={() => setIsOpen(false)}>Features</Link>
            <Link className="mobile-nav-link" href="/login" onClick={() => setIsOpen(false)}>Log in</Link>
            <Button href="/register" className="mt-3 w-full">Get started</Button>
          </div>
        </div>
      )}
    </header>
  );
}
