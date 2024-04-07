const URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function loadVipProducts() {
  try {
    const res = await fetch(`${URL}/api/vip`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
