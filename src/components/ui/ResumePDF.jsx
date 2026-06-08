import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

// Brand colors lifted straight from the site's CSS tokens (light-theme variants for print)
const COLORS = {
  accent: "#7e22ce",
  cta: "#9333ea",
  text: "#1c1917",
  muted: "#52525b",
  line: "#e4e4e7",
  chipBg: "#f4f0fa",
};

// Uses built-in Helvetica (no network font dependency = always renders reliably)
const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 40,
    paddingHorizontal: 42,
    fontSize: 9.5,
    fontFamily: "Helvetica",
    color: COLORS.text,
    lineHeight: 1.45,
  },
  name: { fontFamily: "Helvetica-Bold", fontSize: 24, letterSpacing: -0.5, color: COLORS.text, lineHeight: 1.1 },
  title: { fontFamily: "Helvetica", fontSize: 11, color: COLORS.accent, marginTop: 4, marginBottom: 6 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", fontSize: 8.5, color: COLORS.muted },
  contactLink: { color: COLORS.accent, textDecoration: "none" },
  sep: { color: COLORS.muted, marginHorizontal: 4 },
  headerRule: { borderBottomWidth: 2, borderBottomColor: COLORS.accent, marginTop: 10, marginBottom: 14 },

  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    color: COLORS.accent,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  section: { marginBottom: 13 },

  entryHeaderRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  entryRole: { fontFamily: "Helvetica-Bold", fontSize: 10.5, color: COLORS.text, flex: 1, paddingRight: 8 },
  entrySub: { fontFamily: "Helvetica-Oblique", fontSize: 9, color: COLORS.muted, marginBottom: 3 },
  entryDate: { fontSize: 8.5, color: COLORS.muted },
  entry: { marginBottom: 9 },

  bulletRow: { flexDirection: "row", marginBottom: 2.5, paddingRight: 6 },
  bulletDot: { width: 10, color: COLORS.accent, fontSize: 9 },
  bulletText: { flex: 1, fontSize: 9 },

  skillRow: { marginBottom: 4 },
  skillCat: { fontFamily: "Helvetica-Bold", fontSize: 9, color: COLORS.accent },
  skillVal: { fontSize: 9, color: COLORS.text },

  techLine: { fontFamily: "Helvetica-Oblique", fontSize: 8, color: COLORS.cta, marginBottom: 3 },

  honorHighlight: {
    backgroundColor: COLORS.chipBg,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
    padding: 6,
    marginBottom: 6,
  },
});

function Bullet({ children }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDot}>{"\u25B8"}</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

export default function ResumePDF({ data, lang = "en" }) {
  const p = data.portfolio;
  const resume = lang === "es" ? p.i18n.es.resumeData : p.resume;
  const projects = p.projects;

  return (
    <Document author="Jan Marte" title="Jan Marte - Resume" subject="Full-Stack Developer Resume">
      <Page size="A4" style={styles.page}>

        {/* HEADER */}
        <View>
          <Text style={styles.name}>Jan Marte</Text>
          <Text style={styles.title}>Full-Stack Developer</Text>
          <View style={styles.contactRow}>
            <Link style={styles.contactLink} src="mailto:janmmarte16@gmail.com">janmmarte16@gmail.com</Link>
            <Text style={styles.sep}>|</Text>
            <Link style={styles.contactLink} src="https://github.com/JanMarte">github.com/JanMarte</Link>
            <Text style={styles.sep}>|</Text>
            <Link style={styles.contactLink} src="https://www.linkedin.com/in/janmmarte/">linkedin.com/in/janmmarte</Link>
            <Text style={styles.sep}>|</Text>
            <Text>Cedar Rapids, IA</Text>
          </View>
        </View>
        <View style={styles.headerRule} />

        {/* EXPERIENCE */}
        <Section title={lang === "es" ? "Experiencia" : "Experience"}>
          {resume.experience.map((job, i) => (
            <View key={i} style={styles.entry} wrap={false}>
              <View style={styles.entryHeaderRow}>
                <Text style={styles.entryRole}>{job.role}</Text>
                <Text style={styles.entryDate}>{job.date}</Text>
              </View>
              <Text style={styles.entrySub}>{job.company}</Text>
              {job.bullets.map((b, j) => <Bullet key={j}>{b}</Bullet>)}
            </View>
          ))}
        </Section>

        {/* SKILLS */}
        <Section title={lang === "es" ? "Habilidades Tecnicas" : "Technical Skills"}>
          {Object.entries(resume.skills).map(([cat, val], i) => (
            <View key={i} style={styles.skillRow}>
              <Text>
                <Text style={styles.skillCat}>{cat}: </Text>
                <Text style={styles.skillVal}>{val}</Text>
              </Text>
            </View>
          ))}
        </Section>

        {/* SELECTED PROJECTS — same data source as the live site */}
        <Section title={lang === "es" ? "Proyectos Destacados" : "Selected Projects"}>
          {projects.map((proj, i) => {
            const pt = lang === "es" && p.i18n.es.projects[proj.id] ? p.i18n.es.projects[proj.id] : proj;
            return (
              <View key={i} style={styles.entry} wrap={false}>
                <View style={styles.entryHeaderRow}>
                  <Text style={styles.entryRole}>{pt.title}</Text>
                  <Text style={styles.entryDate}>{proj.status}</Text>
                </View>
                <Text style={styles.techLine}>{proj.techStack.join("  /  ")}</Text>
                <Bullet>{pt.shortDescription}</Bullet>
              </View>
            );
          })}
        </Section>

        {/* EDUCATION */}
        <Section title={lang === "es" ? "Educacion" : "Education"}>
          {resume.education.map((edu, i) => (
            <View key={i} style={styles.entry} wrap={false}>
              <View style={styles.entryHeaderRow}>
                <Text style={styles.entryRole}>{edu.degree}</Text>
                <Text style={styles.entryDate}>{edu.date}</Text>
              </View>
              <Text style={styles.entrySub}>{edu.school}</Text>
              {edu.details.map((d, j) => <Bullet key={j}>{d}</Bullet>)}
            </View>
          ))}
        </Section>

        {/* HONORS */}
        <Section title={lang === "es" ? "Honores y Reconocimientos" : "Honors & Recognition"}>
          {resume.honors.map((h, i) => (
            <View key={i} style={i === 0 ? styles.honorHighlight : styles.entry} wrap={false}>
              <View style={styles.entryHeaderRow}>
                <Text style={styles.entryRole}>{h.title}</Text>
                <Text style={styles.entryDate}>{h.date}</Text>
              </View>
              <Text style={styles.entrySub}>{h.organization}</Text>
              <Text style={{ fontSize: 8.5 }}>{h.description}</Text>
            </View>
          ))}
        </Section>

      </Page>
    </Document>
  );
}