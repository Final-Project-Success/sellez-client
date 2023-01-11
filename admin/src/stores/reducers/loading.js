let initialState = {
  loading: true,
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case "loading/setLoading":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
