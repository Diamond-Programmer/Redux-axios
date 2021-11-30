import React from "react";
import { Card } from "./styles";
import axios from "axios";

function ProductCard({ id, name, price, description, setUpdateData }) {
  const deleteData = (id) => {
    axios
      .delete(
        "https://ibs-school.herokuapp.com/api/v1/for-developer/product/" + id
      )
      .then(() => {
        console.log("deleted");
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <Card>
      name: {name} <br />
      price: {price} <br />
      description: {description} <br />
      <button onClick={() => deleteData(id)}>delete</button>
      <button
        onClick={() =>
          setUpdateData({ edit: true, data: { id, name, price, description } })
        }
      >
        update
      </button>
    </Card>
  );
}

export default ProductCard;
