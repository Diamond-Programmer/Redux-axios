// const defaultState = {
//     loading: false,
//     error: false, 
//     success: false,
// };

// export const deleteProductReducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case "DELETE_PRODUCT_LOADING":
//             return {
//                 loading: true,
//                 error: false,
//                 success: false,
//             };
//         case "DELETE_PRODUCT_SUCCESS":
//             return {
//                 loading: false,
//                 error: false,
//                 success: true,
//             };
//         case "DELETE_PRODUCT_ERROR":
//             return {
//                 loading: false,
//                 error: true,
//                 success: false,
//             };
//         default:
//             return state;
//     }
// };