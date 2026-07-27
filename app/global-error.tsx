'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang='en'>
      <body>
        <main
          style={{
            alignItems: 'center',
            background: '#0a0a0f',
            color: '#f4f4ff',
            display: 'flex',
            fontFamily: 'Arial, sans-serif',
            minHeight: '100vh',
            padding: '24px',
          }}
        >
          <div style={{ margin: '0 auto', maxWidth: '720px' }}>
            <p style={{ color: '#c084fc', fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              Plex · System error
            </p>
            <h1 style={{ fontSize: 'clamp(36px, 7vw, 64px)', lineHeight: 1.05, margin: '20px 0' }}>
              The site could not finish loading.
            </h1>
            <p style={{ color: '#a0a0b8', fontSize: '18px', lineHeight: 1.65 }}>
              Please retry. If the problem continues, contact us at contact@plex.ee.
            </p>
            <button
              type='button'
              onClick={reset}
              style={{
                background: '#a855f7',
                border: 0,
                borderRadius: '999px',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                marginTop: '28px',
                padding: '14px 24px',
                textTransform: 'uppercase',
              }}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
