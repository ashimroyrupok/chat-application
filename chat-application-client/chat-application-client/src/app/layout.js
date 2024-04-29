import { Inter } from "next/font/google";
import "./globals.css";
import SideMessageBar from "@/components/shared/SideMessageBar/SideMessageBar";
// import backgrounImage from "@/components/assests/whatsappBanner.jpg"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "chat-here",
  description: "this is a chat application..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" bg-[#353535] text-white h-screen  lg:flex  w-full px-2 pt-2 ">
          <div className="  w-screen lg:w-[25vw] " > 

          <SideMessageBar />
          </div>
          <div className=" pl-2  pt-2    w-full "  >
            {children}
        </div>
        </div>

      </body>
    </html>
  );
}
