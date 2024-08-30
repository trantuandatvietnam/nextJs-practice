"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function HrPage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      HR page: {count}
      <br />
      <button onClick={() => setCount((prev) => prev + 1)}>Plus count</button>
      <br />
      <Link href="/contact/company">Go to company</Link>
      <br />
      <Link href="/contact">Go to Contact</Link>
    </div>
  );
}
