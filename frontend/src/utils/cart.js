import instance from "./api.js";

async function fetchCartData() {
  try {
    const response = await instance.get("/cart/getCart");
    if (response.status === 200) {
        return response.data;
    }
  } catch (error) {
    console.error(
      "Error fetching cart data: `error.response.data` ----> ",
      error.response.data
    );
    throw error;
  }
}

export default fetchCartData;
