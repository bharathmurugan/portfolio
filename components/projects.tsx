import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "A real-time inventory tracking system with product categorization and low-stock alerts to improve operational efficiency.",
      technologies: ["Flutter", "Dart"],
      github: "https://github.com/bharathmurugan/NirmalaAgenciesConsultancy",
    },
    {
      title: "News Aggregator Application",
      description:
        "A full-stack web application that aggregates real-time news data with search and category-based filtering for better user experience.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/bharathmurugan/FullStackProject",
    },
    {
      title: "CI/CD Pipeline for React Application",
      description:
        "Automated build and deployment pipeline using Jenkins and Docker containers, deployed on Kubernetes for scalability and reliability.",
      technologies: ["Jenkins", "Docker", "Kubernetes"],
      github: "https://github.com/bharathmurugan/DevopsProject",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase">
            Projects
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <ExternalLink size={24} />
                </div>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={20} />
                </Link>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://github.com/bharathmurugan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View more on GitHub
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
