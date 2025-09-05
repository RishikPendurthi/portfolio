"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Filter,
  Sparkles,
  ArrowRight,
  Code2,
  Brain,
  Database,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  category: "AI/ML" | "Data Science" | "Web Development";
};

type ProjectOrTeaser = Project & { __teaser?: boolean };

const ALL_CATEGORIES = [
  "All",
  "AI/ML",
  "Data Science",
  "Web Development",
] as const;

const PROJECTS: Project[] = [
  {
    title: "Virtual Mouse using AI",
    description:
      "Control the cursor and perform clicks/drag using bare hands and eyes via computer vision and hand‑tracking.",
    tech: ["Python", "NumPy", "OpenCV", "Hand Tracking", "Computer Vision"],
    github: "https://github.com/RishikPendurthi/Virtual-Mouse-using-AI.git",
    category: "AI/ML",
  },
  {
    title: "Flight Delay Prediction Model",
    description:
      "ML model to predict flight delays using Random Forest and Gradient Boosting; tackles key aviation reliability issues.",
    tech: [
      "Python",
      "Machine Learning",
      "Random Forest",
      "Gradient Boosting",
      "Data Analysis",
    ],
    category: "Data Science",
  },
  {
    title: "Document Ranking System",
    description:
      "NLP system that ranks documents by similarity scores for information retrieval pipelines.",
    tech: [
      "Python",
      "Natural Language Processing",
      "Information Retrieval",
      "Similarity Analysis",
    ],
    github:
      "https://github.com/RishikPendurthi/Document-Ranking-based-on-similarity-using-NLP",

    category: "AI/ML",
  },
  {
    title: "Learning Management System",
    description:
      "Full‑stack web app where students register for courses and teachers track progress.",
    tech: ["Flask", "HTML", "CSS", "JavaScript", "Database Management"],
    github: "https://github.com/RishikPendurthi/FinalProject.git",
    category: "Web Development",
  },
  {
    title: "Online Food Ordering System",
    description:
      "End‑to‑end ordering platform with admin dashboard for products, categories, and orders.",
    tech: ["PHP", "Bootstrap", "JavaScript", "MySQL", "Admin Panel"],
    category: "Web Development",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    React.useState<(typeof ALL_CATEGORIES)[number]>("All");
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Project | null>(null);

  const filtered = React.useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Always show a teaser card if we have exactly 5 projects in the current filter (your case)
  const displayProjects: ProjectOrTeaser[] = React.useMemo(() => {
    const base = [...filtered];
    if (base.length === 5) {
      base.push({
        title: "More projects coming soon",
        description:
          "I'm actively working on new projects. Follow my GitHub to stay updated with my latest work.",
        tech: ["Next.js", "TypeScript", "AI Integration", "Cloud Deployment"],
        category: (activeCategory === "All"
          ? "Web Development"
          : activeCategory) as Project["category"],
        __teaser: true,
      } as ProjectOrTeaser);
    }
    return base as ProjectOrTeaser[];
  }, [filtered, activeCategory]);

  const onDetails = (proj: Project) => {
    setSelected(proj);
    setOpen(true);
  };

  // Category icons mapping
  const categoryIcons = {
    "AI/ML": Brain,
    "Data Science": Database,
    "Web Development": Code2,
    All: Sparkles,
  };

  return (
    <section
      id="projects"
      className="relative bg-background py-16 sm:py-20"
      aria-label="Projects"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Featured Projects
          </div>

          <p className="mt-4 text-lg text-muted-foreground">
            Explore my innovative projects across AI/ML, data science, and web
            development
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {ALL_CATEGORIES.map((cat) => {
            const IconComponent = categoryIcons[cat];
            return (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full gap-2 transition-all",
                  activeCategory === cat
                    ? "shadow-md"
                    : "bg-background hover:bg-muted/50"
                )}
                aria-pressed={activeCategory === cat}
              >
                <IconComponent className="h-4 w-4" />
                {cat}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, index) => {
            const isTeaser = (project as ProjectOrTeaser).__teaser;
            const CategoryIcon = categoryIcons[project.category];

            if (isTeaser) {
              return (
                <Card
                  key={`teaser-${index}`}
                  className="group relative overflow-hidden border-dashed border-border bg-background p-8 text-center transition-all duration-500 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mb-4 text-xl font-semibold">
                      More projects coming soon
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      I'm actively working on new projects. Follow my GitHub to
                      stay updated with my latest work.
                    </CardDescription>
                    <CardContent className="mt-6 p-0">
                      <Button
                        asChild
                        variant="default"
                        size="lg"
                        className="rounded-full gap-2"
                      >
                        <a
                          href="https://github.com/RishikPendurthi"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Follow on GitHub"
                        >
                          <Github className="h-4 w-4" /> Follow on GitHub
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              );
            }

            return (
              <Card
                key={`${project.title}-${index}`}
                className="group relative overflow-hidden border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1.5"
                      >
                        <CategoryIcon className="h-3 w-3" />
                        {project.category}
                      </Badge>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={`View code for ${project.title}`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <CardTitle className="text-xl transition-colors group-hover:text-primary">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Tech stack */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((t, i) => (
                        <Badge
                          key={`${t}-${i}`}
                          variant="outline"
                          className="text-xs font-medium bg-secondary/50"
                        >
                          {t}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs font-medium bg-secondary/50"
                        >
                          +{project.tech.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-2"
                        onClick={() => onDetails(project as Project)}
                        aria-label={`View details for ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" /> Details
                      </Button>
                      {project.github && (
                        <Button
                          variant="default"
                          size="sm"
                          asChild
                          className="flex-1 gap-2"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View code for ${project.title}`}
                          >
                            <Code2 className="h-4 w-4" /> Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View More */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="gap-2 rounded-full"
          >
            <a
              href="https://github.com/RishikPendurthi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all projects on GitHub"
            >
              <Github className="h-4 w-4" /> View All Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Details Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              {selected?.category && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1.5"
                >
                  {React.createElement(categoryIcons[selected.category], {
                    className: "h-3 w-3",
                  })}
                  {selected.category}
                </Badge>
              )}
            </div>
            <DialogTitle className="text-2xl">{selected?.title}</DialogTitle>
            <DialogDescription className="text-base">
              {selected?.description}
            </DialogDescription>
          </DialogHeader>

          {selected && (
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t, i) => (
                    <Badge
                      key={`${t}-${i}`}
                      variant="outline"
                      className="bg-secondary/50 py-1.5"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {selected.github ? (
                  <Button variant="default" asChild className="gap-2">
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View code for ${selected.title}`}
                    >
                      <Github className="h-4 w-4" /> View Code
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="gap-2">
                    <Code2 className="h-4 w-4" /> Code Private
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={() => setOpen(false)}
                  aria-label="Close dialog"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
