import React from "react";
import { useParams } from "react-router-dom";

const ProductP = () => {
  const { productId } = useParams();

  return <div>ProductP {productId}</div>;
};

export default ProductP;
