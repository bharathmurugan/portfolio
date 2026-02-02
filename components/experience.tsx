import { Briefcase, Award } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "internship",
      title: "Java Developer Intern",
      company: "InternPe",
      duration: "Aug 2024 – Sep 2024",
      highlights: [
        "Developed multiple Java-based console applications following OOP principles",
        "Implemented Number Guessing Game and Rock-Paper-Scissors using core Java",
        "Applied logic for randomization, score calculation, and user input validation",
        "Improved problem-solving skills and understanding of Java fundamentals",
      ],
    },
  ];

  const certifications = [
    "MongoDB – Associate Node.js Developer",
    "GUVI – Python Programming",
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase">
            Experience
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Briefcase className="text-primary" size={24} />
              Work Experience
            </h3>
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="p-6 bg-card rounded-lg border border-border"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h4>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground text-sm flex items-start gap-3"
                    >
                      <span className="text-primary mt-1.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Award className="text-primary" size={24} />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <p className="text-foreground text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
