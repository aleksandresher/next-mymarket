export async function loadVipplusProducts() {
  const res = await fetch("http://localhost:3000/api/vipplus");
  const data = await res.json();

  return data;
}
