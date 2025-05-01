import "../app/globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Apollo Clone | Doctors",
  description: "Find top general physicians",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
