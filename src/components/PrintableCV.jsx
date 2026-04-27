import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./PrintableCV.styles";

const contactEntries = (contact = {}) =>
  [
    { key: "phone", type: "phone", value: contact.phone },
    { key: "email", type: "mail", value: contact.email },
    { key: "location", type: "location", value: contact.location },
  ].filter((item) => item.value);

const PrintableCV = ({
  experience = [],
  education = [],
  interests = [],
  languages = [],
  contact = {},
  labels = {},
  // tagline = "",
  skills = [],
}) => {
  const languagesText = languages
    .map((lang) =>
      lang.level ? `${lang.name} (${lang.level})` : `${lang.name}`,
    )
    .join(", ");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.main}>
          <View style={styles.header}>
            <View style={styles.headerTopRow}>
              <View style={styles.headerLeft}>
                <Text style={styles.name}>BAPTISTE VOLLE</Text>
                <Text style={styles.subtitle}>{labels.subtitle || ""}</Text>
                {/* {labels.experienceDuration ? (
                  <Text style={styles.duration}>
                    {labels.experienceDuration}
                  </Text>
                ) : null} */}
              </View>
              <View style={styles.headerRight}>
                {contactEntries(contact).map((entry) => (
                  <View key={entry.key} style={styles.contactRow}>
                    <Text style={styles.contactLine}>{entry.value}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.sectionBlock}>
            <Text style={styles.sectionTitle}>
              {labels.technicalSkills || "Skills"}
            </Text>
            <View style={[styles.sectionContent, styles.skillsRows]}>
              {(skills || []).map((group, idx) => (
                <View key={idx} style={styles.skillRow}>
                  <Text style={styles.skillRowTitle}>
                    {group.category || ""}
                  </Text>
                  <Text style={styles.skillRowItems}>
                    {(group.items || []).join(" / ")}
                  </Text>
                </View>
              ))}
              {languagesText ? (
                <View style={styles.skillRow}>
                  <Text style={styles.skillRowTitle}>
                    {labels.languages || "Langues"}
                  </Text>
                  <Text style={styles.skillRowItems}>{languagesText}</Text>
                </View>
              ) : null}
            </View>
          </View>

          <View style={styles.sectionBlock}>
            <Text style={styles.sectionTitle}>
              {labels.professionalExperience || ""}
            </Text>
            <View style={styles.sectionContent}>
              {experience.map((exp, i) => (
                <View
                  key={i}
                  style={[
                    styles.timelineRow,
                    i < experience.length - 1 ? styles.experienceRowGap : null,
                  ]}
                >
                  <View style={styles.timelineLeft}>
                    <Text style={styles.leftMain}>{exp.company || ""}</Text>

                    {exp.location ? (
                      <Text style={styles.leftMuted}>{exp.location}</Text>
                    ) : null}
                    <Text style={styles.leftSub}>{exp.duration || ""}</Text>
                  </View>
                  <View style={styles.timelineRight}>
                    <Text style={styles.rightTitle}>{exp.role || ""}</Text>
                    {exp.description ? (
                      <Text style={styles.expDesc}>{exp.description}</Text>
                    ) : null}
                    {(exp.details || []).map((detail, dIdx) => (
                      <View key={`${i}-${dIdx}`} style={styles.detailRow}>
                        <View style={styles.bulletDot} />
                        <Text style={styles.detailText}>{detail}</Text>
                      </View>
                    ))}
                    {exp.technologies ? (
                      <Text style={styles.technologies}>
                        <Text style={styles.techLabel}>
                          {labels.technicalEnvironment || ""}
                        </Text>{" "}
                        {exp.technologies}
                      </Text>
                    ) : null}
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.sectionBlock}>
            <Text style={styles.sectionTitle}>{labels.education || ""}</Text>
            <View style={styles.sectionContent}>
              <View style={[styles.timelineRow, styles.educationRow]}>
                <View style={styles.timelineLeft}>
                  <Text style={styles.leftMain}>{education.school || ""}</Text>

                  {education.location ? (
                    <Text style={styles.leftMuted}>{education.location}</Text>
                  ) : null}
                  <Text style={styles.leftSub}>{education.duration || ""}</Text>
                </View>
                <View style={styles.timelineRight}>
                  <Text style={styles.rightTitle}>
                    {education.degree || ""}
                  </Text>
                  {education.description ? (
                    <Text style={styles.expDesc}>{education.description}</Text>
                  ) : null}
                </View>
              </View>
            </View>
          </View>

          {interests.length > 0 ? (
            <View style={styles.sectionBlock}>
              <Text style={styles.sectionTitle}>
                {labels.interests || "Centres d'interets"}
              </Text>
              <View style={styles.sectionContent}>
                <View style={styles.timelineRow}>
                  <View style={styles.timelineLeft} />
                  <View style={styles.timelineRight}>
                    <Text style={styles.interestsText}>
                      {interests.join(" · ")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ) : null}
        </View>
      </Page>
    </Document>
  );
};

export default PrintableCV;
