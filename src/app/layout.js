import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "Holookor - Student Dashboard",
    description: "Your personalized learning journey dashboard",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
