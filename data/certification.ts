export type Certification = {
  id: number
  title: string
  issuer: string
  period: string
  note: string
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Full Stack Developer Bootcamp",
    issuer: "Harisenin.com",
    period: "Dec 2024 — Feb 2025",
    note: "Graduated with a 4.00/4.00 GPA, ranked 3rd fastest to complete Batch 14. Capstone: a movie web app.",
  },
  {
    id: 2,
    title: "Fullstack Web Development Bootcamp",
    issuer: "Udemy · Angela Yu",
    period: "Jul 2024 — Nov 2024",
    note: "Comprehensive fullstack course covering JavaScript, Express.js, React.js, and PostgreSQL.",
  },
  {
    id: 3,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    period: "Jun 2024 — Jul 2024",
    note: "HTML and CSS curriculum, including responsive layouts and accessibility best practices.",
  },
]
