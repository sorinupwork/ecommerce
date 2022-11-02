import React from "react";
import TopBar from "../../components/productSection/TopBar";
import styled from "styled-components";

const AddToCart = () => {
  return (
    <StyledCartPage>
      <div className="mainCartSection">
        <TopBar title={"Cart Page"} />
        <h3>This is the Cart Page</h3>
      </div>
    </StyledCartPage>
  );
};

export default AddToCart;

const StyledCartPage = styled.div`
  padding: 0 10%;

  .mainCartSection {
    width: 100%;
    text-align: center;
  }
`;
