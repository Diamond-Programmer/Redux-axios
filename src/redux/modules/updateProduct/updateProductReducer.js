const defaultState = {
    loading: false,
    error: false,
    success: false,
};

export const updateProductReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UPDATE_PRODUCT_LOADING":
            return {
                loading: true,
                error: false,
                success: false,
            };
        case "UPDATE_PRODUCT_SUCCESS":
            return {
                loading: false,
                error: false,
                success: true,
            };
        case "UPDATE_PRODUCT_ERROR":
            return {
                loading: false,
                error: true,
                success: false,
            };
        default:
            return state;
    }
};