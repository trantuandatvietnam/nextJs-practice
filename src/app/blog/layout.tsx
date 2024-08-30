export const metadata = {
  title: "Blog",
  description: "Generated by Next.js",
};

export default function BlogLayout({
  children,
  team,
  analytist,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytist: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <h1>Đây là team</h1>
        {team}
        <h1>Đây là analytist</h1>
        {analytist}
      </body>
    </html>
  );
}
