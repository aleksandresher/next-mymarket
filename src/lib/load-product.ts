export async function loadProducts({ category }: { category: string }) {
  const res = await fetch(`http://localhost:3000/api/${category}/all`);
  const data = await res.json();

  return data;
}
