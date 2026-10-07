export default function HomePage() {
  return (
    <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '24px' }}>
      <div style={{ background: 'white', borderRadius: '16px', padding: '32px', maxWidth: '520px', width: '100%', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'inline-block', background: '#dcfce7', color: '#15803d', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '20px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Frontend #2
        </div>
        <h1 style={{ fontSize: '28px', margin: '0 0 8px 0', color: '#0f172a' }}>Hello from Next.js</h1>
        <p style={{ color: '#64748b', margin: '0 0 24px 0', fontSize: '16px' }}>This website is running behind NGINX</p>
        <div style={{ background: '#f1f5f9', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span style={{ color: '#64748b' }}>Domain:</span>
            <code style={{ background: '#e2e8f0', padding: '3px 8px', borderRadius: '6px', fontFamily: 'monospace', color: '#0f172a' }}>http://next.local</code>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span style={{ color: '#64748b' }}>Internal Port:</span>
            <code style={{ background: '#e2e8f0', padding: '3px 8px', borderRadius: '6px', fontFamily: 'monospace', color: '#0f172a' }}>127.0.0.1:3001</code>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span style={{ color: '#64748b' }}>Runtime:</span>
            <code style={{ background: '#e2e8f0', padding: '3px 8px', borderRadius: '6px', fontFamily: 'monospace', color: '#0f172a' }}>Bun + Next.js App Router</code>
          </div>
        </div>
      </div>
    </main>
  );
}
