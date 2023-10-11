export const metadata = {
  title: "Bonuspedia",
  description: "Bonuspedia DEV WIP",
};

import localFont from "next/font/local";

const fontSFProDisplay = localFont({
  src: "../fonts/magiczny-font.woff2",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${fontSFProDisplay.className}`}>
      <body>{children}</body>
    </html>
  );
}
