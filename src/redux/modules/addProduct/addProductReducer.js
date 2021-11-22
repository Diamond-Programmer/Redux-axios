const defaultState = {
  loading: false,
  error: false,
  success: false,
};

export const addProductReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_LOADING":
      return {
        loading: true,
        error: false,
        success: false,
      };
    case "ADD_PRODUCT_SUCCESS":
      return {
        loading: false,
        error: false,
        success: true,
      };
    case "ADD_PRODUCT_ERROR":
      return {
        loading: false,
        error: true,
        success: false,
      };
    default:
      return state;
  }
};
