"use server";

export async function loginUser({ form }) {
  console.log(form);

  try {
    const apiUrl = `${process.env.SERVER_URL}/auth/password/login`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    console.log(data);
    return {
      success: data?.success,
      data: data?.success ? data?.data : data,
      message: data?.message,
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to login : " + error.message,
    };
  }
}
