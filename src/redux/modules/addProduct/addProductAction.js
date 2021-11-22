import axios from "axios";

const loading = () => ({
  type: "ADD_PRODUCT_LOADING",
});

const success = () => ({
  type: "ADD_PRODUCT_SUCCESS",
});

const error = () => ({
  type: "ADD_PRODUCT_ERROR",
});

export const addProductAction = (form) => (dispatch) => {
  dispatch(loading());
  axios
    .post("https://ibs-school.herokuapp.com/api/v1/for-developer/product",form)
    .then(() => {
      dispatch(success());
    })
    .catch(() => {
      dispatch(error());
    });
};
