import './globals.css';

export const metadata = {
  title: 'Predict App | Official APK',
  description: 'Download the official Predict App APK.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
