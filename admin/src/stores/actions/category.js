import axios from "axios"
let baseUrl = 'http://localhost:4000'

export function fetchCategories() {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                method: 'GET',
                url: `${baseUrl}/categories`
            })
            dispatch({type: 'categories/fetchAll', payload: data})
        } catch (error) {
            console.log(error);
        }
    }
}