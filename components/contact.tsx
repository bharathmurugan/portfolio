import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bharathmay2005@gmail.com",
      href: "mailto:bharathmay2005@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9789459437",
      href: "tel:+919789459437",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Salem, Tamil Nadu",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/bharathmurugan",
      username: "@bharathmurugan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/bharathm12",
      username: "@bharathm12",
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/u/Bharath22ITR012",
      username: "@Bharath22ITR012",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase">
            Contact
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground text-balance">
              Let&apos;s connect and build something great together
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m always open to discussing new opportunities, collaborations,
              or just having a chat about technology. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <Link
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">
              Find me online
            </h4>
            <div className="grid gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                    <social.icon size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {social.username}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bharath M. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
