let initialState = {
  orders: [],
  order: {}
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "orders/fetchAll":
      return { ...state, orders: action.payload };
      case "orders/fetchDetail":
        return { ...state, order: action.payload };
    default:
      return state;
  }
}
