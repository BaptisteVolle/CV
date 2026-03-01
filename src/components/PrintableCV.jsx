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
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 40,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    color: "#333333",
    marginBottom: 2,
  },
  section: {
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    paddingBottom: 3,
  },
  itemGroup: {
    marginBottom: 12,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  itemDate: {
    fontSize: 10,
    color: "#666666",
  },
  itemSubtitle: {
    fontSize: 11,
    fontStyle: "italic",
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 10,
    lineHeight: 1.4,
    color: "#333333",
  },
  skillsGroup: {
    marginBottom: 8,
  },
  skillCategory: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 3,
  },
  skillItems: {
    fontSize: 10,
    color: "#333333",
  },
});

const PrintableCV = ({ experience, education, skills }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>BAPTISTE</Text>
        <Text style={styles.contact}>Full Stack Developer & Designer</Text>
        <Text style={styles.contact}>
          contact@example.com | LinkedIn | GitHub
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {experience.map((exp, i) => (
          <View key={i} style={styles.itemGroup}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{exp.role}</Text>
              <Text style={styles.itemDate}>{exp.duration}</Text>
            </View>
            <Text style={styles.itemSubtitle}>{exp.company}</Text>
            <Text style={styles.itemDescription}>{exp.description}</Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        {skills.map((skillGroup, i) => (
          <View key={i} style={styles.skillsGroup}>
            <Text style={styles.skillCategory}>{skillGroup.category}</Text>
            <Text style={styles.skillItems}>{skillGroup.items.join(", ")}</Text>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
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
    </Page>
  </Document>
);

export default PrintableCV;
