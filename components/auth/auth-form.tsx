"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const isRegister = mode === "register";
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");
    if (!email.includes("@")) return setError("Enter a valid email address.");
    if (password.length < 8) return setError("Password must be at least 8 characters.");
    if (isRegister && password !== form.get("confirmPassword")) return setError("Passwords do not match.");
    setError("This demo form is ready for backend authentication integration.");
  }

  return <form className="space-y-5" onSubmit={handleSubmit} noValidate>
    <label className="field-label" htmlFor="email">Email address<input className="field-input" id="email" name="email" required type="email" autoComplete="email" /></label>
    <label className="field-label" htmlFor="password">Password<input className="field-input" id="password" name="password" required minLength={8} type="password" autoComplete={isRegister ? "new-password" : "current-password"} /></label>
    {isRegister && <label className="field-label" htmlFor="confirmPassword">Confirm password<input className="field-input" id="confirmPassword" name="confirmPassword" required minLength={8} type="password" autoComplete="new-password" /></label>}
    {error && <p aria-live="polite" className={error.startsWith("This") ? "rounded-lg border border-accent/20 bg-accent/10 p-3 text-sm text-accent" : "rounded-lg border border-rose-300/20 bg-rose-300/10 p-3 text-sm text-rose-200"}>{error}</p>}
    <Button className="w-full" type="submit">{isRegister ? "Create account" : "Log in"}</Button>
    <p className="text-center text-sm text-slate-500">{isRegister ? "Already have an account?" : "New to Tradex?"} <Link className="font-semibold text-accent hover:text-accent-bright" href={isRegister ? "/login" : "/register"}>{isRegister ? "Log in" : "Create one"}</Link></p>
  </form>;
}
