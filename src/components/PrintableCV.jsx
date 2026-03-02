import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Create standard printable styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    padding: 0,
  },
  sidebar: {
    width: "28%",
    backgroundColor: "#111827", // Darker Navy
    color: "#FFFFFF",
    padding: 25,
    height: "100%",
  },
  main: {
    width: "72%",
    padding: 35,
  },
  sidebarSection: {
    marginBottom: 25,
  },
  sidebarTitle: {
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
    paddingBottom: 4,
    letterSpacing: 1,
  },
  sidebarItem: {
    fontSize: 8.5,
    marginBottom: 6,
    color: "#d1d5db",
    lineHeight: 1.3,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 13,
    color: "#4b5563",
    marginBottom: 15,
    fontWeight: "medium",
  },
  tagline: {
    fontSize: 9.5,
    color: "#4b5563",
    fontStyle: "italic",
    marginBottom: 25,
    lineHeight: 1.5,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 12,
    borderBottomWidth: 1.5,
    borderBottomColor: "#111827",
    paddingBottom: 3,
    color: "#111827",
    letterSpacing: 0.8,
  },
  itemGroup: {
    marginBottom: 18,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#111827",
  },
  itemDate: {
    fontSize: 8.5,
    color: "#6b7280",
  },
  itemSubtitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  itemSubtitle: {
    fontSize: 9.5,
    fontWeight: "semibold",
    color: "#374151",
  },
  itemLocation: {
    fontSize: 8.5,
    color: "#6b7280",
    fontStyle: "italic",
  },
  itemDescription: {
    fontSize: 9,
    lineHeight: 1.5,
    color: "#374151",
    marginBottom: 4,
  },
  bulletPointContainer: {
    flexDirection: "row",
    marginBottom: 3,
  },
  bulletMarker: {
    width: 10,
    fontSize: 9,
    color: "#4b5563",
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.4,
    color: "#4b5563",
  },
  boldText: {
    fontWeight: "bold",
    color: "#111827",
  },
});

const PrintableCV = ({
  experience,
  education,
  skills,
  languages,
  contact,
  labels,
  tagline,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Left Sidebar */}
      <View style={styles.sidebar}>
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarTitle}>{labels.contact}</Text>
          <Text style={styles.sidebarItem}>{contact.email}</Text>
          <Text style={styles.sidebarItem}>{contact.phone}</Text>
          <Text style={styles.sidebarItem}>{contact.location}</Text>
          <Text style={styles.sidebarItem}>
            LinkedIn: {contact.linkedin.split("/").pop()}
          </Text>
          <Text style={styles.sidebarItem}>
            GitHub: {contact.github.split("/").pop()}
          </Text>
        </View>

        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarTitle}>{labels.technicalSkills}</Text>
          {skills.map((group, i) => (
            <View key={i} style={{ marginBottom: 8 }}>
              <Text
                style={[
                  styles.sidebarItem,
                  { fontWeight: "bold", color: "#FFFFFF" },
                ]}
              >
                {group.category}
              </Text>
              <Text style={styles.sidebarItem}>{group.items.join(", ")}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarTitle}>{labels.languages}</Text>
          {languages.map((lang, i) => (
            <Text key={i} style={styles.sidebarItem}>
              {lang.name} : {lang.level}
            </Text>
          ))}
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        <Text style={styles.name}>BAPTISTE VOLLE</Text>
        <Text style={styles.subtitle}>{labels.subtitle}</Text>
        <Text style={styles.tagline}>{tagline}</Text>

        <View style={{ marginBottom: 20 }}>
          <Text style={styles.sectionTitle}>
            {labels.professionalExperience}
          </Text>
          {experience.map((exp, i) => (
            <View key={i} style={styles.itemGroup}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{exp.role}</Text>
                <Text style={styles.itemDate}>{exp.duration}</Text>
              </View>
              <View style={styles.itemSubtitleRow}>
                <Text style={styles.itemSubtitle}>{exp.company}</Text>
                {exp.location && (
                  <Text style={styles.itemLocation}>{exp.location}</Text>
                )}
              </View>
              <Text style={styles.itemDescription}>{exp.description}</Text>
              {exp.details &&
                exp.details.map((detail, dIdx) => {
                  const colonIndex = detail.indexOf(":");
                  if (colonIndex !== -1) {
                    const title = detail.substring(0, colonIndex);
                    const rest = detail.substring(colonIndex);
                    return (
                      <View key={dIdx} style={styles.bulletPointContainer}>
                        <Text style={styles.bulletMarker}>•</Text>
                        <Text style={styles.bulletText}>
                          <Text style={styles.boldText}>{title}</Text>
                          {rest}
                        </Text>
                      </View>
                    );
                  }
                  return (
                    <View key={dIdx} style={styles.bulletPointContainer}>
                      <Text style={styles.bulletMarker}>•</Text>
                      <Text style={styles.bulletText}>{detail}</Text>
                    </View>
                  );
                })}
            </View>
          ))}
        </View>

        <View>
          <Text style={styles.sectionTitle}>{labels.education}</Text>
          {education.map((edu, i) => (
            <View key={i} style={styles.itemGroup}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{edu.degree}</Text>
                <Text style={styles.itemDate}>{edu.duration}</Text>
              </View>
              <Text style={styles.itemSubtitle}>{edu.school}</Text>
              <Text style={styles.itemDescription}>{edu.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default PrintableCV;
