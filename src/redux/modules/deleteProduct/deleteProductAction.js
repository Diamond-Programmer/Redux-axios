// import axios from "axios";

// const loading = () => ({
//     type: "DELETE_PRODUCT_LOADING",
// });

// const success = (data) => ({
//     type: "DELETE_PRODUCT_SUCCESS",
//     payload: data,
// });

// const error = () => ({
//     type: "DELETE_PRODUCT_ERROR",
// });

// export const deleteProductAction = (id) => (dispatch) => {
//     dispatch(loading());
//     axios
//         .delete("https://ibs-school.herokuapp.com/api/v1/for-developer/product${id}")
//         .then((res) => {
//             dispatch(success());
//         })
//         .catch(() => {
//             dispatch(error());
//         });
// };
