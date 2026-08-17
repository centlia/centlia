import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #60A5FA 0%, #6D28D9 100%)',
          padding: '60px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              fontSize: '80px',
              fontWeight: '900',
              color: '#DC2626',
              letterSpacing: '8px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            CENTLIA
          </div>
        </div>
        <div
          style={{
            fontSize: '32px',
            color: '#FFFFFF',
            fontWeight: '600',
            letterSpacing: '4px',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Uniendo tecnologías, conectando soluciones
        </div>
        <div
          style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.8)',
            fontWeight: '400',
            letterSpacing: '2px',
            textAlign: 'center',
            marginTop: '10px',
          }}
        >
          Soluciones tecnológicas integrales para tu negocio
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '2px',
          }}
        >
          centlia.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
