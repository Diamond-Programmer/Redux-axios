// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/productCard";
import { addProductAction } from "../../redux/modules/addProduct/addProductAction";
import { getProductAction } from "../../redux/modules/products/getProductAction";
import { updateProductAction } from "../../redux/modules/updateProduct/updateProductAction";
import { CardsWrapper, Form } from "./styles";

function ProductPage() {
  //   const [data, setData] = useState([]);

  //   const getData = () => {
  //     axios
  //       .get("https://ibs-school.herokuapp.com/api/v1/for-developer/product")
  //       .then((res) => {
  //         setData(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  const [updateData, setUpdateData] = useState({ edit: false, data: {} });

  const dispatch = useDispatch();

  const product = useSelector((state) => state.getProduct);

  const addProd = useSelector((state) => state.addProduct);

  const updateProd = useSelector((state) => state.updateProduct);

  // const deleteProduct = useSelector((state) => state.deleteProduct);

  useEffect(() => {
    // getData();
    dispatch(getProductAction());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
      dispatch(getProductAction());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // getData();
    if (addProd.success || updateProd.success || updateProd.error) {
      // if (addProd.success || deleteProduct.success || deleteProduct.error) {
      dispatch(getProductAction());
    }
  }, [addProd.success, updateProd.success, updateProd.error]);
  // }, [addProd.success, deleteProduct.success, deleteProduct.error]);

  const addProduct = (e) => {
    e.preventDefault();

    const {
      name: { value: name },
      price: { value: price },
      description: { value: description },
    } = e.target;
    if (name !== "" && price !== "" && description !== "") {
      const form = {
        name,
        price,
        description,
      };
      dispatch(addProductAction(form));
      e.target.reset();
    }
  };

  const updateProduct = (e) => {
    e.preventDefault();

    const {
      name: { value: name },
      price: { value: price },
      description: { value: description },
    } = e.target;
    if (name !== "" && price !== "" && description !== "") {
      const data = {
        id: updateData.data.id,
        data: { name, price, description },
      };
      dispatch(updateProductAction(data));
      e.target.reset();
      setUpdateData({ edit: false, data: {} });
    }
  };

  return (
    <>
      <Form onSubmit={updateData.edit ? updateProduct : addProduct}>
        <input
          type="text"
          name="name"
          placeholder="name"
          defaultValue={updateData.edit ? updateData.data.name : ""}
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          defaultValue={updateData.edit ? updateData.data.price : ""}
        />
        <textarea
          name="description"
          placeholder="description"
          rows="5"
          defaultValue={updateData.edit ? updateData.data.description : ""}
        />
        <button>{updateData.edit ? "Update" : "Submit"}</button>
      </Form>
      <CardsWrapper>
        {product.success.map(({ id, name, price, description }, index) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            price={price}
            description={description}
            // updateData={updateData}
            setUpdateData={setUpdateData}
          />
        ))}
      </CardsWrapper>
    </>
  );
}

export default ProductPage;
