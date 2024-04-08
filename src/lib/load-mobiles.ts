const URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function loadMobiles() {
  const res = await fetch(`${URL}/api/mobile/all`);
  const data = await res.json();

  return data;
}
