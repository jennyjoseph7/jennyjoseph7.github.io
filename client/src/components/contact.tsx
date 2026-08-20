import { useState } from "react";
import { Mail, Phone, MapPin, Check, Copy, Send, Linkedin, ExternalLink, MessageCircle, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactChannels = [
    {
      id: "email",
      label: "Email",
      value: "jennyjosephksj7@gmail.com",
      href: "mailto:jennyjosephksj7@gmail.com",
      displayValue: "jennyjosephksj7@gmail.com",
      tag: "Direct Inbox",
      actionLabel: "Send Email",
      icon: Mail,
      accent: {
        bg: "bg-blue-500/10 dark:bg-blue-500/[0.08]",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-500/20",
        hoverBorder: "hover:border-blue-500/40",
      },
    },
    {
      id: "phone",
      label: "Phone & WhatsApp",
      value: "+919035937158",
      displayValue: "+91 90359 37158",
      href: "https://wa.me/919035937158",
      tag: "Direct & WhatsApp",
      actionLabel: "Chat on WhatsApp",
      icon: MessageCircle,
      accent: {
        bg: "bg-emerald-500/10 dark:bg-emerald-500/[0.08]",
        text: "text-emerald-600 dark:text-emerald-400",
        border: "border-emerald-500/20",
        hoverBorder: "hover:border-emerald-500/40",
      },
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/jenny-joseph-k-b6a50a230",
      displayValue: "linkedin.com/in/jenny-joseph-k",
      href: "https://www.linkedin.com/in/jenny-joseph-k-b6a50a230",
      tag: "Professional Network",
      actionLabel: "View Profile",
      icon: Linkedin,
      accent: {
        bg: "bg-indigo-500/10 dark:bg-indigo-500/[0.08]",
        text: "text-indigo-600 dark:text-indigo-400",
        border: "border-indigo-500/20",
        hoverBorder: "hover:border-indigo-500/40",
      },
    },
    {
      id: "location",
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      displayValue: "Bengaluru, Karnataka, India",
      tag: "IST (UTC +5:30) • Remote / Hybrid",
      actionLabel: "Base Location",
      icon: MapPin,
      accent: {
        bg: "bg-amber-500/10 dark:bg-amber-500/[0.08]",
        text: "text-amber-600 dark:text-amber-400",
        border: "border-amber-500/20",
        hoverBorder: "hover:border-amber-500/40",
      },
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
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-3">
              Let's Connect
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto">
              Direct channels for AI engineering roles, technical architecture inquiries, and collaboration.
            </p>
          </div>

          {/* Main Card Container */}
          <div className="relative">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-purple-500/10 rounded-3xl blur-2xl pointer-events-none opacity-60 dark:opacity-40" />

            <div className="relative bg-white dark:bg-[#0D111A] border border-zinc-200 dark:border-white/[0.08] shadow-sm rounded-2xl overflow-hidden">
              {/* Header Status Bar */}
              <div className="px-6 py-4 bg-zinc-50 dark:bg-[#0F1420] border-b border-zinc-200 dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    Open to Engineering Opportunities
                  </span>
                  <span className="hidden sm:inline-block text-zinc-300 dark:text-zinc-700">•</span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    Applied AI & Full-Stack
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Response: &lt; 24 hours</span>
                </div>
              </div>

              {/* Grid of Contact Channel Cards */}
              <div className="p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {contactChannels.map((channel) => {
                    const IconComponent = channel.icon;

                    return (
                      <div
                        key={channel.id}
                        className={`group p-4 rounded-xl bg-zinc-50 dark:bg-[#070A10] border border-zinc-200/80 dark:border-white/[0.06] ${channel.accent.hoverBorder} hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex flex-col justify-between`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className={`p-1.5 rounded-lg ${channel.accent.bg} ${channel.accent.text} border ${channel.accent.border}`}>
                                <IconComponent className="h-4 w-4" />
                              </div>
                              <span className="text-xs font-bold text-zinc-900 dark:text-white">
                                {channel.label}
                              </span>
                            </div>

                            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                              {channel.tag}
                            </span>
                          </div>

                          <div className="text-xs sm:text-sm font-mono text-zinc-800 dark:text-zinc-200 font-medium mb-3 truncate">
                            {channel.displayValue}
                          </div>
                        </div>

                        {/* Action Buttons Row */}
                        <div className="flex items-center justify-between pt-3 border-t border-zinc-200/60 dark:border-white/[0.04]">
                          {channel.href ? (
                            <a
                              href={channel.href}
                              target={channel.id === "email" ? undefined : "_blank"}
                              rel={channel.id === "email" ? undefined : "noopener noreferrer"}
                              className={`inline-flex items-center gap-1 text-xs font-medium ${channel.accent.text} hover:underline`}
                            >
                              <span>{channel.actionLabel}</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ) : (
                            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                              {channel.actionLabel}
                            </span>
                          )}

                          <button
                            onClick={() => handleCopy(channel.id, channel.value)}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-white dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.06] hover:border-zinc-300 dark:hover:border-white/20 transition-all cursor-pointer"
                            title={`Copy ${channel.label}`}
                          >
                            {copiedField === channel.id ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Primary Action Row */}
                <div className="pt-6 border-t border-zinc-200 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                    <Sparkles className="h-4 w-4 text-emerald-500" />
                    <span>Based in Bengaluru • Available for On-Site, Hybrid, or Remote roles</span>
                  </div>

                  <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    <Button
                      asChild
                      className="flex-1 sm:flex-initial bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-xs font-semibold rounded-xl px-5 h-10 gap-2 cursor-pointer shadow-md"
                    >
                      <a href="mailto:jennyjosephksj7@gmail.com">
                        <Send className="h-3.5 w-3.5" />
                        Send Direct Email
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      asChild
                      className="flex-1 sm:flex-initial border-zinc-300 dark:border-white/10 bg-white dark:bg-white/[0.04] hover:bg-zinc-100 dark:hover:bg-white/[0.08] text-xs font-medium rounded-xl px-4 h-10 text-zinc-800 dark:text-zinc-200 shadow-xs"
                    >
                      <a
                        href="https://www.linkedin.com/in/jenny-joseph-k-b6a50a230"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-1.5 h-3.5 w-3.5" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}