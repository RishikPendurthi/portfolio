"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type SectionId = "home" | "skills" | "projects" | "education" | "contact";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export default function Navigation() {
  // Local prefs detection inside effects to avoid SSR window access
  const [prefersReducedMotion, setPRM] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<SectionId>("home");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setPRM(
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ??
          false
      );
    }
  }, []);

  const scrollToSection = React.useCallback(
    (sectionId: SectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return;
      el.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      setIsOpen(false);
    },
    [prefersReducedMotion]
  );

  // Glass + shadow after slight scroll
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section observer
  React.useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    const observed: Element[] = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observed.push(el);
      }
    });

    return () => {
      observed.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Skip link */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <nav
        role="navigation"
        aria-label="Primary"
        className={[
          "fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md",
          // Match Hero brightness: slightly brighter text + subtle gradient tint
          scrolled ? "bg-background/85 shadow-sm" : "bg-background/65",
          "supports-[backdrop-filter]:bg-background/55",
        ].join(" ")}
      >
        {/* Subtle top gradient bar to echo Hero's glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/40 via-primary/10 to-primary/40"
        />

        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Brand: smaller & brighter */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 text-sm md:text-base font-medium tracking-tight text-foreground/90 hover:text-foreground transition-colors"
              aria-label="Go to Home"
            >
              {/* Optional tiny logo dot to match Hero aesthetic */}

              <span className="whitespace-nowrap">Rishik&nbsp;Pendurthi</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group relative rounded-lg px-3 py-2 text-xs md:text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    aria-current={isActive ? "page" : undefined}
                    data-active={isActive ? "true" : "false"}
                  >
                    {item.label}
                    {/* active underline */}
                    <span
                      aria-hidden
                      className={[
                        "pointer-events-none absolute inset-x-2 -bottom-[2px] h-[2px] rounded-full bg-primary/85 transition-[transform,opacity]",
                        isActive
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0 group-hover:opacity-70 group-hover:scale-x-100",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>

            {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen((s) => !s)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <Menu className="h-5 w-5" aria-hidden />
              )}
            </Button>
          </div>

          {/* Mobile Sheet */}
          <div
            id="mobile-nav"
            className={[
              "md:hidden overflow-hidden transition-[max-height,opacity]",
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="border-t border-border/50 py-2">
              <div className="flex flex-col">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={[
                        "flex items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium transition-colors",
                        isActive
                          ? "bg-accent/40 text-foreground"
                          : "text-foreground/80 hover:text-foreground",
                      ].join(" ")}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                      <span
                        aria-hidden
                        className={[
                          "ml-2 h-1.5 w-1.5 rounded-full",
                          isActive ? "bg-primary" : "bg-transparent",
                        ].join(" ")}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
