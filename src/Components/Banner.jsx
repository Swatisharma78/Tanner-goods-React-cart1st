import React from "react";
import styled from "styled-components";

const BannerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: white;
  font-family: "Times New Roman", Times, serif;
  background-color:rgb(175,161,155)
`;

const Banner = () => {
  return (
    <div>
      <BannerStyle>
        <div>
          <div style={{color:"white",fontFamily: "serif",fontSize:"50px" }}>Tanner Goods</div>
          <div style={{ fontSize: "25px" ,color:"red"}}>
          </div>
        </div>
      </BannerStyle>
    </div>
  );
};

export default Banner;