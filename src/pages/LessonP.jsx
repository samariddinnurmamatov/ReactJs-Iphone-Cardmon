import React, { Fragment } from "react";
import ProductCard from "../components/card/ProductCard";
import { products } from "../data/products";
import Counter from "../components/shared/Counter";
import { useLocation } from "react-router-dom";

const LessonP = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Fragment>
      <Counter />
      {/* <ProductCard
        title="Product 1"
        discount={10}
        content="Product 1 ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
          dolorum?"
        img="https://th.bing.com/th/id/OIP.ht2LgrMf7p0rocDF7hEHRgHaHa?pid=ImgDet&rs=1"
      />
      <ProductCard
        title="Product 2"
        content="Product 2 ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
          dolorum?"
        img="https://th.bing.com/th/id/R.54fcbb77941ee7707f519555df2beb4e?rik=ZI%2bfT2Rw5FYCvw&pid=ImgRaw&r=0"
      />
      <ProductCard
        title="Product 3"
        content="Product 3 ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
          dolorum?"
        img="https://th.bing.com/th/id/OIP.ht2LgrMf7p0rocDF7hEHRgHaHa?pid=ImgDet&rs=1"
      /> */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {products.map((pr, index) => (
          <ProductCard key={index} {...pr} />
        ))}
      </div>
    </Fragment>
  );
};

export default LessonP;
