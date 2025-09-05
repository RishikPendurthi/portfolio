"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, GraduationCap, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Edu = {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  status: "In Progress" | "Completed";
  description: string;
};

type Cert = {
  title: string;
  organization: string;
  date: string;
  url?: string; // optional external credential link
};

const EDUCATION: Edu[] = [
  {
    institution: "Kent State University, Kent",
    degree: "Master of Science, Computer Science",
    period: "Aug 2024 - May 2026",
    cgpa: "3.9",
    status: "In Progress",
    description:
      "Focused on advanced computer science concepts, machine learning, and software engineering practices.",
  },
  {
    institution: "RMK Engineering College",
    degree: "Bachelor of Engineering, Computer Science",
    period: "Jul 2023 - Jan 2023",
    cgpa: "3.23",
    status: "Completed",
    description:
      "Strong foundation in computer science fundamentals, programming, and software development.",
  },
];

const CERTS: Cert[] = [
  {
    title: "Market Basket Analysis — Coding Internship",
    organization: "Suven Consultants & Technology Pvt. Ltd",
    date: "Mar 2022",
  },
  {
    title: "Advanced Software Engineering (Virtual Experience)",
    organization: "Forage",
    date: "Aug 2022",
  },
  {
    title: "Web Development Internship",
    organization: "INTERNPE",
    date: "May 2024",
  },
  {
    title: "AI Virtual Experience Program",
    organization: "Forage",
    date: "Jan 2023",
  },
  // NEW: CodeChef certificate
  {
    title: "Learn Python Programming — Certificate of Completion",
    organization: "CodeChef",
    date: "10 Jul 2025",
    url: "https://www.codechef.com/certificates/public/e8efe7f",
  },
  // NEW: Google Cloud Skills Boost public profile (use your link)
  {
    title: "Google Cloud Skills Boost — Public Profile",
    organization: "Google Cloud Skills Boost",
    date: "Ongoing",
    // If this 404s, remove the trailing 'add' at the end of the URL.
    url: "https://www.cloudskillsboost.google/public_profiles/6224939d-658b-4419-b12f-3bb7808196b7add",
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative bg-background py-16 sm:py-20"
      aria-label="Education and certifications"
    >
      {/* Clean background — keep meshes just for Hero */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12 text-center sm:mb-14">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 text-[11px] sm:text-xs text-foreground/85">
              <GraduationCap className="h-4 w-4 text-primary" />
              Education & Certifications
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Education & Certifications
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-foreground/85">
              Academic foundation and continuous learning in computer science.
            </p>
          </div>

          {/* Education timeline */}
          <div className="mb-14 sm:mb-16">
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="relative md:pl-6">
              {/* vertical line */}
              <div
                className="absolute left-[10px] top-0 hidden h-full w-[2px] bg-border/70 md:block"
                aria-hidden
              />
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative md:pl-6">
                    {/* dot */}
                    <div
                      className="absolute left-0 top-8 hidden h-5 w-5 rounded-full border-2 border-primary bg-background md:block"
                      aria-hidden
                    />
                    <Card className="group relative rounded-2xl border border-border/60 bg-background transition-all duration-300 hover:bg-muted/20 hover:shadow-sm">
                      <div
                        aria-hidden
                        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-primary/30 via-border to-accent/30 opacity-75"
                      />
                      <CardHeader>
                        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                          <div>
                            <CardTitle className="mb-1 text-xl">
                              {edu.degree}
                            </CardTitle>
                            <CardDescription className="text-base font-medium text-foreground">
                              {edu.institution}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col items-start gap-2 md:items-end">
                            <Badge
                              variant="outline"
                              className={`w-fit border ${
                                edu.status === "Completed"
                                  ? "border-primary/30 bg-primary/10 text-primary"
                                  : "border-accent/30 bg-accent/10 text-accent"
                              }`}
                            >
                              {edu.status}
                            </Badge>
                            <div className="flex items-center gap-2 text-sm text-foreground/75">
                              <CalendarDays className="h-4 w-4" aria-hidden />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-sm text-foreground/70">
                            CGPA
                          </span>
                          <span className="text-lg font-semibold text-accent">
                            {edu.cgpa}
                          </span>
                        </div>
                        <p className="text-foreground/80">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {CERTS.map((cert, idx) => (
                <Card
                  key={idx}
                  className="group relative rounded-2xl border border-border/60 bg-background transition-all duration-300 hover:bg-muted/20 hover:shadow-sm"
                >
                  <div
                    aria-hidden
                    className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-primary/30 via-border to-accent/30 opacity-75"
                  />
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg leading-tight">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="font-medium text-foreground">
                      {cert.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between gap-3 pt-0">
                    <div className="flex items-center gap-2 text-sm text-foreground/75">
                      <CalendarDays className="h-4 w-4" aria-hidden />
                      <span>{cert.date}</span>
                    </div>

                    {cert.url ? (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                        aria-label={`Open credential: ${cert.title}`}
                      >
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View credential
                        </a>
                      </Button>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Optional footnote */}
            {/* <p className="mt-6 text-center text-xs text-foreground/70">
              * Full credential IDs available upon request.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
