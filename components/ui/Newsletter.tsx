'use client';
import { FormEvent, useState } from 'react';
import { track } from '@/lib/analytics';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consent) {
      setError('Please provide consent to subscribe.');
      return;
    }
    setError(null);
    setSuccess(true);
    track('newsletter_subscribe', { email });
  };

  return (
    <div className="mx-auto max-w-xl text-center">
      <h2 className="text-2xl font-semibold">Stay in the loop</h2>
      <p className="mt-2 opacity-80">Get product drops and offers in your inbox.</p>
      <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <input
          aria-label="Email address"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-md border border-neutral-300 bg-transparent px-3 py-3 text-sm focus-visible:ring dark:border-neutral-700"
        />
        <button
          type="submit"
          className="rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 focus-visible:ring disabled:opacity-60"
          disabled={!email}
        >
          Subscribe
        </button>
      </form>
      <label className="mt-3 block text-sm">
        <input
          type="checkbox"
          className="mr-2 align-middle"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
        />
        I consent to receive emails.
      </label>
      <div className="mt-3 text-sm" aria-live="polite">
        {error && <span className="text-red-600">{error}</span>}
        {success && !error && <span className="text-green-600">Thanks! You’re subscribed.</span>}
      </div>
    </div>
  );
}
