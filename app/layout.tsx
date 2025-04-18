import Preloader from "@/components/Preloader";
import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/custom.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "Kreasof AI - Independent AI Labs from Indonesia ",
    default: "Kreasof AI - Independent AI Labs from Indonesia ", // a default is required when creating a template
  },
  description:
    "Advancing artificial intelligence with research, in collaboration with Google and NVIDIA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
