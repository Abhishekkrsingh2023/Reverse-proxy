import React from 'react';

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="badge">Frontend #1</div>
        <h1>Hello from React</h1>
        <p className="subtitle">This website is running behind NGINX</p>
        <div className="info-box">
          <div className="info-item">
            <span className="label">Domain:</span>
            <code>http://react.local</code>
          </div>
          <div className="info-item">
            <span className="label">Internal Port:</span>
            <code>127.0.0.1:3000</code>
          </div>
          <div className="info-item">
            <span className="label">Runtime:</span>
            <code>Bun + Vite + React</code>
          </div>
        </div>
      </div>
    </div>
  );
}
