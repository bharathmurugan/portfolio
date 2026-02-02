import { Code2, Database, Server } from "lucide-react";

export function About() {
  const interests = [
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Building robust applications using modern technologies and best practices.",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Designing and optimizing database systems for efficient data storage and retrieval.",
    },
    {
      icon: Server,
      title: "DevOps & CI/CD",
      description:
        "Automating deployment pipelines and managing containerized applications.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase">
            About
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground text-balance">
              Passionate about crafting efficient digital solutions
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a B.Tech student in Information Technology at Kongu
                Engineering College with hands-on experience in full-stack web
                development, REST-based applications, and CI/CD pipelines.
              </p>
              <p>
                My journey in software development has equipped me with strong
                problem-solving skills and a deep understanding of object-oriented
                programming principles. I enjoy working on challenging projects
                that push me to learn and grow.
              </p>
              <p>
                I&apos;ve presented papers on cutting-edge topics like{" "}
                <span className="text-primary">
                  Tomato Leaf Disease Detection using AI
                </span>{" "}
                at IIT Madras Research Park and{" "}
                <span className="text-primary">Blockchain Technology</span> at
                Madras Institute of Technology.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                    <interest.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {interest.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
