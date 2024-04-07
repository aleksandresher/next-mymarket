export async function loadSingle({
  category,
  id,
}: {
  category: string;
  id: string;
}) {
  const res = await fetch(`http://localhost:3000/api/${category}/single/${id}`);
  const data = await res.json();

  return data;
}
