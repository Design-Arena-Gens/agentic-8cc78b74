import type { Metadata } from "next";
import "./globals.css";

const ogImage =
  "https://images.unsplash.com/photo-1526481280695-3c4691a32097?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: "Amruthsai Studio | Cinematic Storytelling",
  description:
    "Amruthsai Studio crafts cinematic introduction films and brand stories with immersive visuals, emotive soundscapes, and narrative-driven edits.",
  openGraph: {
    title: "Amruthsai Studio | Cinematic Storytelling",
    description:
      "Cinematic introduction films and brand stories by Amruthsai Studio.",
    url: "https://agentic-8cc78b74.vercel.app",
    siteName: "Amruthsai Studio",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Amruthsai Studio cinematic introduction preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amruthsai Studio | Cinematic Storytelling",
    description:
      "Cinematic introduction films and brand stories by Amruthsai Studio.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
