import fs from "fs";
import path from "path";
import type { Connect, Plugin } from "vite";
import { PORTFOLIO_PASSWORD } from "./src/lib/portfolio-password";

const fileFor = (root: string) => path.join(root, ".data", "site-access.json");

function readRequired(root: string): boolean {
  try {
    const parsed = JSON.parse(fs.readFileSync(fileFor(root), "utf8")) as { passwordRequired?: unknown };
    return parsed.passwordRequired !== false;
  } catch {
    return true;
  }
}

function writeRequired(root: string, passwordRequired: boolean) {
  const file = fileFor(root);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify({ passwordRequired }));
}

function send(res: Connect.ServerResponse, status: number, body: unknown) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

/** Local stand-in for the Netlify function so the toggle works in `npm run dev`. */
export function siteAccessDevPlugin(): Plugin {
  return {
    name: "site-access-dev",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/api/site-access", (req, res) => {
        const root = server.config.root;
        if (req.method === "GET") {
          send(res, 200, { passwordRequired: readRequired(root) });
          return;
        }
        if (req.method !== "POST") {
          send(res, 405, { error: "Method not allowed" });
          return;
        }
        let raw = "";
        req.on("data", (chunk) => {
          raw += chunk;
        });
        req.on("end", () => {
          try {
            const body = JSON.parse(raw) as { password?: unknown; passwordRequired?: unknown };
            if (body.password !== PORTFOLIO_PASSWORD || typeof body.passwordRequired !== "boolean") {
              send(res, 401, { error: "Unauthorized" });
              return;
            }
            writeRequired(root, body.passwordRequired);
            send(res, 200, { passwordRequired: body.passwordRequired });
          } catch {
            send(res, 400, { error: "Bad request" });
          }
        });
      });
    },
  };
}
