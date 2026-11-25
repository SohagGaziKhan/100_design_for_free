const config = globalThis.__CONFIG__ ?? {};
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [notice, setNotice] = useState("");
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  const mode = config.variant;
  const c = config.colors;
  const split = mode === 2 || mode === 3 || mode === 8;
  const glass = mode === 4;
  const centered = !split;
  function complete() {
    if (mode === 9 && step === 1) { setStep(2); return; }
    if (mode === 5 && !/^\d{6}$/.test(code)) { setNotice("Enter the six-digit verification code."); return; }
    setNotice(mode === 6 ? `Password reset instructions are on their way to ${email}.` : mode === 5 ? "Your code has been verified." : `You're signed in as ${email}.`);
  }
  function submit(event) { event.preventDefault(); complete(); }
  const panel = <div className={"w-full max-w-md rounded-2xl p-6 sm:p-8 " + (glass ? "border border-white/40 bg-white/70 shadow-2xl backdrop-blur-xl" : split ? "bg-white" : "border border-stone-200 bg-white shadow-sm")}>
    <div className="mb-7"><span className="grid size-10 place-items-center rounded-xl text-sm font-semibold text-white" style={{ backgroundColor: c.accent }}>{config.brand[0]}</span><p className="mt-5 text-xs font-medium uppercase tracking-[.14em] text-stone-400">{config.brand} ACCOUNT</p><h1 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900">{mode === 5 ? "Check your inbox" : mode === 6 ? "Reset your password" : mode === 9 && step === 2 ? "Name your workspace" : config.headline}</h1><p className="mt-2 text-sm leading-6 text-stone-500">{mode === 5 ? "Enter the 6-digit code we sent to your email address." : mode === 6 ? "We'll send you a secure link to choose a new password." : mode === 9 && step === 2 ? "You can invite your team after your workspace is ready." : config.description}</p></div>
    {notice && <p role="status" className="mb-4 rounded-lg px-3 py-2.5 text-xs leading-5" style={{ backgroundColor: c.surface, color: c.ink }}>{notice}</p>}
    {mode === 7 && <div className="mb-5 grid gap-2"><button type="button" onClick={() => setNotice("Google sign-in is ready to connect.")} className="rounded-lg border border-stone-200 px-4 py-3 text-xs font-medium text-stone-700"><span className="mr-2 font-semibold">G</span>Continue with Google</button><button type="button" onClick={() => setNotice("Apple sign-in is ready to connect.")} className="rounded-lg border border-stone-200 px-4 py-3 text-xs font-medium text-stone-700"><span className="mr-2 font-semibold">●</span>Continue with Apple</button><div className="flex items-center gap-3 py-1 text-[10px] text-stone-400"><span className="h-px flex-1 bg-stone-200" />OR USE EMAIL<span className="h-px flex-1 bg-stone-200" /></div></div>}
    {mode === 9 && <div className="mb-5 flex gap-2" aria-label="Registration progress"><span className="h-1.5 flex-1 rounded-full" style={{ backgroundColor: c.accent }} /><span className="h-1.5 flex-1 rounded-full" style={{ backgroundColor: step === 2 ? c.accent : c.surface }} /></div>}
    <form onSubmit={submit} className="space-y-4">
      {mode === 9 && step === 1 && <label className="block text-xs font-medium text-stone-700">Your name<input required autoComplete="name" placeholder="Alex Morgan" className="mt-2 w-full rounded-lg border border-stone-200 px-3 py-3 text-sm outline-none focus:border-stone-400" /></label>}
      {mode === 9 && step === 2 && <label className="block text-xs font-medium text-stone-700">Workspace name<input required placeholder="Studio North" className="mt-2 w-full rounded-lg border border-stone-200 px-3 py-3 text-sm outline-none focus:border-stone-400" /></label>}
      {mode !== 5 && (mode !== 9 || step === 1) && <label className="block text-xs font-medium text-stone-700">{mode === 8 ? "Organization email" : "Email address"}<input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={mode === 8 ? "you@company.com" : "you@example.com"} className="mt-2 w-full rounded-lg border border-stone-200 px-3 py-3 text-sm outline-none focus:border-stone-400" /></label>}
      {mode === 5 && <label className="block text-xs font-medium text-stone-700">Verification code<input required name="code" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} value={code} onChange={(event) => setCode(event.target.value)} placeholder="000000" className="mt-2 w-full rounded-lg border border-stone-200 px-3 py-3 text-center font-mono text-lg tracking-[.45em] outline-none focus:border-stone-400" /></label>}
      {(![5, 6].includes(mode) && (mode !== 9 || step === 2)) && <label className="block text-xs font-medium text-stone-700"><span className="flex items-center justify-between"><span>Password</span>{mode === 0 && <a href="#" className="font-normal" style={{ color: c.accent }}>Forgot password?</a>}</span><span className="relative mt-2 block"><input required type={visible ? "text" : "password"} autoComplete={mode === 9 ? "new-password" : "current-password"} minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="At least 8 characters" className="w-full rounded-lg border border-stone-200 px-3 py-3 pr-14 text-sm outline-none focus:border-stone-400" /><button type="button" onClick={() => setVisible(!visible)} className="absolute right-3 top-3 text-[10px] text-stone-500">{visible ? "Hide" : "Show"}</button></span></label>}
      {(mode === 0 || mode === 2 || mode === 3 || mode === 8) && <label className="flex items-center gap-2 text-xs text-stone-500"><input type="checkbox" className="accent-stone-800" />{mode === 2 ? "Trust this device for 30 days" : mode === 8 ? "Keep this session active" : "Remember me"}</label>}
      <button type="button" onClick={(event) => { if (event.currentTarget.form.reportValidity()) complete(); }} className="w-full rounded-lg py-3 text-sm font-medium text-white transition hover:opacity-90" style={{ backgroundColor: c.accent }}>{mode === 5 ? "Verify code" : mode === 6 ? "Send reset link" : mode === 9 ? step === 1 ? "Continue" : "Create workspace" : mode === 3 ? "Sign in securely" : mode === 8 ? "Continue to workspace" : "Sign in"}</button>
    </form>
    {mode === 5 && <button onClick={() => setNotice("A fresh code has been sent to your email.")} className="mt-4 w-full text-center text-xs" style={{ color: c.accent }}>Resend code</button>}
    {mode === 6 && <button onClick={() => setNotice("Return to the sign-in page when you have your password.")} className="mt-4 w-full text-center text-xs text-stone-500">Back to sign in</button>}
    {![5, 6, 9].includes(mode) && <p className="mt-6 text-center text-xs text-stone-500">New to {config.brand}? <button onClick={() => setNotice("Account creation is ready to connect.")} className="font-medium" style={{ color: c.accent }}>Create an account</button></p>}
    {mode === 8 && <p className="mt-5 text-center text-[10px] leading-5 text-stone-400">By continuing, you agree to your organization's security policies.</p>}
  </div>;
  return <div className="grid min-h-screen" style={{ backgroundColor: mode === 4 ? c.surface : "#f7f6f3", gridTemplateColumns: split ? "minmax(0,1fr) minmax(0,1fr)" : "1fr" }}>
    {split && <aside className="relative hidden flex-col justify-between overflow-hidden p-10 text-white md:flex lg:p-14" style={{ backgroundColor: c.ink }}><a href="#" className="flex items-center gap-2 font-semibold"><span className="grid size-8 place-items-center rounded-lg text-xs text-white" style={{ backgroundColor: c.accent }}>{config.brand[0]}</span>{config.brand}</a><div className="relative z-[1] max-w-lg"><p className="text-xs uppercase tracking-[.2em] text-white/50">A considered workspace</p><p className="mt-5 text-3xl font-medium leading-tight tracking-tight">“{config.headline}”</p><p className="mt-5 max-w-sm text-sm leading-6 text-white/65">{config.description}</p><div className="mt-8 space-y-3">{config.features.map((feature) => <p key={feature} className="flex items-center gap-3 text-xs text-white/75"><span className="grid size-5 place-items-center rounded-full text-[10px]" style={{ backgroundColor: c.accent }}>✓</span>{feature}</p>)}</div></div><p className="text-xs text-white/45">© {new Date().getFullYear()} {config.brand}. Thoughtfully made.</p><div className="absolute -bottom-28 -right-20 size-80 rounded-full border-[1px] border-white/10" /><div className="absolute -bottom-16 -right-8 size-56 rounded-full border-[1px] border-white/10" /></aside>}
    <main className={"flex min-h-screen items-center justify-center p-5 sm:p-8 " + (centered ? "mx-auto w-full max-w-2xl" : "")}>{panel}</main>
  </div>;
}
