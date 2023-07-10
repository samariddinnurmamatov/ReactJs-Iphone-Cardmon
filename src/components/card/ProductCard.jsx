import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { title, content, img, discount, id } = props;
  return (
    <div className="card">
      <div className="card-body">
        <img width="300" height="400" src={img} alt="" />
      </div>
      <div className="card-footer">
        <h3>
          <Link to={`/products/${id}`}>{title}</Link>
        </h3>
        <p>{discount} %</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  discount: PropTypes.number,
};

export default ProductCard;
