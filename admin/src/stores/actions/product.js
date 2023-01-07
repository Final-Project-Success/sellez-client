import axios from "axios";
let baseUrl = "http://localhost:4000";

export function fetchProducts() {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${baseUrl}/products`,
      });
      dispatch({ type: "products/fetchAll", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteProduct(id) {
  return async (dispatch) => {
    try {
      await axios({
        method: "DELETE",
        url: `${baseUrl}/products/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      });

      dispatch(fetchProducts());
    } catch (error) {
      console.log(error);
    }
  };
}
