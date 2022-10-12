import React from "react";
import PropTypes from "prop-types";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button, Rating, Typography, Divider } from "@mui/material";
import "./productInfo.scss";

const ProductInfo = ({ product }) => {
  return (
    <div className="product-info-container">
      <Typography variant="body1" style={{ color: "red" }}>
        Sale
      </Typography>
      <Typography variant="h6" fontWeight={500}>
        {product?.name}
      </Typography>
      <div className="product-rating-container">
        <Rating value={product?.rating} precision={0.5} readOnly />
        <Typography variant="body2" style={{ color: "rgba(0, 0, 0, 0.26)" }}>
          ({product?.reviewCount}reviews)
        </Typography>
      </div>
      <Typography variant="h6" fontWeight={500}>
        {product?.price}
      </Typography>
      <Divider style={{ margin: "24px 0" }} />
      <div>
        <Button
          variant="contained"
          color="warning"
          style={{ marginRight: "8px" }}
          startIcon={<AddShoppingCartIcon />}
        >
          Add To Cart
        </Button>
        <Button variant="contained" color="success">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductInfo;
