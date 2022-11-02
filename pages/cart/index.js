import React from "react";
import TopBar from "../../components/productSection/TopBar";
import styled from "styled-components";
import { useProductContext } from "../../state/context/productContext";

const AddToCart = () => {
  const data = useProductContext();
  console.log("data", data);

  return (
    <StyledCartPage>
      <div className="mainCartSection">
        <TopBar title={"Cart Page"} />
        <h3>This is the Cart Page</h3>
        {data.cart.length ? (
          <div>
            <h2>Your cart items</h2>
            <h3 style={{ color: "#19a695" }}>{data.cart[0].title}</h3>
            <h3 style={{ color: "#19a695" }}>Stock: {data.cart[0].stock}</h3>
          </div>
        ) : (
          <div>
            <h2 style={{ color: "#e05539" }}>Your cart is Empty</h2>
          </div>
        )}
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
