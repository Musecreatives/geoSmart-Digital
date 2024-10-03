import LandingPageNav from "@/components/navbar/Navbar";
import { Poppins } from "next/font/google";
import "./globals.css"; // Importing global styles
import 'leaflet/dist/leaflet.css'; // Importing Leaflet CSS globally

import ControlLayout from "../logic/ControlLayout";
import Footer from "@/components/footer/footer";
import MobileNav from "@/components/mobilenav/MobileNav";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

// Update metadata to include icon (favicon)
export const metadata = {
  title: "GeoSmart",
  description: "GeoSmart",
  icons: {
    icon: '/assets/logo-icon.png', // Path to your logo file in the public directory
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can also add the favicon here, though it’s often handled in metadata */}
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={poppins.className}>
        {/* Navigation for landing pages */}
        <ControlLayout>
          <div className="desktop_nav">
            <LandingPageNav />
          </div>
          <div className="mobile_nav">
            <MobileNav />
          </div>
        </ControlLayout>

        {children} {/* This is where page-specific content will be rendered */}

        <ControlLayout>
          <Footer />
        </ControlLayout>
      </body>
    </html>
  );
}
