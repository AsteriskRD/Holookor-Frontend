import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "Holookor - Student Dashboard",
    description: "Your personalized learning journey dashboard",
};

const inter = Inter();

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
