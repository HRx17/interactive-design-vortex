import { getStore } from "@netlify/blobs";
import { PORTFOLIO_PASSWORD } from "../../src/lib/portfolio-password";

const STORE = "portfolio-gate";
const KEY = "password-required";

const headers = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store, max-age=0",
  "Netlify-CDN-Cache-Control": "no-store",
};

async function readRequired(): Promise<boolean> {
  const store = getStore(STORE);
  const raw = await store.get(KEY, { type: "text" });
  if (raw == null) return true;
  return raw === "true";
}

export default async (req: Request) => {
  if (req.method === "GET") {
    const passwordRequired = await readRequired();
    return new Response(JSON.stringify({ passwordRequired }), { headers });
  }

  if (req.method === "POST") {
    let body: { password?: unknown; passwordRequired?: unknown } | null = null;
    try {
      body = await req.json();
    } catch {
      body = null;
    }
    if (!body || body.password !== PORTFOLIO_PASSWORD || typeof body.passwordRequired !== "boolean") {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers });
    }
    const store = getStore(STORE);
    await store.set(KEY, body.passwordRequired ? "true" : "false");
    return new Response(JSON.stringify({ passwordRequired: body.passwordRequired }), { headers });
  }

  return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
};

export const config = {
  path: "/api/site-access",
};
