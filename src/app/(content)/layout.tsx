import MobileNav from "@/components/MobileNav";
import DesktopNav from "@/components/DesktopNav";
import Player from "@/components/Player";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-peyda">
                <div className="flex" dir="rtl">
                    <DesktopNav />
                    {children}
                </div>
                <Player />
                <MobileNav />
            </body>
        </html>
    );
}
