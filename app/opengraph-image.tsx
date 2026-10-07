import { ImageResponse } from 'next/og';

export const alt = 'Nazrul Islam — Senior Frontend Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px 80px',
        background:
          'linear-gradient(135deg, #0b0b12 0%, #12122a 60%, #1a1c5c 100%)',
        color: '#ffffff',
      }}
    >
      {/* Top: domain pill */}
      <div style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            padding: '10px 22px',
            borderRadius: 999,
            border: '2px solid #3139fb',
            color: '#aab0ff',
            fontSize: 28,
          }}
        >
          nazrulislam.dev
        </div>
      </div>

      {/* Middle: name + title */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05 }}>
          Nazrul Islam
        </div>
        <div style={{ fontSize: 44, color: '#8f95ff', marginTop: 20 }}>
          Senior Frontend Engineer & Interface Architect
        </div>
      </div>

      {/* Bottom: stack */}
      <div style={{ display: 'flex', fontSize: 30, color: '#9a9ab0' }}>
        React · Next.js · TypeScript · Accessibility · Performance
      </div>
    </div>,
    { ...size },
  );
}
