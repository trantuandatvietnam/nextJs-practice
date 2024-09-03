import React from "react";
import { getDictionary, PropsType } from "./dictionaries";

export default async function Page({
  params: { lang },
}: {
  params: { lang: PropsType };
}) {
  const dict = await getDictionary(lang);
  return <div>Main App {dict.products.cart}</div>;
}
