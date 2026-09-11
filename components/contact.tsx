'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Terminal,
} from 'lucide-react';

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
      className="relative w-full overflow-hidden bg-background text-textMain py-16 md:py-24 selection:bg-volt selection:text-black"
    >
      <div className="max-w-site mx-auto px-6 md:px-12 xl:px-16">
        <div className="p-8 md:p-14 xl:p-16 rounded-3xl liquid-glass">
          <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-6">
            <Terminal className="w-4 h-4 text-signal" />
            <span>Direct Channels</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Details */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-textMain mb-6">
                Let’s talk architecture, craft, or opportunities.
              </h2>
              <p className="text-base md:text-lg text-textMuted mb-8 leading-relaxed font-normal">
                Whether you’re interested in collaborating on challenging
                frontend problems, discussing open-source tooling, or reviewing
                senior engineering roles—my inbox is open.
              </p>

              <div className="space-y-4 font-mono text-xs md:text-sm">
                <div className="flex items-center gap-3 text-textMain">
                  <Mail className="w-4 h-4 text-signal" />
                  <a
                    href="mailto:nazrulislambhat@gmail.com"
                    className="hover:text-signal transition-colors"
                  >
                    nazrulislambhat@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-textMain">
                  <Phone className="w-4 h-4 text-signal" />
                  <a
                    href="tel:+919469444007"
                    className="hover:text-signal transition-colors"
                  >
                    +91 9469444007[cite: 1]
                  </a>
                </div>
                <div className="flex items-center gap-3 text-textMuted">
                  <MapPin className="w-4 h-4 text-signal" />
                  <span>Bengaluru, India[cite: 1]</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="p-6 md:p-8 rounded-2xl liquid-glass-subtle border border-borderGlass">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 flex flex-col items-center gap-3"
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
                    <label className="block text-textMuted mb-1.5 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-borderGlass bg-surface text-textMain focus:outline-none focus:border-signal-dim transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-textMuted mb-1.5 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-borderGlass bg-surface text-textMain focus:outline-none focus:border-signal-dim transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-textMuted mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Let's discuss frontend architecture, open source, or an engineering role..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-borderGlass bg-surface text-textMain focus:outline-none focus:border-signal-dim transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold flex items-center justify-center gap-2 hover:bg-volt hover:text-black dark:hover:bg-volt dark:hover:text-black transition-all shadow-xs disabled:opacity-50"
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
