import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Tanner from "../Pages/Tanner";
import Mazama from "../Pages/Mazama";
import Featured from "../Pages/Featured";
import Final from "../Pages/Final";
import AboutUs from "../Pages/AboutUs";
import Faq from "../Pages/Faq";
import ContactUs from "../Pages/ContactUs";
import JobOpportunities from "../Pages/JobOpportunities";

const MainWindowStyle = styled.div`
  max-width: 1800px;
     margin: auto;
  
`;

const MainWindow = () => {
  return (
    <div>
      <MainWindowStyle>
        <Banner />
        <NavBar />

        <Routes>
          <Route path="tanner" element={<Tanner/>} />
          <Route path="mazama" element={<Mazama />} />
          <Route path="featured" element={<Featured />} />
          <Route path="final" element={<Final />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="jobOpportunities" element={<JobOpportunities />} />
        </Routes>

        <Footer />
      </MainWindowStyle>
    </div>
  );
};

export default MainWindow;