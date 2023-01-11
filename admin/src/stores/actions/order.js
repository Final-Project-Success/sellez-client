import axios from "axios";
let baseUrl = "http://localhost:4000";

export function fetchOrders() {
    return async (dispatch) => {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/orders`,
          headers: {
            'access_token': localStorage.access_token
          }
        });
        dispatch({ type: "orders/fetchAll", payload: data });
      } catch (error) {
        console.log(error);
      }
    };
  }