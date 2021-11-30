import axios from "axios";

const loading = () => ({
  type: "UPDATE_PRODUCT_LOADING",
});

const success = () => ({
  type: "UPDATE_PRODUCT_SUCCESS",
});

const error = () => ({
  type: "UPDATE_PRODUCT_ERROR",
});

export const updateProductAction = (data) => (dispatch) => {
  dispatch(loading());
  axios
    .put("https://ibs-school.herokuapp.com/api/v1/for-developer/product/${data.id}", data.data)
    .then(() => {
      dispatch(success());
    })
    .catch(() => {
      dispatch(error());
    });
};
