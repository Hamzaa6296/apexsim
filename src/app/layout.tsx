
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* This is the magic line that renders your pages */}
        {children}
      </body>
    </html>
  );
}
