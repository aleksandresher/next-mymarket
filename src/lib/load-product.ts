const URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function loadProducts({ category }: { category: string }) {
  const res = await fetch(`${URL}/api/${category}/all`);
  const data = await res.json();

  return data;
}
