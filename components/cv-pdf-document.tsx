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
    flexDirection: "row",
    alignItems: "center",
  },
  contactIcon: {
    marginRight: 5,
    fontSize: 10,
  },
  skillItem: {
    fontSize: 9,
    marginBottom: 5,
    paddingLeft: 10,
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
    marginBottom: 3,
    paddingLeft: 10,
    lineHeight: 1.3,
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
          <Text style={styles.contactIcon}>📱</Text>
          <Text>063 288 5993</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>📧</Text>
          <Link style={styles.link} src="mailto:Leandridbruyn@outlook.com">
            Leandridbruyn@outlook.com
          </Link>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>📍</Text>
          <Text>Nina Park, Welkom</Text>
        </View>

        {/* Skills */}
        <Text style={styles.sectionTitle}>CORE SKILLS</Text>
        <Text style={styles.skillItem}>• Age Analysis & Debt Collection</Text>
        <Text style={styles.skillItem}>• Payment Processing</Text>
        <Text style={styles.skillItem}>• Account Reconciliation</Text>
        <Text style={styles.skillItem}>• Credit Control & ITC Checks</Text>
        <Text style={styles.skillItem}>• Client Relations</Text>
        <Text style={styles.skillItem}>• Financial Reporting</Text>
        <Text style={styles.skillItem}>• Administrative Excellence</Text>
        <Text style={styles.skillItem}>• Health & Safety Compliance</Text>

        {/* Software */}
        <Text style={styles.sectionTitle}>SOFTWARE</Text>
        <Text style={styles.skillItem}>• Acumatica</Text>
        <Text style={styles.skillItem}>• Sage</Text>
        <Text style={styles.skillItem}>• System IQ</Text>
        <Text style={styles.skillItem}>• Microsoft Excel</Text>
        <Text style={styles.skillItem}>• Microsoft Word</Text>

        {/* Languages */}
        <Text style={styles.sectionTitle}>LANGUAGES</Text>
        <Text style={styles.skillItem}>• English (Fluent)</Text>
        <Text style={styles.skillItem}>• Afrikaans (Fluent)</Text>
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
          <Text style={styles.responsibility}>→ Comprehensive age analysis and proactive debt collection</Text>
          <Text style={styles.responsibility}>→ Payment processing and daily reconciliations</Text>
          <Text style={styles.responsibility}>→ Credit applications, ITC checks, and credit limit management</Text>
          <Text style={styles.responsibility}>→ Client statements and professional correspondence</Text>
          <Text style={styles.responsibility}>→ Emergency Aid and Health & Safety representative</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Sales Coordinator & Administrative Specialist</Text>
          <Text style={styles.company}>MW Packaging (Pty) Ltd</Text>
          <Text style={styles.period}>2020 – 2024 (4 years) | Welkom, South Africa</Text>
          <Text style={styles.description}>
            Provided comprehensive sales coordination and administrative support for a dynamic packaging company.
          </Text>
          <Text style={styles.responsibility}>→ Coordinated all sales-related activities and client communications</Text>
          <Text style={styles.responsibility}>→ Managed comprehensive administrative functions</Text>
          <Text style={styles.responsibility}>→ Primary receptionist ensuring professional client experience</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Manager</Text>
          <Text style={styles.company}>Golfpark (Funpark) Welkom</Text>
          <Text style={styles.period}>2019 – 2020 | Welkom, South Africa</Text>
          <Text style={styles.responsibility}>→ Complete facility management and security protocols</Text>
          <Text style={styles.responsibility}>→ Staff scheduling and performance management</Text>
          <Text style={styles.responsibility}>→ Financial oversight and daily reconciliations</Text>
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
          <Text style={styles.responsibility}>→ OHS Regulations</Text>
          <Text style={styles.responsibility}>→ HIRA Methodology</Text>
          <Text style={styles.responsibility}>→ Accident Investigation</Text>
          <Text style={styles.responsibility}>→ Working at Heights</Text>
          <Text style={styles.responsibility}>→ Legal Liability (OH&SA)</Text>
        </View>

        {/* References */}
        <Text style={styles.mainSectionTitle}>REFERENCES</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <Text style={styles.company}>Christie Foggit</Text>
            <Text style={styles.description}>Dumansi Trading CC</Text>
            <Text style={styles.responsibility}>📱 066 241 9748</Text>
            <Text style={styles.responsibility}>📧 Christie@dumansi.co.za</Text>
          </View>
          <View style={{ width: "48%" }}>
            <Text style={styles.company}>Anelda</Text>
            <Text style={styles.description}>MW Packaging (Pty) Ltd</Text>
            <Text style={styles.responsibility}>📱 082 374 5430</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)

