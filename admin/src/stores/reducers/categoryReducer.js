let initialState = {
  categories: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "categories/fetchAll":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}
