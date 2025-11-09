"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, UserCheck } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 md:p-8 hover:shadow-xl transition-all border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Matriculation</h3>
                <p className="text-black">2015</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-black font-medium mb-3">Subjects:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Afrikaans",
                  "English",
                  "Mathematical Literacy",
                  "Business Studies",
                  "Life Orientation",
                  "RTT",
                  "IGO",
                ].map((subject, i) => (
                  <Badge key={i} variant="secondary" className="bg-accent/20 text-black">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-8 hover:shadow-xl transition-all border-secondary/10 bg-gradient-to-br from-secondary/5 to-accent/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Award className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Health & Safety</h3>
                <p className="text-muted-foreground">Safe Solution | 2022</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground font-medium mb-3">Certifications:</p>
              <ul className="space-y-2">
                {[
                  "OHS Regulations",
                  "HIV/AIDS Awareness",
                  "COVID-19 Legislation",
                  "HIRA Methodology",
                  "Accident Investigation",
                  "Working at Heights",
                  "Legal Liability (OH&SA)",
                  "Root Cause Analysis",
                ].map((cert, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-secondary">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <UserCheck className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold">References</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card/50 rounded-lg border border-primary/10">
              <h4 className="text-lg font-bold mb-1">Christie Foggit</h4>
              <p className="text-sm text-muted-foreground mb-3">Dumansi Trading CC</p>
              <div className="space-y-1 text-sm">
                <p className="flex items-center gap-2">
                  <span>📱</span>
                  <a href="tel:0662419748" className="hover:text-primary transition-colors">
                    066 241 9748
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:Christie@dumansi.co.za" className="hover:text-primary transition-colors break-all">
                    Christie@dumansi.co.za
                  </a>
                </p>
              </div>
            </div>

            <div className="p-6 bg-card/50 rounded-lg border border-primary/10">
              <h4 className="text-lg font-bold mb-1">Anelda</h4>
              <p className="text-sm text-muted-foreground mb-3">MW Packaging (Pty) Ltd</p>
              <div className="space-y-1 text-sm">
                <p className="flex items-center gap-2">
                  <span>📱</span>
                  <a href="tel:0823745430" className="hover:text-primary transition-colors">
                    082 374 5430
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
