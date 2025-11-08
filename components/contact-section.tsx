"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities and how I can contribute to your team's success
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-card via-accent/5 to-card border-primary/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <a
                href="mailto:Leandridbruyn@outlook.com"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm text-muted-foreground break-all">Leandridbruyn@outlook.com</p>
                </div>
              </a>

              <a
                href="tel:0632885993"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-sm text-muted-foreground">063 288 5993</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-sm text-muted-foreground">
                    100 Jan Frederik Street
                    <br />
                    Nina Park, Welkom
                    <br />
                    South Africa
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're looking for a dedicated financial professional or want to discuss how my skills can
                benefit your organization, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all transform hover:scale-105"
                  asChild
                >
                  <a href="mailto:Leandridbruyn@outlook.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send an Email
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 bg-transparent"
                  asChild
                >
                  <a href="tel:0632885993">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>

              <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Available for immediate opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>CV Last Updated: November 2025</p>
        </div>
      </div>
    </section>
  )
}
