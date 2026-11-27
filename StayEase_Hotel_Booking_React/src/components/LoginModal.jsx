import { useEffect, useState } from 'react';

export default function LoginModal({ open, initialMode = 'login', onClose, onAuthenticate }) {
  const [mode, setMode] = useState(initialMode);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      setMode(initialMode);
      setError('');
      setSubmitting(false);
    }
  }, [open, initialMode]);

  if (!open) return null;

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = await onAuthenticate({
      mode,
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      password: String(formData.get('password') || ''),
    });

    setSubmitting(false);
    if (!result?.success) {
      setError(result?.error || 'Unable to continue. Please try again.');
    } else {
      form.reset();
    }
  }

  return (
    <div className="modal active" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="modal-card small" role="dialog" aria-modal="true" aria-labelledby="authTitle">
        <button className="close" type="button" onClick={onClose} aria-label="Close">×</button>
        <p className="eyebrow">STAYEASE ACCOUNT</p>
        <h2 id="authTitle">{mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
        <p className="muted auth-intro">
          {mode === 'login' ? 'Log in to continue with your bookings.' : 'Sign up to save and manage your hotel bookings.'}
        </p>

        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <>
              <label htmlFor="registerName">Full Name</label>
              <input id="registerName" name="name" type="text" required minLength="2" placeholder="Enter your name" autoComplete="name" />
            </>
          )}
          <label htmlFor="authEmail">Email</label>
          <input id="authEmail" name="email" type="email" required placeholder="Enter email" autoComplete="email" />
          <label htmlFor="authPassword">Password</label>
          <input id="authPassword" name="password" type="password" required minLength="6" placeholder="At least 6 characters" autoComplete={mode === 'login' ? 'current-password' : 'new-password'} />
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="primary-btn" type="submit" disabled={submitting}>
            {submitting ? 'Please wait...' : mode === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>

        <p className="auth-switch">
          {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button type="button" onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError(''); }}>
            {mode === 'login' ? 'Sign up' : 'Login'}
          </button>
        </p>
        <p className="auth-demo-note">Demo account data is saved only in this browser. Do not use a real password.</p>
      </div>
    </div>
  );
}
