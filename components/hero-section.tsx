"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 relative overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile_pic.jpeg"
                  alt="Leandri de Bruyn"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            LEANDRI DE BRUYN
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium">
            Debtors Clerk | Administrative Professional | Financial Operations
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Bringing authenticity and resilience to financial administration with 5+ years of combined experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all transform hover:scale-105 text-base px-8"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-base px-8 bg-transparent"
              asChild
            >
              <a href="#experience">View Experience</a>
            </Button>
          </div>

          {/* Quick contact info */}
          <div className="flex flex-wrap gap-6 justify-center text-sm md:text-base text-muted-foreground">
            <a href="tel:0632885993" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              063 288 5993
            </a>
            <a
              href="mailto:Leandridbruyn@outlook.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              Leandridbruyn@outlook.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Nina Park, Welkom
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </a>
    </section>
  )
}
