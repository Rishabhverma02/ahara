/**
 * Postgres connection (server only). Lazily created so builds and tests don't
 * need a database; returns null when DATABASE_URL isn't configured.
 *
 * Works with any Postgres host (Supabase, Neon, RDS…). For serverless hosts use
 * the provider's *pooled* connection string.
 */
import postgres from "postgres";

let client: postgres.Sql | null | undefined;

export function db(): postgres.Sql | null {
  if (client !== undefined) return client;
  const url = process.env.DATABASE_URL;
  client = url ? postgres(url, { max: 5, idle_timeout: 20, prepare: false }) : null;
  return client;
}
