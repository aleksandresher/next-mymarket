export async function loadMobiles() {
  const res = await fetch("http://localhost:3000/api/mobile/all");
  const data = await res.json();

  return data;
}
