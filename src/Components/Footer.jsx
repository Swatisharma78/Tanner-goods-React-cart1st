import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  margin-top: 300px;
  background-color: rgb(245,245,245);
`;

const FooterPara = styled.p`
  font-size: 13px;
  line-height: 9px;
`;

const SocialImg = styled.img`
  height: 30px;
  width: 30px;
`;

const Footer = () => {
  return (
    <div>
      <FooterStyle>
        <div>
          <div>TANNER GOODS</div>
          <div >
          In a world where we are overwhelmed
          <br/>
           by products made to break down or 
           <br/>
           go out style, we aim to go against
           <br/>
            that grain.
          </div>
        </div>
       
        <div>
          <div>SUPPORT</div>
          <div>
            <FooterPara>Contact Us</FooterPara>
            <FooterPara>Shipping</FooterPara>
            <FooterPara>Returns & Exchanges</FooterPara>
            <FooterPara>Replacements & Repairs</FooterPara>
            <FooterPara>Careers</FooterPara>

          </div>
        </div>
        <div>
          <div>SHOPS</div>
          <div>
            <FooterPara>Mazama</FooterPara>
            <FooterPara>Best Sellers</FooterPara>
            <FooterPara>New Arrivals</FooterPara>
            <FooterPara>Wallets</FooterPara>
            <FooterPara>Belts</FooterPara>
            <FooterPara>Bags</FooterPara>
            <FooterPara>Final Sale</FooterPara>
          </div>
        </div>
        <div>
          <div>SUBSCRIBE</div>
          <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
            <div>
              <SocialImg src="/assets/facebook.png" alt="facebookImg" />
            </div>
            <div>
              <SocialImg src="/assets/twitter.png" alt="twitterImg" />
            </div>
            <div>
              <SocialImg src="/assets/instagram.png" alt="instagramImg" />
            </div>
            <div>
              <SocialImg src="/assets/youtube.png" alt="pinterestImg" />
            </div>
            <div>
              <SocialImg src="/assets/pinterest.png" alt="youtubeImg" />
            </div>
          </div>
        </div>
      </FooterStyle>
     </div>
  );
};

export default Footer;