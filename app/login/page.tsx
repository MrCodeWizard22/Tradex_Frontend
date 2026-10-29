import { AuthForm } from "../../components/auth/auth-form";
import { PageFrame } from "../../components/layout/page-frame";

export default function LoginPage() {
  return <PageFrame><div className="mx-auto max-w-md px-5 py-16 sm:py-24"><p className="eyebrow">Welcome back</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">Log in to Tradex</h1><p className="mt-3 text-slate-400">Access to your workspace will be connected to the Tradex backend in a future milestone.</p><div className="terminal-card mt-8 p-6 sm:p-8"><AuthForm mode="login" /></div></div></PageFrame>;
}
