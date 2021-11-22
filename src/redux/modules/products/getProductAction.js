import axios from "axios";

const loading = () => ({
  type: "GET_PRODUCT_LOADING",
});

const success = (data) => ({
  type: "GET_PRODUCT_SUCCESS",
  payload: data,
});

const error = () => ({
  type: "GET_PRODUCT_ERROR",
});

export const getProductAction = () => (dispatch) => {
  dispatch(loading());
  axios
    .get("https://ibs-school.herokuapp.com/api/v1/for-developer/product")
    .then((res) => {
      dispatch(success(res.data));
    })
    .catch(() => {
      dispatch(error());
    });
};
