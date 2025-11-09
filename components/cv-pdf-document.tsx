import React from "react"
import { Document, Page, Text, View, StyleSheet, Image, Link } from "@react-pdf/renderer"

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
  },
  sidebar: {
    width: "35%",
    backgroundColor: "#0891b2",
    padding: 20,
    color: "#FFFFFF",
  },
  mainContent: {
    width: "65%",
    padding: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    alignSelf: "center",
    border: "3px solid #FFFFFF",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "#FFFFFF",
  },
  title: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "#E0F2FE",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    color: "#FFFFFF",
    borderBottom: "2px solid #FFFFFF",
    paddingBottom: 5,
  },
  mainSectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#0891b2",
    borderBottom: "2px solid #0891b2",
    paddingBottom: 5,
  },
  contactItem: {
    fontSize: 9,
    marginBottom: 8,
  },
  contactLabel: {
    fontSize: 8,
    fontWeight: "bold",
    marginBottom: 2,
    color: "#E0F2FE",
  },
  skillItem: {
    fontSize: 9,
    marginBottom: 4,
    paddingLeft: 5,
    lineHeight: 1.4,
  },
  experienceItem: {
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0891b2",
    marginBottom: 3,
  },
  company: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
  },
  period: {
    fontSize: 9,
    color: "#666666",
    marginBottom: 5,
  },
  description: {
    fontSize: 9,
    marginBottom: 5,
    lineHeight: 1.4,
  },
  responsibility: {
    fontSize: 8,
    marginBottom: 2,
    paddingLeft: 8,
    lineHeight: 1.4,
  },
  badge: {
    backgroundColor: "#E0F2FE",
    color: "#0891b2",
    padding: "4 8",
    borderRadius: 3,
    fontSize: 8,
    marginRight: 5,
    marginBottom: 5,
  },
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  link: {
    color: "#FFFFFF",
    textDecoration: "none",
  },
  mainLink: {
    color: "#0891b2",
    textDecoration: "none",
  },
})

export const CVPDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        {/* Profile Image */}
        <Image style={styles.profileImage} src="/profile_pic.jpeg" />

        <Text style={styles.name}>LEANDRI DE BRUYN</Text>
        <Text style={styles.title}>Debtors Clerk | Administrative Professional</Text>

        {/* Contact Information */}
        <Text style={styles.sectionTitle}>CONTACT</Text>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Phone</Text>
          <Text>063 288 5993</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Email</Text>
          <Link style={styles.link} src="mailto:Leandridbruyn@outlook.com">
            Leandridbruyn@outlook.com
          </Link>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Location</Text>
          <Text>Pretoria North, South Africa</Text>
        </View>

        {/* Skills */}
        <Text style={styles.sectionTitle}>CORE SKILLS</Text>
        <Text style={styles.skillItem}>- Age Analysis & Debt Collection</Text>
        <Text style={styles.skillItem}>- Payment Processing</Text>
        <Text style={styles.skillItem}>- Account Reconciliation</Text>
        <Text style={styles.skillItem}>- Credit Control & ITC Checks</Text>
        <Text style={styles.skillItem}>- Client Relations</Text>
        <Text style={styles.skillItem}>- Financial Reporting</Text>
        <Text style={styles.skillItem}>- Administrative Excellence</Text>
        <Text style={styles.skillItem}>- Health & Safety Compliance</Text>

        {/* Software */}
        <Text style={styles.sectionTitle}>SOFTWARE</Text>
        <Text style={styles.skillItem}>- Acumatica</Text>
        <Text style={styles.skillItem}>- Sage</Text>
        <Text style={styles.skillItem}>- System IQ</Text>
        <Text style={styles.skillItem}>- Microsoft Excel</Text>
        <Text style={styles.skillItem}>- Microsoft Word</Text>

        {/* Languages */}
        <Text style={styles.sectionTitle}>LANGUAGES</Text>
        <Text style={styles.skillItem}>- English (Fluent)</Text>
        <Text style={styles.skillItem}>- Afrikaans (Fluent)</Text>

        {/* Key Strengths */}
        <Text style={styles.sectionTitle}>KEY STRENGTHS</Text>
        <Text style={styles.skillItem}>- Detail-Oriented</Text>
        <Text style={styles.skillItem}>- Problem Solver</Text>
        <Text style={styles.skillItem}>- Team Player</Text>
        <Text style={styles.skillItem}>- Quick Learner</Text>
        <Text style={styles.skillItem}>- Reliable & Punctual</Text>
        <Text style={styles.skillItem}>- Professional Demeanor</Text>

        {/* Interests */}
        <Text style={styles.sectionTitle}>INTERESTS</Text>
        <Text style={styles.skillItem}>- Continuous Learning</Text>
        <Text style={styles.skillItem}>- Financial Management</Text>
        <Text style={styles.skillItem}>- Process Improvement</Text>
        <Text style={styles.skillItem}>- Client Relations</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Professional Summary */}
        <Text style={styles.mainSectionTitle}>PROFESSIONAL SUMMARY</Text>
        <Text style={styles.description}>
          Dedicated financial administration professional with 5+ years of combined experience in debtors management,
          administrative operations, and client relations. Proven track record in maintaining financial accuracy,
          building strong client relationships, and ensuring compliance in fast-paced environments.
        </Text>

        {/* Experience */}
        <Text style={styles.mainSectionTitle}>PROFESSIONAL EXPERIENCE</Text>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Debtors Clerk & Administrative Specialist</Text>
          <Text style={styles.company}>Dumansi Trading CC</Text>
          <Text style={styles.period}>October 2024 – Present | Pretoria, South Africa</Text>
          <Text style={styles.description}>
            Managing complete debtors function for a dynamic packaging company, ensuring financial accuracy and
            maintaining strong client relationships.
          </Text>
          <Text style={styles.responsibility}>- Comprehensive age analysis and proactive debt collection</Text>
          <Text style={styles.responsibility}>- Payment processing and daily reconciliations</Text>
          <Text style={styles.responsibility}>- Credit applications, ITC checks, and credit limit management</Text>
          <Text style={styles.responsibility}>- Client statements and professional correspondence</Text>
          <Text style={styles.responsibility}>- Emergency Aid and Health & Safety representative</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Sales Coordinator & Administrative Specialist</Text>
          <Text style={styles.company}>MW Packaging (Pty) Ltd</Text>
          <Text style={styles.period}>2020 – 2024 (4 years) | Welkom, South Africa</Text>
          <Text style={styles.description}>
            Provided comprehensive sales coordination and administrative support for a dynamic packaging company.
          </Text>
          <Text style={styles.responsibility}>- Coordinated all sales-related activities and client communications</Text>
          <Text style={styles.responsibility}>- Managed comprehensive administrative functions</Text>
          <Text style={styles.responsibility}>- Primary receptionist ensuring professional client experience</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Manager</Text>
          <Text style={styles.company}>Golfpark (Funpark) Welkom</Text>
          <Text style={styles.period}>2019 – 2020 | Welkom, South Africa</Text>
          <Text style={styles.responsibility}>- Complete facility management and security protocols</Text>
          <Text style={styles.responsibility}>- Staff scheduling and performance management</Text>
          <Text style={styles.responsibility}>- Financial oversight and daily reconciliations</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Administrative Assistant</Text>
          <Text style={styles.company}>Smart Labels</Text>
          <Text style={styles.period}>2018 – 2019 (1 year) | Welkom, South Africa</Text>
          <Text style={styles.responsibility}>- General administrative support and office management</Text>
          <Text style={styles.responsibility}>- Document processing and filing systems</Text>
          <Text style={styles.responsibility}>- Client communication and scheduling</Text>
        </View>

        {/* Education */}
        <Text style={styles.mainSectionTitle}>EDUCATION & CERTIFICATIONS</Text>

        <View style={styles.experienceItem}>
          <Text style={styles.company}>Matriculation (2015)</Text>
          <Text style={styles.description}>
            Subjects: Afrikaans, English, Mathematical Literacy, Business Studies, Life Orientation, RTT, IGO
          </Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.company}>Health & Safety Certifications (Safe Solution, 2022)</Text>
          <Text style={styles.responsibility}>- OHS Regulations</Text>
          <Text style={styles.responsibility}>- HIRA Methodology</Text>
          <Text style={styles.responsibility}>- Accident Investigation</Text>
          <Text style={styles.responsibility}>- Working at Heights</Text>
          <Text style={styles.responsibility}>- Legal Liability (OH&SA)</Text>
        </View>

        {/* Key Achievements */}
        <Text style={styles.mainSectionTitle}>KEY ACHIEVEMENTS</Text>

        <View style={styles.experienceItem}>
          <Text style={styles.company}>Financial Operations Excellence</Text>
          <Text style={styles.responsibility}>- Maintained 98% accuracy rate in age analysis and debt collection</Text>
          <Text style={styles.responsibility}>- Successfully reduced outstanding debtor days by implementing proactive follow-up systems</Text>
          <Text style={styles.responsibility}>- Achieved zero discrepancies in daily payment reconciliations</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.company}>Client Relations & Service</Text>
          <Text style={styles.responsibility}>- Built and maintained strong relationships with key clients, ensuring high satisfaction rates</Text>
          <Text style={styles.responsibility}>- Resolved complex billing queries efficiently, maintaining professional communication</Text>
          <Text style={styles.responsibility}>- Implemented improved client communication protocols</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.company}>Health & Safety Leadership</Text>
          <Text style={styles.responsibility}>- Appointed as Emergency Aid and Health & Safety representative</Text>
          <Text style={styles.responsibility}>- Successfully completed comprehensive safety certifications</Text>
          <Text style={styles.responsibility}>- Contributed to maintaining a safe workplace environment</Text>
        </View>

        {/* Professional Attributes */}
        <Text style={styles.mainSectionTitle}>PROFESSIONAL ATTRIBUTES</Text>

        <View style={styles.experienceItem}>
          <Text style={styles.description}>
            I bring a unique combination of technical financial expertise and genuine interpersonal skills to every role.
            My approach is characterized by:
          </Text>
          <Text style={styles.responsibility}>- Strong attention to detail with a focus on accuracy and compliance</Text>
          <Text style={styles.responsibility}>- Proactive problem-solving and ability to work independently</Text>
          <Text style={styles.responsibility}>- Excellent communication skills in both English and Afrikaans</Text>
          <Text style={styles.responsibility}>- Adaptability and quick learning in fast-paced environments</Text>
          <Text style={styles.responsibility}>- Commitment to continuous professional development</Text>
          <Text style={styles.responsibility}>- Team player with strong organizational abilities</Text>
        </View>

        {/* References */}
        <Text style={styles.mainSectionTitle}>REFERENCES</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <Text style={styles.company}>Christie Foggit</Text>
            <Text style={styles.description}>Dumansi Trading CC</Text>
            <Text style={styles.responsibility}>Phone: 066 241 9748</Text>
            <Text style={styles.responsibility}>Email: Christie@dumansi.co.za</Text>
          </View>
          <View style={{ width: "48%" }}>
            <Text style={styles.company}>Anelda</Text>
            <Text style={styles.description}>MW Packaging (Pty) Ltd</Text>
            <Text style={styles.responsibility}>Phone: 082 374 5430</Text>
          </View>
        </View>

        {/* Personal Statement */}
        <View style={{ marginTop: 20, padding: 15, backgroundColor: "#F0F9FF", borderRadius: 5 }}>
          <Text style={{ fontSize: 9, lineHeight: 1.5, color: "#0891b2", textAlign: "center", fontStyle: "italic" }}>
            "I am passionate about contributing to organizational success through meticulous financial management
            and exceptional administrative support. I thrive in environments where accuracy, efficiency, and
            strong client relationships are valued. I am eager to bring my skills and dedication to a dynamic
            team where I can continue to grow professionally while making a meaningful impact."
          </Text>
        </View>

        {/* Footer */}
        <View style={{ marginTop: 15, borderTop: "1px solid #E5E7EB", paddingTop: 10 }}>
          <Text style={{ fontSize: 7, color: "#6B7280", textAlign: "center" }}>
            CV Last Updated: January 2025 | Available for immediate opportunities
          </Text>
        </View>
      </View>
    </Page>
  </Document>
)

