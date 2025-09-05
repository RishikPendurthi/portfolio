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
import { CalendarDays, GraduationCap, Award } from "lucide-react";

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
    title: "Market Basket Analysis Coding Internship",
    organization: "Suven Consultants & Technology Pvt. Ltd",
    date: "Mar 2022",
  },
  {
    title: "Advanced Software Engineering",
    organization: "Global Teach - Forage",
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
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-20 sm:py-24 bg-background overflow-hidden"
      aria-label="Education and certifications"
    >
      {/* Background grid (matches Hero/Skills/Projects) */}
      <div
        className="absolute inset-0
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
        bg-[size:24px_24px]"
        aria-hidden
      />
      {/* Soft gradient blobs */}
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs sm:text-sm bg-muted/40 border-border/50 mb-4">
              <GraduationCap className="w-4 h-4 text-primary" />
              Education & Certifications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Education & Certifications
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and continuous learning in computer science.
            </p>
          </div>

          {/* Education (timeline on md+) */}
          <div className="mb-14 sm:mb-16">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="relative md:pl-6">
              {/* timeline line */}
              <div
                className="hidden md:block absolute left-[10px] top-0 bottom-0 w-[2px] bg-border/70"
                aria-hidden
              />
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative md:pl-6">
                    {/* timeline dot */}
                    <div
                      className="hidden md:block absolute left-0 top-8 w-5 h-5 rounded-full bg-background border-2 border-primary"
                      aria-hidden
                    />
                    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/60">
                      {/* subtle top accent line */}
                      <div className="absolute left-0 top-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-primary/30 to-accent/30 rounded-t-xl" />
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl mb-1">
                              {edu.degree}
                            </CardTitle>
                            <CardDescription className="text-base font-medium text-foreground">
                              {edu.institution}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col items-start md:items-end gap-2">
                            <Badge
                              variant="secondary"
                              className={`w-fit ${
                                edu.status === "Completed"
                                  ? "bg-primary/10 text-primary border-primary/20"
                                  : "bg-accent/10 text-accent border-accent/20"
                              } border`}
                            >
                              {edu.status}
                            </Badge>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CalendarDays className="w-4 h-4" aria-hidden />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-muted-foreground">
                            CGPA
                          </span>
                          <span className="text-lg font-semibold text-accent">
                            {edu.cgpa}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {edu.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {CERTS.map((cert, idx) => (
                <Card
                  key={idx}
                  className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/60"
                >
                  {/* subtle top accent line */}
                  <div className="absolute left-0 top-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-primary/30 to-accent/30 rounded-t-xl" />
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg leading-tight">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="font-medium">
                      {cert.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4" aria-hidden />
                      <span>{cert.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* (Optional) quick note under certs */}
          {/* <p className="mt-6 text-xs text-muted-foreground text-center">
            * Full credential IDs available upon request.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
