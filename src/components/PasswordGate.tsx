import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PORTFOLIO_PASSWORD } from '@/lib/portfolio-password';
import { fetchPasswordRequired } from '@/lib/site-access';

const PASSWORD = PORTFOLIO_PASSWORD;
const STORAGE_KEY = 'portfolio-access';

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [passwordRequired, setPasswordRequired] = useState(true);
  const [ready, setReady] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === 'granted') setUnlocked(true);
    } catch (_) {
      /* ignore */
    }

    let cancelled = false;
    const load = () => {
      fetchPasswordRequired()
        .then((required) => {
          if (!cancelled) setPasswordRequired(required);
        })
        .catch(() => {
          /* keep the last known setting; default is locked */
        })
        .finally(() => {
          if (!cancelled) setReady(true);
        });
    };

    load();
    const id = window.setInterval(() => {
      if (document.visibilityState === 'visible') load();
    }, 2000);
    const onVisible = () => {
      if (document.visibilityState === 'visible') load();
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      cancelled = true;
      window.clearInterval(id);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      try {
        sessionStorage.setItem(STORAGE_KEY, 'granted');
      } catch (_) {
        /* ignore */
      }
      setUnlocked(true);
    } else {
      setError(true);
      setValue('');
    }
  };

  if (!ready) return null;
  if (!passwordRequired || unlocked) return <>{children}</>;

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-border">
          <Lock className="h-5 w-5 text-foreground" />
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground">Protected Portfolio</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter the password to continue.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-3">
          <Input
            type="password"
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            aria-label="Password"
            className="text-center"
          />
          {error && (
            <p className="text-xs text-destructive">Incorrect password. Try again.</p>
          )}
          <Button type="submit" className="w-full">
            Unlock
          </Button>
        </form>
      </div>
    </main>
  );
}

export default PasswordGate;