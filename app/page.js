'use client';

import { useState } from 'react';

const downloadUrl = '/app-release.apk';

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyDownloadUrl() {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${downloadUrl}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="page">
      <div className="topline">
        <div className="brand">PREDICT <strong>APP</strong></div>
        <div className="official"><span className="dot" /> Official APK</div>
      </div>

      <section className="intro" aria-labelledby="app-title">
        <div className="app-icon" aria-hidden="true"><span /></div>
        <div>
          <p className="eyebrow">SMART PREDICTION EXPERIENCE</p>
          <h1 id="app-title">Predict App</h1>
          <p className="summary">A clean, fast mobile app for following your prediction activity in one place.</p>
        </div>
      </section>

      <section className="meta" aria-label="Application information">
        <div className="meta-item"><strong>v1.0.0</strong><span>Version</span></div>
        <div className="meta-item"><strong>44.2 MB</strong><span>APK size</span></div>
        <div className="meta-item"><strong>Android 8+</strong><span>Required</span></div>
      </section>

      <a className="download" href={downloadUrl} download>
        <div className="download-row"><span className="download-icon">↓</span><span>Download APK</span><span className="free">Free</span></div>
      </a>
      <p className="hint">Tap the button once to download the APK to your device.</p>

      <section className="details" aria-labelledby="details-title">
        <div className="details-head">
          <div><p className="detail-label">DOWNLOAD DETAILS</p><h2 id="details-title">Quick install</h2></div>
          <span className="platform">Android</span>
        </div>
        <div className="detail-row"><span>App name</span><strong>Predict App</strong></div>
        <div className="detail-row"><span>File name</span><strong>predict-app.apk</strong></div>
        <div className="url-row">
          <div><span className="url-label">DOWNLOAD URL</span><span className="url">/predict-app.apk</span></div>
          <button className="copy" type="button" onClick={copyDownloadUrl}>{copied ? 'Copied' : 'Copy'}</button>
        </div>
      </section>

      <div className="steps" aria-label="Install steps">
        <div className="step"><span className="step-number">1</span><span>Download the APK</span></div>
        <div className="step"><span className="step-number">2</span><span>Open the downloaded file</span></div>
        <div className="step"><span className="step-number">3</span><span>Allow install if Android asks</span></div>
      </div>
      <a className="secondary" href={downloadUrl} download>Get Predict App</a>
      <a className="whatsapp" href="https://wa.me/" aria-label="Chat on WhatsApp">◔</a>
    </main>
  );
}
