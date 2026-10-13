import { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { PORTFOLIO_PASSWORD } from "@/lib/portfolio-password";
import { fetchPasswordRequired, updatePasswordRequired } from "@/lib/site-access";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [passwordRequired, setPasswordRequired] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(false);

  useEffect(() => {
    document.title = "Portfolio access | Admin";
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchPasswordRequired()
      .then((required) => {
        if (!cancelled) setPasswordRequired(required);
      })
      .catch(() => {
        if (!cancelled) setSaveError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PORTFOLIO_PASSWORD) {
      setAuthed(true);
      setLoginError(false);
      return;
    }
    setLoginError(true);
    setPassword("");
  };

  const handleToggle = async (next: boolean) => {
    const previous = passwordRequired;
    setPasswordRequired(next);
    setSaving(true);
    setSaveError(false);
    try {
      await updatePasswordRequired(password, next);
    } catch {
      setPasswordRequired(previous);
      setSaveError(true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-border">
          <Lock className="h-5 w-5 text-foreground" />
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground">Portfolio access</h1>
        {!authed ? (
          <>
            <p className="mt-2 text-sm text-muted-foreground">Enter the portfolio password to manage access.</p>
            <form onSubmit={handleLogin} className="mt-8 space-y-3">
              <Input
                type="password"
                autoFocus
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setLoginError(false);
                }}
                placeholder="Password"
                aria-label="Password"
                className="text-center"
              />
              {loginError && <p className="text-xs text-destructive">Incorrect password. Try again.</p>}
              <Button type="submit" className="w-full">
                Continue
              </Button>
            </form>
          </>
        ) : (
          <>
            <p className="mt-2 text-sm text-muted-foreground">
              Turn the password on or off. Open portfolio pages update on their own.
            </p>
            <div className="mt-8 flex items-center justify-between gap-4 rounded-lg border border-border px-4 py-4 text-left">
              <div>
                <p className="text-sm font-medium text-foreground">Require password</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {loading
                    ? "Checking current setting…"
                    : passwordRequired
                      ? "Visitors must enter the password."
                      : "The portfolio is open."}
                </p>
              </div>
              <Switch
                checked={passwordRequired}
                disabled={loading || saving}
                onCheckedChange={handleToggle}
                aria-label="Require password"
              />
            </div>
            {saveError && (
              <p className="mt-3 text-xs text-destructive">Could not save that change. Try the switch again.</p>
            )}
            <Button
              type="button"
              variant="ghost"
              className="mt-6 w-full"
              onClick={() => {
                setAuthed(false);
                setPassword("");
              }}
            >
              Sign out
            </Button>
          </>
        )}
      </div>
    </main>
  );
}
