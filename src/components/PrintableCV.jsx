import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Svg,
  Path,
} from "@react-pdf/renderer";


import RobotoRegular from "../assets/fonts/RobotoRegular-3m4L.ttf";
import RobotoBold from "../assets/fonts/RobotoBold-Xdoj.ttf";
import RobotoItalic from "../assets/fonts/RobotoItalic-W0gE.ttf";
import RobotoBoldItalic from "../assets/fonts/RobotoBoldItalic-4e0x.ttf";

Font.register({
  family: "Roboto",
  fonts: [
    { src: RobotoRegular },
    { src: RobotoBold, fontWeight: "bold" },
    { src: RobotoItalic, fontStyle: "italic" },
    { src: RobotoBoldItalic, fontWeight: "bold", fontStyle: "italic" },
  ]
});

// Create standard printable styles



const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    fontFamily: "Roboto",
    backgroundColor: "#FFFFFF",
  },
  main: {
    width: "100%",
  },
  header: {
    marginBottom: 15,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
    paddingBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 13,
    color: "#374151",
    marginTop: 2,
    fontWeight: "bold",
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    gap: 10,
  },
  contactItem: {
    fontSize: 9,
    color: "#374151",
  },
  contact: {
    fontSize: 9.5,
    color: "#4b5563",
    marginTop: 5,
    textAlign: "center",
  },
  contactInfo: {
    fontSize: 9.5,
    color: "#4b5563",
    fontWeight: "normal",
  },
  tagline: {
    fontSize: 10,
    color: "#000000",
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 1.4,
    textAlign: "justify",
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    backgroundColor: "#f3f4f6", 
    color: "#111827",
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: -8,
    marginTop: 14,
    marginBottom: 12,
    textTransform: "uppercase",
    
  },
  itemGroup: {
    marginBottom: 16,
    flexDirection: "column", 
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#000000",
  },
  itemDate: {
    fontSize: 8.5,
    color: "#4b5563",
  },
  itemSubtitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  itemSubtitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#374151",
  },
  itemLocation: {
    fontSize: 8.5,
    color: "#6b7280",
    fontStyle: "italic",
  },
  itemDescription: {
    fontSize: 10,
    lineHeight: 1.3,
    color: "#000000",
    marginBottom: 4,
  },
  bulletPointContainer: {
    flexDirection: "row",
    marginBottom: 2,
    paddingLeft: 4,
  },
  bulletMarker: {
    width: 10,
    fontSize: 8.5,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.3,
    color: "#000000",
  },
  
  technologiesText: {
    fontSize: 8,
    color: "#374151",
    marginTop: 5,
    fontStyle: "italic",
    paddingTop: 3,
    borderTopWidth: 0.5,
    borderTopColor: "#e5e7eb",
  },
});

const PrintableCV = ({
  experience,
  education,
  languages,
  contact,
  labels,
  tagline,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Main Content */}
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.name}>BAPTISTE VOLLE</Text>
          <Text style={styles.subtitle}>{labels.subtitle}, {labels.experienceDuration}</Text>

          <Text style={styles.contact}> <Text style={styles.contactInfo}> {contact.email} </Text>  •  <Text style={styles.contactInfo}>{contact.phone} </Text>  </Text>

        </View>

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
              {exp.technologies && (
                <Text style={styles.technologiesText}>
                  <Text style={{ fontWeight: "bold", fontStyle: "normal" }}>
                    {labels.technicalEnvironment}{" "}
                  </Text>
                  {exp.technologies}
                </Text>
              )}
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
            {edu.description ? <Text style={styles.itemDescription}>{edu.description}</Text> : null}
          </View>
        ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default PrintableCV;
