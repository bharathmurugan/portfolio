import { GraduationCap } from "lucide-react";

export function Education() {
  const education = [
    {
      institution: "Kongu Engineering College",
      degree: "B.Tech in Information Technology",
      duration: "Nov 2022 – Mar 2026",
      grade: "CGPA: 6.95",
    },
    {
      institution: "GV Higher Secondary School",
      degree: "Senior Secondary (Class XII)",
      duration: "Jun 2021 – May 2022",
      grade: "Percentage: 80.3%",
    },
    {
      institution: "GV Higher Secondary School",
      degree: "Secondary (Class X)",
      duration: "May 2020",
      grade: "Percentage: 89.6%",
    },
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase">
            Education
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={edu.institution + edu.degree} className="relative flex gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex items-start pt-2">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background relative z-10">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                </div>

                <div
                  className={`flex-1 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors ${
                    index === 0 ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {edu.institution}
                    </h3>
                    <span className="text-sm text-muted-foreground font-mono">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-primary mb-1">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
