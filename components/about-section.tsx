"use client"

import { Card } from "@/components/ui/card"
import { Target, Zap, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Detail-Oriented</h3>
            <p className="text-muted-foreground leading-relaxed">
              Precision and accuracy are non-negotiable in financial administration. I ensure every detail is perfect.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Adaptable</h3>
            <p className="text-muted-foreground leading-relaxed">
              My non-linear journey has taught me to thrive in dynamic environments and embrace challenges.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Committed</h3>
            <p className="text-muted-foreground leading-relaxed">
              I bring genuine investment to every task, treating each responsibility with care and professionalism.
            </p>
          </Card>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-accent/5 border-primary/10">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I bring <span className="text-primary font-semibold">authenticity and resilience</span> to everything I
              do. With over 5 years of combined experience in financial administration, customer service, and operations
              management, I've learned that the best professionals aren't those who pretend to have all the
              answers—they're the ones who show up consistently, adapt when challenged, and genuinely care about getting
              things right.
            </p>

            <p className="text-lg">
              My journey hasn't been linear, and that's exactly what makes me valuable. Every role, from managing a busy
              entertainment venue to handling complex debtor accounts, has taught me something essential about{" "}
              <span className="text-secondary font-semibold">
                problem-solving, perseverance, and staying grounded under pressure
              </span>
              .
            </p>

            <p className="text-lg">
              I'm drawn to environments where attention to detail matters, where systems need to work seamlessly, and
              where a calm, methodical approach makes all the difference. Whether I'm reconciling accounts, resolving
              billing disputes, or ensuring compliance with health and safety regulations, I bring the same commitment:
              to be thorough, reliable, and genuinely invested in the outcome.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
