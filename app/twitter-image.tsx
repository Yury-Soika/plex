import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const alt = 'Plex — Digital Studio for Nightlife & Hospitality';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          fontFamily: 'sans-serif',
          color: '#f4f4f6',
          position: 'relative',
        }}
      >
        {/* Glow blob top right */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,111,247,0.4) 0%, transparent 70%)',
          }}
        />

        {/* Top: logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: '#7c6ff7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 36,
              fontWeight: 700,
              boxShadow: '0 12px 40px rgba(124,111,247,0.5)',
            }}
          >
            P
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1 }}>Plex</div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 18,
              color: '#a0a0b8',
              textTransform: 'uppercase',
              letterSpacing: 3,
              fontWeight: 600,
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: 4, background: '#a855f7' }} />
            Digital Studio · Nightlife & Hospitality
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Websites, booking systems, and apps for{' '}
            <span style={{ color: '#a855f7' }}>venues that care.</span>
          </div>
        </div>

        {/* Bottom: tech stack */}
        <div
          style={{
            display: 'flex',
            gap: 32,
            fontSize: 20,
            color: '#8b8d97',
            fontWeight: 500,
          }}
        >
          <span>Next.js</span>
          <span style={{ color: '#4a4c57' }}>·</span>
          <span>NestJS</span>
          <span style={{ color: '#4a4c57' }}>·</span>
          <span>React Native</span>
          <span style={{ marginLeft: 'auto', color: '#7c6ff7' }}>plex.ee</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
