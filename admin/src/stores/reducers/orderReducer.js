let initialState = {
  orders: [],
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "orders/fetchAll":
      return { ...state, orders: action.payload };
    default:
      return state;
  }
}
