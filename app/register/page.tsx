import { AuthForm } from "../../components/auth/auth-form";
import { PageFrame } from "../../components/layout/page-frame";

export default function RegisterPage() {
  return <PageFrame><div className="mx-auto max-w-md px-5 py-16 sm:py-24"><p className="eyebrow">Open your workspace</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">Create your Tradex account</h1><p className="mt-3 text-slate-400">This is a frontend-only form for now. No account or password is sent anywhere.</p><div className="terminal-card mt-8 p-6 sm:p-8"><AuthForm mode="register" /></div></div></PageFrame>;
}
