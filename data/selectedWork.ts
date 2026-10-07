export type SelectedWork = {
  id: number
  title: string
  description: string
  challenge: string
  solution: string
  type: "Jubelio" | "Personal"
  role: string
  year: string
  stack: string[]
}

export const selectedWorks: SelectedWork[] = [
  {
    id: 1,
    title: "Webhook v2",
    description:
      "A revamp of Jubelio's webhook platform into a change-data-capture pipeline with Go consumers.",
    challenge:
      "The original webhook consumer ran on Node.js and couldn't process deliveries concurrently fast enough as event volume grew — but existing users still depended on v1 working exactly as before.",
    solution:
      "Rewrote the consumer in Go on a Debezium → Kafka pipeline from PostgreSQL. Reworked how webhooks are stored so v1 and v2 run side by side: existing webhooks stay on v1 by default, and users choose v1 or v2 in the UI when adding new ones. Added a per-tenant retry threshold, tracked in Redis, to both versions: once a tenant has 500 pending retries, new retries are refused until one is consumed or the 1-hour TTL expires, so the retry queue can't bloat.",
    type: "Jubelio",
    role: "Fullstack Developer",
    year: "2026",
    stack: ["Go", "Debezium", "Kafka", "Redis", "PostgreSQL", "React.js"],
  },
  {
    id: 2,
    title: "Bulk Webhook Resend",
    description:
      "A fully customizable way to resend webhooks, one at a time or in bulk.",
    challenge:
      "Resending webhooks one by one doesn't scale, and resending many at once can flood the receiving endpoints.",
    solution:
      "Built resend on RabbitMQ with configurable batch size and per-batch delay, plus bulk resend of every webhook matching a filter, tracked in Redis. The internal app shows progress with short polling, since real-time push via WebSocket or SSE wasn't needed.",
    type: "Jubelio",
    role: "Fullstack Developer",
    year: "2026",
    stack: ["Node.js", "RabbitMQ", "Redis", "React.js"],
  },
  {
    id: 3,
    title: "Audit Log Pipeline",
    description:
      "Platform-wide audit logging streamed from PostgreSQL into ClickHouse.",
    challenge:
      "Audit records in PostgreSQL are truncated after a few days, so long-term audit history and the notifications built on it needed a different home.",
    solution:
      "PostgreSQL triggers on every table feed a central audit table, which Debezium streams into Kafka and ClickHouse ingests through its Kafka engine. Audit history is queried from ClickHouse, and a materialized view routes email-flagged events back to Kafka for the email service.",
    type: "Jubelio",
    role: "Backend Developer",
    year: "2026",
    stack: ["PostgreSQL", "Debezium", "Kafka", "ClickHouse"],
  },
  {
    id: 4,
    title: "App Health Monitoring",
    description:
      "Health metrics for apps, built from gateway error rates, with user notifications.",
    challenge:
      "Users had no automatic signal when an app's error rate started climbing, so problems surfaced late.",
    solution:
      "Kong Gateway error rates are aggregated in ClickHouse. A scheduled job evaluates them and publishes status changes, such as warnings, as app health metrics into the central pipeline so users get notified.",
    type: "Jubelio",
    role: "Backend Developer",
    year: "2026",
    stack: ["Kong Gateway", "ClickHouse", "PostgreSQL"],
  },
]
