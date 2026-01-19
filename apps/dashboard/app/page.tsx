"use client";

import { Button } from "../../../packages/ui/src";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-sky-100 via-slate-100 to-indigo-100">

      {/* Soft background glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

      {/* Main Card */}
      <div className="relative w-full max-w-4xl rounded-3xl 
        bg-white/80 backdrop-blur-xl p-12 shadow-2xl border border-white">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-semibold text-zinc-900 tracking-tight">
            Dashboard
          </h1>
          <p className="mt-2 text-zinc-600">
            Manage your application settings and shared UI components.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-6">
          <Stat title="Apps" value="2" />
          <Stat title="Shared Components" value="5+" />
          <Stat title="Status" value="Active" highlight />
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

        {/* Actions */}
        <div>
          <h2 className="text-lg font-medium text-zinc-800 mb-4">
            Quick Actions
          </h2>

          <div className="flex gap-5 mt-2">
            <Button
              text="Save Changes"
              onClick={() => alert("Changes saved")}
            />

            <Button
              text="Back to Marketing"
              variant="secondary"
              onClick={() =>
                (window.location.href = "http://localhost:3000")
              }
            />
          </div>
        </div>

      </div>
    </div>
  );
}

/* Premium Stat Card */
function Stat({
  title,
  value,
  highlight,
}: {
  title: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 text-center transition-all duration-300
      hover:-translate-y-1 hover:shadow-lg
      ${
        highlight
          ? "bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200"
          : "bg-white border border-zinc-200"
      }`}
    >
      <p className="text-sm text-zinc-500">{title}</p>
      <p className="mt-2 text-3xl font-semibold text-zinc-900">
        {value}
      </p>
    </div>
  );
}
