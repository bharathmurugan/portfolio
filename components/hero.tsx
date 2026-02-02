import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary font-mono text-sm tracking-wide">
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight text-balance">
              Bharath M
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Software Developer
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-lg">
            Aspiring Software Developer with strong proficiency in Java, data
            structures, and algorithms. Passionate about building scalable,
            efficient, and maintainable software solutions.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              Salem, Tamil Nadu
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              +91-9789459437
            </span>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <Link
              href="mailto:bharathmay2005@gmail.com"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              Get in Touch
            </Link>
            <Link
              href="https://github.com/bharathmurugan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/bharathm12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="w-72 h-72 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-primary/30 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">BM</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-lg flex items-center justify-center border border-border">
              <span className="text-2xl font-mono text-primary">{"</>"}</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary rounded-lg flex items-center justify-center border border-border">
              <span className="text-2xl font-mono text-primary">{"{ }"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
