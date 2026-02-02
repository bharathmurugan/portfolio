export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python"],
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React.js", "Node.js"],
    },
    {
      title: "Databases",
      skills: ["SQL", "MongoDB"],
    },
    {
      title: "DevOps Tools",
      skills: ["Git", "GitHub", "Docker", "Jenkins", "Kubernetes"],
    },
    {
      title: "Core Concepts",
      skills: ["OOPs", "DBMS", "Data Structures", "Algorithms"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase">
            Skills
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-background rounded-lg border border-border"
            >
              <h3 className="font-semibold text-foreground mb-4 text-lg">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
