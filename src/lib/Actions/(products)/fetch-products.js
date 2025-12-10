"use server";
export async function fetchProducts() {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/products`, {
      cache: "no-cache",
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
