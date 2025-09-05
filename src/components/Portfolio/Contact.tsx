"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rishikpendurthi136@gmail.com",
      href: "mailto:rishikpendurthi136@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1-234-296-2935",
      href: "tel:+1-234-296-2935",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kent, Ohio",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "rishik-pendurthi",
      href: "https://www.linkedin.com/in/rishik-pendurthi/",
    },
  ] as const;

  return (
    <section
      id="contact"
      className="relative bg-background py-16 sm:py-20"
      aria-label="Contact section"
    >
      {/* Clean background (no mesh/blobs) */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12 text-center sm:mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Get in touch
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-foreground/85">
              Ready to collaborate on impactful work. Reach out and let’s see
              how we can build something great together.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const isExternal = !!item.href && item.href.startsWith("http");
              return (
                <Card
                  key={i}
                  className="group relative rounded-2xl border border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:bg-muted/20 hover:shadow-sm"
                >
                  {/* subtle top hairline */}
                  <div
                    aria-hidden
                    className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-primary/30 via-border to-accent/30 opacity-75"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl border border-border/60 bg-muted/30 p-2.5">
                        <Icon className="h-6 w-6 text-primary" aria-hidden />
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 text-sm text-foreground/70">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="font-medium text-foreground">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA (neutral surface with gradient accent line) */}
          <Card className="relative rounded-2xl border border-border/60 bg-background">
            <div
              aria-hidden
              className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-primary/40 via-border to-accent/40"
            />
            <CardContent className="p-8 text-center">
              <h3 className="mb-3 text-2xl font-semibold text-foreground">
                Ready to start something amazing?
              </h3>
              <p className="mx-auto mb-6 max-w-2xl text-foreground/85">
                I’m currently seeking opportunities in software development,
                data analysis, and AI-driven applications. Let’s talk about how
                I can help your team ship faster and smarter.
              </p>

              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button variant="default" size="lg" asChild>
                  <a href="mailto:rishikpendurthi136@gmail.com">
                    <Mail className="h-4 w-4" />
                    Send email
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://www.linkedin.com/in/rishik-pendurthi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="mt-12 border-t border-border/60 pt-8 text-center">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-foreground/70">
                © {new Date().getFullYear()} Rishik Pendurthi. Built with React
                & Tailwind CSS.
              </p>
              <div className="flex gap-2">
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
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full hover:text-primary"
                  aria-label="Open LinkedIn profile"
                >
                  <a
                    href="https://www.linkedin.com/in/rishik-pendurthi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
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
