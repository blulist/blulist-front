import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "BluList | Discover, Share, and Explore Music Playlists - Elevate Your Music Experience",
    description:
        "BluList: Your ultimate destination for music enthusiasts! Explore, share, and discover a world of curated music playlists that elevate your listening experience. Dive into a diverse collection of playlists, create your own, and connect with fellow music lovers. Join the BluList community and take your musical journey to the next level.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-peyda">{children}</body>
        </html>
    );
}
