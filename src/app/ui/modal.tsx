import Link from "next/link";
import { ReactNode } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  return (
    <div style={{ background: "red" }}>
      <Link href="/">Close modal</Link>
      {children}
    </div>
  );
}
