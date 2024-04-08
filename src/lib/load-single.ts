const URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function loadSingle({
  category,
  id,
}: {
  category: string;
  id: string;
}) {
  const res = await fetch(`${URL}/api/${category}/single/${id}`);
  const data = await res.json();

  return data;
}
