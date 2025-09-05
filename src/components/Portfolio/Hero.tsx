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

const Hero = () => {
  const techTags = [
    "Developer",
    "Python",
    "Web Development",
    "Machine Learning",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90svh] md:min-h-screen flex items-center justify-center
                 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0
                   bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
                   bg-[size:24px_24px]"
        aria-hidden
      />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b
                   from-background to-transparent opacity-60"
        aria-hidden
      />

      {/* Animated gradient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl
                   motion-safe:animate-pulse"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl
                   motion-safe:animate-pulse motion-safe:delay-1000"
        aria-hidden
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8">
            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2
                         bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium
                         border border-accent/20 backdrop-blur-sm"
              role="status"
              aria-live="polite"
            >
              <span className="w-2 h-2 bg-accent rounded-full motion-safe:animate-pulse" />
              Available for new opportunities
            </div>

            {/* Headline */}
            <div className="space-y-4 sm:space-y-6">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight
                           leading-tight"
              >
                <span className="text-foreground">Rishik</span>{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Pendurthi
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
                Computer Science Master&apos;s Student
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Passionate about solving real-world problems with modern
              technology. I specialize in Python, machine learning, data
              analysis, and full-stack web development to build AI-driven
              applications that make an impact.
            </p>

            {/* Tech Pill Tags */}
            <div
              className="flex flex-wrap justify-center gap-2"
              aria-label="Skills"
            >
              {techTags.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-muted/50 text-sm rounded-full border"
                >
                  <Code2 className="w-3 h-3 text-primary" aria-hidden />
                  <span>{tech}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div
              className="flex flex-wrap justify-center gap-x-6 gap-y-2
                         text-sm md:text-base text-muted-foreground"
              aria-label="Contact information"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" aria-hidden />
                <span>Kent, Ohio</span>
              </div>
              <a
                className="flex items-center gap-2 hover:text-foreground transition-colors"
                href="tel:+12342962935"
                aria-label="Call +1 234 296 2935"
              >
                <Phone className="w-4 h-4 text-primary" aria-hidden />
                <span>+1-234-296-2935</span>
              </a>
              <a
                className="flex items-center gap-2 hover:text-foreground transition-colors"
                href="mailto:rishikpendurthi136@gmail.com"
                aria-label="Email rishikpendurthi136@gmail.com"
              >
                <Mail className="w-4 h-4 text-primary" aria-hidden />
                <span>rishikpendurthi136@gmail.com</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {/* View My Work → GitHub */}
              <Button
                variant="default"
                size="lg"
                className="group gap-2 px-5 sm:px-6 py-4 sm:py-5 text-sm sm:text-base font-medium"
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

              {/* Download Resume (public/resume.pdf) */}
              <Button
                variant="outline"
                size="lg"
                className="gap-2 px-5 sm:px-6 py-4 sm:py-5 text-sm sm:text-base font-medium"
                asChild
              >
                <a
                  href="/resume.pdf"
                  download="Rishik-Pendurthi-Resume.pdf"
                  aria-label="Download resume"
                >
                  <Mail className="w-4 h-4" aria-hidden />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex gap-1 sm:gap-2 justify-center"
              aria-label="Social links"
            >
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:text-primary"
                aria-label="Open LinkedIn profile"
              >
                <a
                  href="https://www.linkedin.com/in/rishik-pendurthi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" aria-hidden />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:text-primary"
                aria-label="Open GitHub profile"
              >
                <a
                  href="https://github.com/RishikPendurthi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" aria-hidden />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-primary"
                aria-label="Share button"
                onClick={() => console.log("Share button clicked")}
              >
                <Share2 className="w-5 h-5" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] sm:text-xs text-muted-foreground">
            Scroll down
          </span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
