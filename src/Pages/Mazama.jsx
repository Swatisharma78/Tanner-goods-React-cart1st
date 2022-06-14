import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
`;

const Mazama = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const navigate = useNavigate();
  return (
    <>
    <div><img src="https://cdn.shopify.com/s/files/1/0044/9802/collections/Mazama-Onyx-Slider_1800x.jpg?v=1650562638"/></div>
      <h1>Mazama Wares</h1>
      <ProductsStyle>
        {products.map((item) => (
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              padding: "15px"
            }}
            onClick={() => navigate(`/productsDetails/${item.id}`)}
          >
            <div>
              <img style={{ width: "150px" }} src={item.img} alt="shirt" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </ProductsStyle>
    </>
  );
};

export default Mazama;