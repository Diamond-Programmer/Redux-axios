const defaultState = {
  loading: false,
  error: false,
  success: [],
};

export const getProductReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_LOADING":
      return {
        loading: true,
        error: false,
        success: state.success,
      };
    case "GET_PRODUCT_SUCCESS":
      return {
        loading: false,
        error: false,
        success: action.payload,
      };
    case "GET_PRODUCT_ERROR":
      return {
        loading: false,
        error: true,
        success: [],
      };
    default:
      return state;
  }
};
