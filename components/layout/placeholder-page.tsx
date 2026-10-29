import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { PageFrame } from "./page-frame";

export function PlaceholderPage({ eyebrow, title, description, action = "/register", actionLabel = "Get started" }: { eyebrow: string; title: string; description: string; action?: string; actionLabel?: string }) {
  return <PageFrame><Container className="flex min-h-[65vh] items-center py-16"><div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">{title}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">{description}</p><div className="mt-8"><Button href={action}>{actionLabel} <span aria-hidden="true" className="ml-2">↗</span></Button></div><p className="mt-5 text-xs text-slate-600">This surface is a planned product area and is not connected to backend services yet.</p></div></Container></PageFrame>;
}
