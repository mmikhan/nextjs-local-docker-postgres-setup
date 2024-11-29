import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  // await sql.query(`CREATE TABLE users (name VARCHAR(255));`);
  // await sql.query(`INSERT INTO users (name) VALUES ('John Doe');`);
  const { rows, fields } = await sql.query(`SELECT * FROM users;`);

  return Response.json({ success: true, rows, fields });
}
