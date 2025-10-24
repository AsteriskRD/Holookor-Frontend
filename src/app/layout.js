import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "Holookor - Student Dashboard",
    description: "Your personalized learning journey dashboard",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
