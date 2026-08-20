import { useState } from "react";
import { Mail, Phone, MapPin, Check, Copy, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactChannels = [
    {
      id: "email",
      label: "Email",
      value: "jennyjosephksj7@gmail.com",
      href: "mailto:jennyjosephksj7@gmail.com",
      tag: "PRIMARY INBOX",
    },
    {
      id: "phone",
      label: "Mobile",
      value: "+91-9035937158",
      href: "tel:+919035937158",
      tag: "DIRECT / WHATSAPP",
    },
    {
      id: "location",
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      tag: "BASE // HYBRID / REMOTE",
    },
  ];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-3">
              Get in Touch
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto">
              Direct communication channels for engineering roles, technical inquiries, and project discussions.
            </p>
          </div>

          {/* Clean Engineering Contact Terminal Card */}
          <div className="bg-white dark:bg-[#0D111A] border border-zinc-200 dark:border-white/[0.08] shadow-sm rounded-2xl overflow-hidden">
            {/* Header Bar */}
            <div className="px-6 py-4 bg-zinc-100 dark:bg-[#0F1420] border-b border-zinc-200 dark:border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-mono text-zinc-800 dark:text-zinc-300 font-semibold">
                  Jenny Joseph K · Direct Communication
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                Status: Available
              </span>
            </div>

            {/* Content Rows */}
            <div className="p-6 sm:p-8 space-y-3 font-mono text-xs sm:text-sm">
              {contactChannels.map((row, index) => (
                <div
                  key={row.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-[#070A10] border border-zinc-200 dark:border-white/[0.06] hover:border-zinc-300 dark:hover:border-white/15 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-zinc-400 dark:text-zinc-500 text-xs w-6 shrink-0">
                      0{index + 1}.
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-400 font-medium w-20 shrink-0">
                      {row.label}:
                    </span>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="text-zinc-900 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-white transition-colors font-medium truncate"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="text-zinc-900 dark:text-zinc-200 font-medium truncate">
                        {row.value}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      {row.tag}
                    </span>

                    <button
                      onClick={() => handleCopy(row.id, row.value)}
                      className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
                      title={`Copy ${row.label}`}
                    >
                      {copiedField === row.id ? (
                        <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}

              {/* Action Bar */}
              <div className="pt-6 border-t border-zinc-200 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 dark:text-zinc-400">
                <p className="text-zinc-500 font-mono">Response time: Usually within 24 hours</p>

                <Button
                  size="sm"
                  asChild
                  className="w-full sm:w-auto bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-mono text-xs rounded-xl px-6 h-10 gap-2 font-semibold cursor-pointer shadow-sm"
                >
                  <a href="mailto:jennyjosephksj7@gmail.com">
                    <Send className="h-3.5 w-3.5" />
                    Open Email Client
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}