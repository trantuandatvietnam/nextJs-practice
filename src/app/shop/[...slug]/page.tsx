import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  console.log("params", params.slug);
  return <div>Xin chào mọi người ạ</div>;
}
