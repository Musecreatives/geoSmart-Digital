import LandingPageNav from "@/components/navbar/Navbar";
import { Poppins } from "next/font/google";
// styles
import "./globals.css";
// logic
import ControlLayout from "../logic/ControlLayout";
import Footer from "@/components/footer/footer";
import MobileNav from "@/components/mobilenav/MobileNav";

const poppins = Poppins({
   subsets: ["latin"] ,
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  });

export const metadata = {
  title: "GeoSmart",
  description: "GeoSmart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* landing page layout(s) - not spreading to other pages */}
        <ControlLayout>
          <div className="desktop_nav"><LandingPageNav /></div>
          <div className="mobile_nav"><MobileNav />
          </div>
        </ControlLayout>

        {children}
        <ControlLayout>
          <Footer />
        </ControlLayout>
      </body>
    </html>
  );
}
