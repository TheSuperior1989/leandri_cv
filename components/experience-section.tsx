"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Debtors Clerk & Administrative Specialist",
      company: "Dumansi Trading CC",
      period: "October 2024 – Present",
      location: "Pretoria, South Africa",
      description:
        "Managing the complete debtors function for a dynamic packaging company, ensuring financial accuracy and maintaining strong client relationships in a fast-paced manufacturing environment.",
      responsibilities: [
        "Conduct comprehensive age analysis and proactive debt collection strategies",
        "Process customer payments with precision and perform daily reconciliations",
        "Manage credit applications, perform ITC checks, and establish credit limits",
        "Generate and distribute client statements with professional correspondence",
        "Handle complex billing disputes with diplomacy and attention to detail",
        "Coordinate yard staff register, overtime calculations, and leave applications",
        "Serve as Emergency Aid and Health & Safety representative",
        "Ensure full compliance with OHS and DOL audit requirements",
      ],
      current: true,
    },
    {
      title: "Sales Coordinator & Administrative Specialist",
      company: "MW Packaging (Pty) Ltd",
      period: "2020 – 2024 (4 years)",
      location: "Welkom, South Africa",
      description:
        "Provided comprehensive sales coordination and administrative support for a dynamic packaging company, managing client relationships and ensuring seamless operations across multiple business functions.",
      responsibilities: [
        "Coordinated all sales-related activities and client communications",
        "Managed comprehensive administrative functions supporting business operations",
        "Served as primary receptionist, ensuring professional first-point-of-contact experience",
        "Maintained accurate records and documentation across sales and administrative systems",
        "Facilitated smooth communication between sales team, clients, and internal departments",
      ],
    },
    {
      title: "Manager",
      company: "Golfpark (Funpark) Welkom",
      period: "2019 – 2020",
      location: "Welkom, South Africa",
      description:
        "Led all operational aspects of a busy recreational facility, managing staff, inventory, and financial controls while ensuring exceptional customer experiences.",
      responsibilities: [
        "Complete facility management including opening/closing and security protocols",
        "Staff scheduling, shift planning, and performance management",
        "Inventory management and regular stock takes",
        "Financial oversight including cash handling and daily reconciliations",
        "Customer service excellence and conflict resolution",
      ],
    },
    {
      title: "Clothing Store Assistant",
      company: "Smart Labels Welkom",
      period: "2018 – 2019",
      location: "Welkom, South Africa",
      description:
        "Provided comprehensive retail support in a fast-paced clothing retail environment, developing foundational customer service and inventory management skills.",
      responsibilities: [
        "Stock receiving, labeling, and merchandising",
        "Customer assistance and lay-by management",
        "Inventory control and product presentation",
        "Point-of-sale operations",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="relative md:ml-20 p-6 md:p-8 hover:shadow-2xl transition-all duration-500 border-primary/10 group hover:-translate-y-1 hover-glow"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute -left-[52px] top-8 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1 text-balance">{exp.title}</h3>
                        <p className="text-lg font-semibold text-primary">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 md:text-right">
                    <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {exp.current && (
                  <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                    Current Position
                  </Badge>
                )}

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                {exp.progression && (
                  <div className="mb-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">
                      Career Progression
                    </h4>
                    <ul className="space-y-1">
                      {exp.progression.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">→</span>
                        <span className="flex-1 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* What Drives Me */}
        <Card className="mt-12 p-8 md:p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What Drives Me
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm motivated by work that matters—where precision prevents problems, where organization creates calm, and
              where showing up with integrity makes a real difference. I understand that behind every invoice, every
              reconciliation, and every client interaction is someone who deserves to be treated with respect and
              professionalism.
            </p>
            <p>
              I thrive in roles that challenge me to think critically, stay organized under pressure, and find solutions
              when processes don't go as planned. I'm not interested in just clocking in and out; I want to contribute
              meaningfully to a team that values reliability, growth, and doing things the right way.
            </p>
            <p>
              Outside of work, you'll find me riding motorcycles, spending time with family, or simply enjoying quiet
              moments in nature. These experiences keep me balanced and remind me why honest, grounded work matters—it's
              about building a life you're proud of, not just a career.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
