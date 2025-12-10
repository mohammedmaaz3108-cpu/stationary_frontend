"use server";

export async function placeOrder({ userId, productId, quantity }) {
  try {
    const apiUrl = `${process.env.SERVER_URL}/orders/create`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        productId,
        quantity,
      }),
    });

    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
}
