import axios from "axios";
import setLoading from "./loading";
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
    }finally {
      dispatch(setLoading(false))
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

export function createProduct(input, image) {
  return async (dispatch) => {
    try {
      const form = new FormData();

      form.append("name", input.name);
      form.append("price", input.price);
      form.append("stock", input.stock);
      form.append("color", input.color);
      form.append("CategoryId", input.CategoryId);

      form.append("description", input.description);
      for (let x = 0; x < image.image.length; x++) {
        form.append("imgUrl", image.image[x]);
      }

      await axios({
        method: "POST",
        url: `${baseUrl}/products`,
        data: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(fetchProducts());
    } catch (error) {
      console.log(error);
    }finally {
      dispatch(setLoading(false))
    }
  };
}
