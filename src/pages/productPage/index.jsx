import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/productCard";
import { addProductAction } from "../../redux/modules/addProduct/addProductAction";
import { getProductAction } from "../../redux/modules/products/getProductAction";
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

  const dispatch = useDispatch();

  const product = useSelector((state) => state.getProduct);

  const addProd = useSelector((state) => state.addProduct);

  useEffect(() => {
    // getData();
    dispatch(getProductAction());
  }, []);

  useEffect(() => {
    if (addProd.success) {
      dispatch(getProductAction());
    }
  }, [addProd.success]);

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
      alert("react-redux posting");
    }
  };

  return (
    <>
      <Form onSubmit={addProduct}>
        <input type="text" name="name" placeholder="name" />
        <input type="number" name="price" placeholder="price" />
        <textarea name="description" placeholder="description" rows="5" />
        <button>submit</button>
      </Form>
      <CardsWrapper>
        {product.success.map(({ id, name, price, description }, index) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            price={price}
            description={description}
          />
        ))}
      </CardsWrapper>
    </>
  );
}

export default ProductPage;
