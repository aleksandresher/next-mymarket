// const URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function loadVipplusProducts() {
  try {
    // const res = await fetch(`${URL}/api/vipplus`);
    const res = await fetch("http://localhost:3000/api/vipplus");
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
