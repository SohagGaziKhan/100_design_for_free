import { useState } from "react";
export default function App() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);
  function submit(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setErr("Enter a valid email address.");
    if (pw.length < 8) return setErr("Password must be at least 8 characters.");
    setErr(""); setDone(true);
  }
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <aside className="hidden flex-col justify-between bg-teal-800 p-10 text-teal-50 md:flex"><span className="font-bold">Northwind</span><p className="text-2xl">"Everything our team needs, in one quiet place."</p></aside>
      <main className="flex items-center justify-center bg-stone-50 p-6">
        <form onSubmit={submit} className="w-full max-w-sm space-y-4">
          <h1 className="text-3xl font-bold text-stone-900">Welcome back</h1>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-lg border border-stone-300 px-3 py-2.5" />
          <div className="relative">
            <input value={pw} onChange={(e) => setPw(e.target.value)} type={show ? "text" : "password"} placeholder="Password" className="w-full rounded-lg border border-stone-300 px-3 py-2.5" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-2.5 text-sm text-teal-700">{show ? "Hide" : "Show"}</button>
          </div>
          {err && <p className="text-sm text-red-600">{err}</p>}
          {done && <p className="text-sm text-teal-700">Signed in as {email}.</p>}
          <button className="w-full rounded-lg bg-teal-700 py-2.5 font-medium text-white hover:bg-teal-800">Sign in</button>
        </form>
      </main>
    </div>
  );
}
