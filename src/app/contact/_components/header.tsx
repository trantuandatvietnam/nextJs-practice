"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Header() {
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <div className="bg-black">
      <div>Đây là header: {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Plus count</button>
    </div>
  );
}
