import Link from "next/link";

export default function Layout({
  auth,
  children,
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav>
          <Link href="/login">Open modal</Link>
        </nav>
        <div>{auth}</div>
        <div>{children}</div>
      </body>
    </html>
  );
}
