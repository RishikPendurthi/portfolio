"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Braces, Wrench, Blocks, Sparkles } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Braces,
      desc: "Core languages I use to model data, build services, and ship features.",
      skills: ["Python", "SQL", "C", "Java", "JavaScript", "TypeScript"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      desc: "Daily drivers for analysis, notebooks, version control, and collaboration.",
      skills: [
        "Tableau",
        "Jupyter Notebook",
        "PyCharm",
        "SQL Workbench",
        "Google Colab",
        "Git",
        "GitHub",
      ],
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      title: "Frameworks & Libraries",
      icon: Blocks,
      desc: "Web & backend frameworks plus databases used across projects.",
      skills: ["Flask", "React", "Node.js", "Express.js", "MongoDB"],
      color: "bg-secondary/50 text-secondary-foreground border-secondary",
    },
    {
      title: "Specializations",
      icon: Sparkles,
      desc: "Focus areas where I design, optimize, and deliver impact.",
      skills: [
        "Machine Learning",
        "Data Science",
        "Web Development",
        "AI Applications",
        "Cloud Computing",
      ],
      color: "bg-muted text-muted-foreground border-muted-foreground/20",
    },
  ] as const;

  return (
    <section
      id="skills"
      className="relative bg-background py-16 sm:py-20"
      aria-label="Technical skills"
    >
      {/* Clean background (no mesh, no blobs) */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-3 py-1.5 text-[11px] sm:text-xs text-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Skills Snapshot
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Technical Skills
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-foreground/85">
            A comprehensive toolkit for building modern applications and solving
            real‑world problems with clean, scalable code.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card
                key={idx}
                className="group relative border-border/50 bg-background p-5 sm:p-6 transition-all duration-300 hover:shadow-lg"
              >
                {/* thin top rule */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-border"
                />

                <div className="mb-3 flex items-start gap-3">
                  <div className="shrink-0 rounded-xl border border-border p-2.5 bg-muted/50">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-foreground/80">
                      {category.desc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className={[
                        "rounded-full border px-3 py-1 text-xs sm:text-sm transition-transform motion-safe:hover:scale-[1.04]",
                        category.color,
                      ].join(" ")}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
