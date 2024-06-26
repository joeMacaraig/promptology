import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Provider } from "../components/Provider";

export const metadata = {
  title: "Promptology",
  description: "Open-source prompting tool for the modern world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="absolute top-0 -z-10 h-full w-full bg-white">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          </div>
          <main>
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
