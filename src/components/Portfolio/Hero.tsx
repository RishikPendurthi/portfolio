"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code2,
  Share2,
} from "lucide-react";
import * as React from "react";

const techTags = [
  "Developer",
  "Python",
  "Web Development",
  "Machine Learning",
] as const;

export default function Hero() {
  // Web Share API with graceful fallback
  const onShare = React.useCallback(async () => {
    const shareData = {
      title: "Rishik Pendurthi — Portfolio",
      text: "Check out Rishik Pendurthi's work and projects",
      url: typeof window !== "undefined" ? window.location.href : "/",
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard ✨");
      }
    } catch (_) {
      // ignore cancellation
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90svh] md:min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background: soft grid + vignette + noise */}
      <div
        className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_30%_10%,hsl(var(--primary)/.08),transparent),radial-gradient(60rem_60rem_at_80%_70%,hsl(var(--accent)/.10),transparent)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        aria-hidden
      />
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.035] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 32 32\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.7\\' numOctaves=\\'2\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\'/></svg>')]"
        aria-hidden
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          {/* Availability badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-foreground backdrop-blur supports-[backdrop-filter]:bg-primary/10"
            role="status"
            aria-live="polite"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-75" />
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary" />
            </span>
            Available for new opportunities
          </div>

          {/* Headline */}
          <div className="mt-8 space-y-3 sm:space-y-5">
            <h1 className="mx-auto max-w-5xl text-balance text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              <span className="text-foreground">Rishik</span>{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Pendurthi
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-medium">
              Computer Science Master&apos;s Student
            </p>
          </div>

          {/* Subtext */}
          <p className="mx-auto mt-3 max-w-3xl text-pretty text-sm sm:text-base md:text-lg leading-relaxed text-foreground/80">
            Passionate about solving real-world problems with modern technology.
            I specialize in Python, machine learning, data analysis, and
            full‑stack web development to build AI‑driven applications that make
            an impact.
          </p>

          {/* Tech Tags */}
          <ul
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
            aria-label="Skills"
          >
            {techTags.map((t) => (
              <li key={t}>
                <span className="inline-flex items-center gap-1 rounded-full border bg-muted/40 px-3 py-1 text-xs sm:text-sm text-foreground transition-transform hover:-translate-y-0.5">
                  <Code2 className="h-3.5 w-3.5 text-primary" aria-hidden />
                  {t}
                </span>
              </li>
            ))}
          </ul>

          {/* Contact strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm md:text-base text-foreground/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden />
              <span>Kent, Ohio</span>
            </div>
            <a
              className="group flex items-center gap-2 transition-colors hover:text-foreground"
              href="tel:+12342962935"
              aria-label="Call +1 234 296 2935"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden />
              <span className="underline-offset-4 group-hover:underline">
                +1‑234‑296‑2935
              </span>
            </a>
            <a
              className="group flex items-center gap-2 transition-colors hover:text-foreground"
              href="mailto:rishikpendurthi136@gmail.com"
              aria-label="Email rishikpendurthi136@gmail.com"
            >
              <Mail className="h-4 w-4 text-primary" aria-hidden />
              <span className="underline-offset-4 group-hover:underline">
                rishikpendurthi136@gmail.com
              </span>
            </a>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button
              variant="default"
              size="lg"
              className="group gap-2 px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base font-medium shadow-sm hover:shadow md:active:scale-[.98]"
              asChild
            >
              <a
                href="https://github.com/RishikPendurthi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my GitHub work"
              >
                View My Work
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base font-medium"
              asChild
            >
              <a
                href="/resume.pdf"
                download="Rishik-Pendurthi-Resume.pdf"
                aria-label="Download resume"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social */}
          <div
            className="mt-4 flex justify-center gap-1 sm:gap-2"
            aria-label="Social links"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:text-primary"
              asChild
              aria-label="Open LinkedIn profile"
            >
              <a
                href="https://www.linkedin.com/in/rishik-pendurthi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" aria-hidden />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:text-primary"
              asChild
              aria-label="Open GitHub profile"
            >
              <a
                href="https://github.com/RishikPendurthi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" aria-hidden />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:text-primary"
              aria-label="Share"
              onClick={onShare}
            >
              <Share2 className="h-5 w-5" aria-hidden />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-1 motion-safe:animate-bounce">
          <span className="text-[10px] sm:text-xs text-foreground/70">
            Scroll down
          </span>
          <ArrowDown
            className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/70"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
