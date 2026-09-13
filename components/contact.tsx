'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Terminal,
} from 'lucide-react';
import CopyPill from '@/components/ui/copy-pill';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error('Submission failed', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-background text-textMain pt-8 md:pt-12 pb-16 md:pb-24 selection:bg-volt selection:text-black"
    >
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="p-8 md:p-12 xl:p-14 rounded-3xl liquid-glass border border-borderGlass">
          {/* Section Eyebrow */}
          <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-2.5">
            <Terminal className="w-4 h-4 text-signal" />
            <span>Direct Channels</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column: Details */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-textMain mb-5 leading-tight">
                Let’s talk architecture, craft, or opportunities.
              </h2>
              <p className="text-base md:text-lg text-textMuted mb-8 leading-relaxed font-normal">
                Whether you’re interested in collaborating on challenging
                frontend problems, discussing open-source tooling, or reviewing
                senior engineering roles—my inbox is open.
              </p>

              {/* Channels with 1-Click Clipboard Feedback */}
              <div className="space-y-3 font-mono text-xs md:text-sm">
                <div>
                  <CopyPill
                    value="nazrulislambhat@gmail.com"
                    label="email address"
                    icon={Mail}
                  />
                </div>

                <div>
                  <CopyPill
                    value="+91 9469444007"
                    label="phone number"
                    icon={Phone}
                  />
                </div>

                <div className="flex items-center gap-3 text-textMuted pt-1">
                  <div className="w-8 h-8 rounded-lg border border-borderGlass bg-surface/80 flex items-center justify-center text-signal">
                    <MapPin className="w-4 h-4 text-signal shrink-0" />
                  </div>
                  <span>Bengaluru / Srinagar, IN</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="p-6 md:p-8 rounded-2xl liquid-glass-subtle border border-borderGlass/60">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 flex flex-col items-center gap-3"
                >
                  <CheckCircle2 className="w-10 h-10 text-signal" />
                  <h3 className="font-bold text-lg text-textMain">
                    Message Received
                  </h3>
                  <p className="text-xs text-textMuted font-mono max-w-xs">
                    Thanks for reaching out! I typically respond within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 text-xs font-mono"
                >
                  <div>
                    <label className="block text-textMuted mb-1.5 uppercase tracking-wider text-[11px]">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-borderGlass bg-surface/80 text-textMain focus:outline-hidden focus:border-signal-dim transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-textMuted mb-1.5 uppercase tracking-wider text-[11px]">
                      Email
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-borderGlass bg-surface/80 text-textMain focus:outline-hidden focus:border-signal-dim transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-textMuted mb-1.5 uppercase tracking-wider text-[11px]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Let's discuss frontend architecture, open source, or an engineering role..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-borderGlass bg-surface/80 text-textMain focus:outline-hidden focus:border-signal-dim transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold flex items-center justify-center gap-2 hover:bg-volt hover:text-black dark:hover:bg-volt dark:hover:text-black transition-all shadow-2xs disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Send Transmission</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
