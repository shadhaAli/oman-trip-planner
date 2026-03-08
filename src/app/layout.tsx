import "./globals.css";

export const metadata = {
  title: "Oman Trip Planner",
  description: "Tourism planning system"
};

export default function RootLayout({
  children
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
