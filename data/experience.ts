export type Experience = {
  id: number
  company: string
  role: string
  period: string
  location: string
  points: string[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Jubelio",
    role: "Fullstack Developer & Technical Support (API)",
    period: "Jul 2025 — Present",
    location: "South Jakarta · Hybrid",
    points: [
      "Revamped the webhook platform into Webhook v2, rewriting the Node.js consumer in Go on a Debezium → Kafka pipeline, with a UI option to stay on v1 or opt into v2, and a Redis-tracked per-tenant retry threshold on both versions to keep retries from bloating.",
      "Built a customizable webhook resend with batching, per-batch delay, and bulk resend of filtered webhooks on RabbitMQ and Redis.",
      "Designed the audit log pipeline from PostgreSQL triggers through Debezium and Kafka into ClickHouse, including email notifications via a materialized view.",
      "Built app health monitoring from Kong Gateway error rates in ClickHouse, and the App Store dashboard end-to-end, UI and API.",
      "Primary technical contact for client integrations — investigating production incidents, shipping hotfixes, and driving long-term reliability fixes.",
    ],
    stack: ["Go", "Node.js", "Kafka", "Debezium", "ClickHouse", "PostgreSQL", "RabbitMQ", "Redis"],
  },
]
