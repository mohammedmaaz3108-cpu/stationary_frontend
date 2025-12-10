"use server";
export async function signUpUser({ form }) {
  console.log(form);
  try {
    const apiUrl = `${process.env.SERVER_URL}/auth/password/signup`;
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
      error: "Failed to signup user : " + error.message,
    };
  }
}
