export async function generateStaticParams() {
  const posts = [
    {
      slug: "name1",
    },
    {
      slug: "name2",
    },
    {
      slug: "name3",
    },
    {
      slug: "name4",
    },
  ];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
