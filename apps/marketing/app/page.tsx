"use client";

import { Button } from "../../../packages/ui/src";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-3xl w-full px-6 text-center">
        
        {/* Top badge */}
        <span className="inline-block mb-6 rounded-full bg-black/5 px-5 py-1 text-sm font-medium text-gray-700">
          🚀 Frontend Monorepo Project
        </span>

        {/* Main heading */}
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
          Build Faster with
          <span className="block text-black mt-2">
            Shared UI Components
          </span>
        </h1>

        {/* Sub heading */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          A modern marketing application built using a <b>Turborepo monorepo</b>,
          where multiple apps share a single, reusable UI component library.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-5">
          <Button
            text="Get Started"
            variant="primary"
            onClick={() => alert("Get Started clicked")}
          />

          <Button
            text="View Dashboard"
            variant="secondary"
            onClick={() => alert("Go to dashboard")}
          />
        </div>

        {/* Footer note */}
        <p className="mt-12 text-sm text-gray-400">
          Marketing App • Dashboard App • Shared UI Package
        </p>
      </div>
    </div>
  );
}
