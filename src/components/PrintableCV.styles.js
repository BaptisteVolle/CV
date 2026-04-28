import { StyleSheet, Font } from "@react-pdf/renderer";
import CalibriRegular from "../assets/fonts/calibri-regular.ttf";
import CalibriBold from "../assets/fonts/calibri-bold.ttf";

Font.register({
  family: "Calibri",
  fonts: [
    { src: CalibriRegular, fontWeight: "normal" },
    { src: CalibriBold, fontWeight: "bold" },
  ],
});

export const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingVertical: 18,
    fontFamily: "Calibri",
    backgroundColor: "#ffffff",
  },
  main: {
    width: "100%",
  },
  header: {
    paddingTop: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerLeft: {
    flex: 1,
    paddingRight: 16,
  },
  headerRight: {
    width: 200,
    paddingLeft: 12,
    alignItems: "flex-end",
    alignSelf: "stretch",
    justifyContent: "flex-start",
    marginTop: 2,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111111",
    textTransform: "uppercase",
    lineHeight: 1.2,
    letterSpacing: 0.7,
  },
  subtitle: {
    fontSize: 16,
    color: "#111111",
    marginTop: 2,
    lineHeight: 1.35,
  },
  duration: {
    fontSize: 16,
    marginTop: 2,
    color: "#111111",
    fontWeight: "bold",
    lineHeight: 1.35,
  },
  headerSummaryRow: {
    marginTop: 0,
    paddingHorizontal: 0,
  },
  contactRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 2,
  },
  contactLine: {
    fontSize: 10,
    color: "#111111",
    textAlign: "right",
    lineHeight: 1.35,
  },
  sectionBlock: {
    marginTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 8,
  },
  sectionTitle: {
    marginBottom: 6,
    marginTop: 2,
    fontSize: 12,
    fontWeight: "bold",
    color: "#111111",
    letterSpacing: 0.4,
    textTransform: "uppercase",
    lineHeight: 1.2,
  },
  sectionContent: {
    marginHorizontal: 0,
  },
  headerSummary: {
    marginTop: 10,
    fontSize: 10,
    color: "#111111",
    lineHeight: 1.35,
    textAlign: "left",
    width: "100%",
  },
  timelineRow: {
    flexDirection: "row",
    marginBottom: 0,
  },
  experienceRowGap: {
    marginBottom: 16,
  },
  educationRow: {
    marginBottom: 10,
  },
  timelineLeft: {
    width: "20%",
    paddingRight: 6,
  },
  timelineRight: {
    width: "80%",
  },
  leftMain: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 0,
    lineHeight: 1.35,
    marginTop: 2,
  },
  leftSub: {
    fontSize: 10,
    color: "#111111",
    marginBottom: 0,
    lineHeight: 1.35,
  },
  leftMuted: {
    fontSize: 10,
    color: "#111111",
    lineHeight: 1.35,
  },
  rightTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 2,
    lineHeight: 1.2,
    marginTop: 2,
  },
  rightText: {
    fontSize: 10,
    color: "#111111",
    lineHeight: 1.35,
    marginBottom: 3,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "flex-start",
  },
  expDesc: {
    fontSize: 10,
    color: "#111111",
    lineHeight: 1.35,
    marginBottom: 6,
    marginTop: 4,
    fontWeight: "normal",
  },
  bulletDot: {
    width: 3,
    height: 3,
    borderRadius: 1,
    backgroundColor: "#111111",
    marginTop: 5,
    marginRight: 6,
  },
  detailText: {
    flex: 1,
    fontSize: 10,
    color: "#111111",
    lineHeight: 1.35,
  },
  technologies: {
    marginTop: 4,
    paddingTop: 3,
    fontSize: 10,
    color: "#111111",
    lineHeight: 1.35,
  },
  skillsRows: {
    marginTop: 1,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  skillRowTitle: {
    width: "20%",
    paddingRight: 6,
    fontSize: 10,
    fontWeight: "bold",
    color: "#111111",
    lineHeight: 1.35,
  },
  skillRowItems: {
    width: "80%",
    fontSize: 9,
    color: "#111111",
    lineHeight: 1.35,
    marginBottom: 1,
  },
  techLabel: {
    fontWeight: "bold",
    color: "#111111",
  },
  interestsText: {
    fontSize: 10,
    color: "#111111",
    lineHeight: 1.35,
  },
  interestsTextSpaced: {
    marginTop: 3,
  },
});
