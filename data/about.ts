export const statement: { text: string; muted?: boolean }[] = [
  { text: "Fullstack developer grown into backend and platform engineering, " },
  { text: "now building production services in Go at Jubelio — from Debezium and Kafka pipelines to the dashboards on top. ", muted: true },
  { text: "I own features end-to-end — from requirement analysis and API design to deployment " },
  { text: "and the production incidents that come after.", muted: true },
]

export const stats: { value: string; label: string }[] = [
  { value: "1+", label: "Year shipping production systems" },
  { value: "4.00", label: "Bootcamp GPA, Harisenin Batch 14" },
  { value: "3rd", label: "Fastest to graduate in batch" },
]

export const marquee: string[] = [
  "Go",
  "TypeScript",
  "Node.js",
  "Next.js",
  "React",
  "PostgreSQL",
  "ClickHouse",
  "Kafka",
  "Debezium",
  "RabbitMQ",
  "Redis",
  "Docker",
  "Kubernetes",
]

export const toolkit: { group: string; items: string[] }[] = [
  {
    group: "Languages & Backend",
    items: ["Go", "JavaScript", "TypeScript", "Node.js", "Express.js", "REST API design", "Event-driven architecture"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Zustand", "TanStack Query", "Tailwind CSS", "Bootstrap", "jQuery"],
  },
  {
    group: "Data & Messaging",
    items: ["PostgreSQL", "MySQL", "MongoDB", "ClickHouse", "Kafka", "Debezium", "RabbitMQ", "Redis", "Prisma", "Sequelize", "Mongoose"],
  },
  {
    group: "Infrastructure & Tools",
    items: ["Git", "GitHub Actions", "Docker", "Kubernetes", "Kong Gateway", "Postman", "Vercel", "Jest", "React Testing Library"],
  },
  {
    group: "Auth & Security",
    items: ["JWT", "OAuth (Supabase)", "bcrypt"],
  },
  {
    group: "AI-Assisted Development",
    items: ["Claude Code", "OpenCode", "GitHub Copilot"],
  },
]
