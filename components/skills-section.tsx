"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, TrendingUp, Users, Shield } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Financial Operations",
      icon: TrendingUp,
      skills: [
        "Age Analysis & Debt Collection",
        "Payment Processing",
        "Account Reconciliation",
        "Credit Control & ITC Checks",
        "Cash Management",
        "Financial Reporting",
      ],
      gradient: "from-primary to-secondary",
    },
    {
      title: "Administrative Excellence",
      icon: Briefcase,
      skills: [
        "Billing Dispute Resolution",
        "Document Control",
        "Schedule Management",
        "Switchboard Operations",
        "Filing & Scanning",
        "Query Resolution",
      ],
      gradient: "from-secondary to-accent",
    },
    {
      title: "Client Relations",
      icon: Users,
      skills: [
        "Client Relationship Management",
        "Professional Communication",
        "Customer Service",
        "Conflict Resolution",
        "Payment Arrangements",
        "Client Correspondence",
      ],
      gradient: "from-accent to-primary",
    },
    {
      title: "Compliance & Safety",
      icon: Shield,
      skills: [
        "Health & Safety Compliance",
        "OHS Regulations",
        "DOL Audit Requirements",
        "Emergency Aid",
        "Accident Investigation",
        "HIRA Methodology",
      ],
      gradient: "from-primary via-secondary to-accent",
    },
  ]

  const software = ["Acumatica", "Sage", "System IQ", "Microsoft Excel", "Microsoft Word"]

  const languages = ["English (Fluent)", "Afrikaans (Fluent)"]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Core Competencies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-primary/10 hover-glow group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-sm py-1 px-3 bg-accent/20 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 text-black cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-black">
              <span className="text-2xl">💻</span>
              Software Proficiency
            </h3>
            <div className="flex flex-wrap gap-3">
              {software.map((item, i) => (
                <Badge
                  key={i}
                  className={`text-sm py-2 px-4 bg-gradient-to-r from-primary to-secondary text-black`}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-black">
              <span className="text-2xl">🌍</span>
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((item, i) => (
                <Badge
                  key={i}
                  className="text-sm py-2 px-4 bg-gradient-to-r from-secondary to-accent text-black"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
