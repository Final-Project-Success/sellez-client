import axios from "axios";
import setLoading from "./loading";
let baseUrl = "http://localhost:4000";

export function fetchOrders() {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${baseUrl}/orders/admin`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch({ type: "orders/fetchAll", payload: data });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function DetailOrder(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${baseUrl}/orders/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch({ type: "orders/fetchDetail", payload: data });

    } catch (error) {
      console.log(error);
    }finally {
      dispatch(setLoading(false));
    }
  };
}
