export type SiteAccess = {
  passwordRequired: boolean;
};

export async function fetchPasswordRequired(): Promise<boolean> {
  const res = await fetch("/api/site-access", { cache: "no-store" });
  if (!res.ok) throw new Error("Could not read site access");
  const data = (await res.json()) as Partial<SiteAccess>;
  return data.passwordRequired !== false;
}

export async function updatePasswordRequired(password: string, passwordRequired: boolean): Promise<void> {
  const res = await fetch("/api/site-access", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ password, passwordRequired }),
  });
  if (!res.ok) throw new Error("Could not update site access");
}
