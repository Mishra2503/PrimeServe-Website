"use client";

import React, { useState } from "react";
import { Send, Check } from "lucide-react";
import { submitLead } from "@/lib/lead-webhook";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setSending(true);
    await submitLead("footer-newsletter", { email });
    setSending(false);
    setSubscribed(true);
  }

  if (subscribed) {
    return (
      <div className="flex items-center gap-2 text-sm text-brand-tealLight">
        <Check className="h-4 w-4 shrink-0" />
        You&apos;re subscribed. Thanks!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 min-w-0 h-10 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/40 px-3 focus:outline-none focus:ring-2 focus:ring-brand-teal"
      />
      <button
        type="submit"
        disabled={sending}
        className="h-10 px-4 rounded-xl bg-brand-teal hover:bg-brand-tealLight text-white text-sm font-semibold flex items-center gap-1.5 transition-colors shrink-0 disabled:opacity-60"
      >
        <Send className="h-3.5 w-3.5" />
        {sending ? "..." : "Subscribe"}
      </button>
    </form>
  );
}
