"use server";
export async function fetchProductsById(id) {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/products/${id}`, {
      cache: "no-cache",
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
