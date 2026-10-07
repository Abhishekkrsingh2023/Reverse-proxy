export const metadata = {
  title: 'Next.js Site - NGINX Reverse Proxy Demo',
  description: 'Running behind NGINX reverse proxy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f8fafc', color: '#1e293b' }}>
        {children}
      </body>
    </html>
  );
}
