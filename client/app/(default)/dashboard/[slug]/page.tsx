export async function generateStaticParams() {
  const layouts = await fetch('https://speedritual.com/layouts').then((res) =>
    res.json()
  );

  return layouts.map((layout) => ({
    slug: layout._id,
  }));
}
