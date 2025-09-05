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
import { ExternalLink, Github, Filter } from "lucide-react";
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
      "Control the cursor and perform clicks/drag using bare hands and eyes via computer vision and hand-tracking.",
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
    category: "AI/ML",
  },
  {
    title: "Learning Management System",
    description:
      "Full-stack web app where students register for courses and teachers track progress.",
    tech: ["Flask", "HTML", "CSS", "JavaScript", "Database Management"],
    github: "https://github.com/RishikPendurthi/FinalProject.git",
    category: "Web Development",
  },
  {
    title: "Online Food Ordering System",
    description:
      "End-to-end ordering platform with admin dashboard for products, categories, and orders.",
    tech: ["PHP", "Bootstrap", "JavaScript", "MySQL", "Admin Panel"],
    category: "Web Development",
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    React.useState<(typeof ALL_CATEGORIES)[number]>("All");
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Project | null>(null);

  const filtered = React.useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const onDetails = (proj: Project) => {
    setSelected(proj);
    setOpen(true);
  };

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 bg-background overflow-hidden"
      aria-label="Projects"
    >
      {/* Background grid (match Hero/Skills) */}
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
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs sm:text-sm bg-muted/40 border-border/50 mb-4">
            <Filter className="w-4 h-4 text-primary" />
            Curated Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative builds across AI/ML, data science, and web development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {ALL_CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full",
                activeCategory === cat
                  ? "shadow-sm"
                  : "bg-muted/40 border-border/50 hover:bg-muted/60"
              )}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <Card
              key={`${project.title}-${index}`}
              className="group relative bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/60
                         border-border/50 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              {/* subtle top accent line */}
              <div className="absolute left-0 top-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-primary/30 to-accent/30 rounded-t-xl" />

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-2">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <Badge
                      key={`${t}-${i}`}
                      variant="outline"
                      className="text-xs bg-muted/50 border-border/50"
                    >
                      {t}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge
                      variant="outline"
                      className="text-xs bg-muted/50 border-border/50"
                    >
                      +{project.tech.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open GitHub code for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1"
                    onClick={() => onDetails(project)}
                    aria-label={`View details for ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/RishikPendurthi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all projects on GitHub"
            >
              <Github className="w-4 h-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Details Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between gap-3">
              <span>{selected?.title}</span>
              {selected?.category && (
                <Badge variant="secondary">{selected.category}</Badge>
              )}
            </DialogTitle>
            <DialogDescription>{selected?.description}</DialogDescription>
          </DialogHeader>

          {selected && (
            <div className="mt-4 space-y-3">
              <div className="text-sm text-muted-foreground">Tech stack</div>
              <div className="flex flex-wrap gap-2">
                {selected.tech.map((t, i) => (
                  <Badge
                    key={`${t}-${i}`}
                    variant="outline"
                    className="bg-muted/50 border-border/50"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="pt-4">
                {selected.github ? (
                  <Button variant="default" asChild>
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open GitHub for ${selected.title}`}
                    >
                      <Github className="w-4 h-4" />
                      View Code on GitHub
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" disabled>
                    <ExternalLink className="w-4 h-4" />
                    No public repo
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
