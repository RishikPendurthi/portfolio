"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Braces, Wrench, Blocks, Sparkles } from "lucide-react";
import * as React from "react";

const Skills = () => {
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
      skills: ["Flask", "React", "Angular", "Node.js", "Express.js", "MongoDB"],
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
  ];

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 bg-background overflow-hidden"
      aria-label="Technical skills"
    >
      {/* Background grid to match Hero */}
      <div
        className="absolute inset-0
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
        bg-[size:24px_24px]"
        aria-hidden
      />
      {/* Gradient fades / blobs (motion-safe) */}
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
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs sm:text-sm bg-muted/40 border-border/50 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full motion-safe:animate-pulse" />
            Skills Snapshot
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and solving
            real-world problems with clean, scalable code.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card
                key={idx}
                className="group relative p-6 sm:p-7 border-border/50 backdrop-blur supports-[backdrop-filter]:bg-background/80
                           hover:shadow-lg transition-all duration-300"
              >
                {/* subtle top accent line */}
                <div className="absolute left-0 top-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-primary/30 to-accent/30 rounded-t-xl" />

                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 rounded-xl p-2.5 bg-muted/60 border border-border/60">
                    <Icon className="w-5 h-5 text-primary" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {category.desc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className={`px-3 py-1 rounded-full border ${category.color} transition-transform
                                 motion-safe:hover:scale-[1.04]`}
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
};

export default Skills;
