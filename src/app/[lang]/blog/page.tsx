import React from "react";

export default async function Page() {
  const data = await fetch('http://localhost:8000/todos', {cache: 'no-store'})
  let posts = await data.json()
  return <div>My page of blog in top-level {JSON.stringify(posts)}</div>;
}
