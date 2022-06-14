import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
`;

const Featured = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const navigate = useNavigate();
  return (
    <>
   <div><img src="https://cdn.shopify.com/s/files/1/0044/9802/files/Screen_Shot_2022-05-13_at_9.08.33_PM_1944x.png?v=1652501443"/></div>
      <h1>Featured Collection</h1>
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

export default Featured;