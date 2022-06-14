import React from "react";
import styled from "styled-components";
import ShoppingCart from "./ShoppingCart";
import { Link, useNavigate } from "react-router-dom";

const NavBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color:rgb(198,156,109);
  padding: 0px 20px;
  box-sizing: border-box;
`;



const NavBar = () => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    navigate(`/${e.target.value}`);
  };

  return (
    <div>
      <NavBarStyle>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ fontSize: "18px" ,fontFamily: "serif",color:"black"}}>EXTRA 10% OFF FINAL SALE | USE CODE : Mini2804</div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            <label>Category : </label>
            <select onChange={(e) => handleChange(e)}>
              <option value="tanner">Tanner goods</option>
              <option value="mazama">Mazama Wares</option>
              <option value="collection">Featured collection</option>
              <option value="final">Final sale</option>
            </select>
          </div>
          <div>
            <Link to="/aboutUs">About Us</Link>
          </div>
          <div>
            <Link to="/faq">FAQ</Link>
          </div>
          <div>
            <Link to="/contactUs">Contact Us</Link>
          </div>
          <div>
            <ShoppingCart />
          </div>
        </div>
      </NavBarStyle>
      {/* <div><img src="https://cdn.shopify.com/s/files/1/0044/9802/files/1002-BTSKonbuBagLifestyle-18-Hero_5fe07716-9da1-4688-9e20-f74d36fa4fa6_1944x.jpg?v=1652466433"/></div> */}
    </div>
  );
};

export default NavBar;