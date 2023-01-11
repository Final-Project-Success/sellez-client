export default function setLoading(payload) {
    return async (dispatch) => {
        dispatch({type: 'loading/setLoading', payload})
    }
}