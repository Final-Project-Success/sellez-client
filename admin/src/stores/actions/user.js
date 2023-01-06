import axios from "axios";
let baseUrl = "http://localhost:4000";

export function login(input) {
  return async (dispatch) => {
    try {
    const { data }= await axios({
        method: "POST",
        url: `${baseUrl}/login`,
        data: input,
      });
      // console.log(data);
      if(data) {
        // localStorage.setItem('access_token', data.access_token)
        return data
      }
    } catch (error) {
      console.log(error);
    }
  };
}
