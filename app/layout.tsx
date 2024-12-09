import "./globals.css";
import { ReactNode } from "react";

// Metadata type explicitly defined
type Metadata = {
  title: string;
  description: string;
  icon: string;
};

// Exporting metadata
export const metadata: Metadata = {
  title: "KSSIF - Kingdom Stars Sport International Foundation",
  description: "Christian Sport organization",
  icon: "favicon.png", // Ensure this file is in the 'public' directory
};

// Props type for RootLayout
interface RootLayoutProps {
  children: ReactNode; // Ensures children can be any valid React node
}

// RootLayout component
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icon} />

        {/* Optional favicon formats for better compatibility */}
        <link rel="icon" href="favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
