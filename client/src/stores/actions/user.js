import axios from 'axios'
let baseUrl = 'http://localhost:4000'

export function login(input) {
    return async (dispatch) => {
      try {
      const { data }= await axios({
          method: "POST",
          url: `${baseUrl}/login`,
          data: input,
        });
        console.log('masok stores');
        if(data) {

          return data
        }
      } catch (error) {
        console.log(error);
      }
    };
  }