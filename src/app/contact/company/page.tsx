"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function CompanyPage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      CompanyPage: {count}
      <button onClick={() => setCount((prev) => prev + 1)}>Plus count</button>
      <br />
      <Link href="/contact/hr">Go to HR</Link>
      <br />
      <Link href="/contact">Go to Contact</Link>
    </div>
  );
}
