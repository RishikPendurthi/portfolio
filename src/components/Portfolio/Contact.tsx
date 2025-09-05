"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import * as React from "react";

const Contact = () => {
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
  ];

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 bg-background overflow-hidden"
      aria-label="Contact section"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
        bg-[size:24px_24px]"
        aria-hidden
      />
      {/* Gradient blobs */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[36rem] w-[72rem]
        rounded-[9999px] bg-[radial-gradient(closest-side,rgba(0,0,0,0.05),transparent)]"
        aria-hidden
      />
      <div
        className="absolute -right-10 top-28 w-72 h-72 bg-primary/10 rounded-full blur-3xl motion-safe:animate-pulse"
        aria-hidden
      />
      <div
        className="absolute -left-8 bottom-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl motion-safe:animate-pulse motion-safe:delay-1000"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to contribute to innovative projects and collaborate on
              exciting opportunities. Let&apos;s connect and discuss how we can
              work together.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card
                  key={index}
                  className="group relative hover:shadow-lg transition-all duration-300 border-border/50 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/60 hover:-translate-y-1"
                >
                  {/* accent line */}
                  <div className="absolute left-0 top-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-primary/30 to-accent/30 rounded-t-xl" />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1">
                          {contact.label}
                        </div>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            target={
                              contact.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              contact.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-foreground font-medium hover:text-accent transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">
                            {contact.value}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <Card className="relative bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Something Amazing?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                I&apos;m currently seeking opportunities in software
                development, data analysis, or AI-driven applications.
                Let&apos;s discuss how my skills can contribute to your
                team&apos;s success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="bg-white/20 hover:bg-white/30 text-white border-white/20"
                >
                  <a href="mailto:rishikpendurthi136@gmail.com">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="bg-transparent border-white/30 text-white hover:bg-white/10"
                >
                  <a
                    href="https://www.linkedin.com/in/rishik-pendurthi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2024 Rishik Pendurthi. Built with React & Tailwind CSS.
              </p>

              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary"
                >
                  <a
                    href="https://github.com/RishikPendurthi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary"
                >
                  <a
                    href="https://www.linkedin.com/in/rishik-pendurthi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
