import React from 'react';
import { Link } from 'react-router-dom';

const reportUrl = import.meta.env.VITE_ERROR_REPORT_URL;

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Application error boundary caught an error:', error, info);

    if (reportUrl) {
      fetch(reportUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: error?.message,
          stack: error?.stack,
          componentStack: info?.componentStack,
          url: window.location.href,
        }),
        keepalive: true,
      }).catch(() => {});
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem', background: '#0F1A3A' }}>
          <div style={{ maxWidth: 680, textAlign: 'center', color: '#fff' }}>
            <p style={{ marginBottom: '1rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.75rem' }}>Unexpected error</p>
            <h1 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Something went wrong</h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Please refresh the page, return home, or contact GUE Industrial Parks Ltd if the issue continues.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/" style={{ padding: '0.9rem 1.4rem', borderRadius: '9999px', background: '#fff', color: '#0F1A3A', fontWeight: 700 }}>Back Home</Link>
              <Link to="/contact" style={{ padding: '0.9rem 1.4rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.35)', color: '#fff', fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}