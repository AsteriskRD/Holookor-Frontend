import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import { mockStore } from "@/data/dashboardMockData";


// TODO: Create base layout for the tutor page to edit the metaData to a different title and decription and title ## Praise
export const metadata = {
    title: "Holookor - Student Dashboard",
    description: "Your personalized learning journey dashboard",
};

const inter = Inter();

// Add the mockdata the navbar would be using after importing the component to the base layout for shared UI. ## Praise
// const dashboardData = {
//     user: mockStore.user,
//     notifications: mockStore.notifications
// }

// const {
//     user,
//     notifications
// } = dashboardData;


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* Use the inter font throughout the project after import at the top ## Praise  */}
            <body className={inter.className}>
                {/* Add the navbar to the shared layout since they share the same UI. ## Praise*/}
                {/* <NavBar user={user} notificationCount={notifications.unreadCount} /> */}
                {children}
            </body>
        </html>
    );
}
