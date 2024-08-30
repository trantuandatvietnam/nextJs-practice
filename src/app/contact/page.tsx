import { waitTime } from "@/utils";
import Link from "next/link";

export default async function Contact() {
  await waitTime(2000);
  return (
    <main className="h-screen">
      <Link href="/contact/hr">Go to HR</Link>
      <br />
      <Link href="/contact/company">Go to Company</Link>
    </main>
  );
}
