import React from "react";
import TopBar from "../../components/productSection/TopBar";
import styled from "styled-components";
import { useProductContext } from "../../state/context/productContext";
import CartComponent from "../../components/cart/CartComponent";

const AddToCart = () => {
  const data = useProductContext();
  console.log("data", data);

  return (
    <StyledCartPage>
      <div className="mainCartSection">
        <TopBar title={"Cart Page"} />
        <h2>Your Cart Items</h2>

        <div className="cartInfoSection">
          <div className="cartInfo">
            <div className="infoSection">
              <div className="columnTitle">
                <h4>Item</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Subtotal</h4>
              </div>
            </div>
          </div>

          {data.cart.length ? (
            data.cart.map((item) => (
              <div key={item.id}>
                <CartComponent />
              </div>
            ))
          ) : (
            <div>
              <h2 style={{ color: "#e05539" }}>Your cart is Empty</h2>
            </div>
          )}
        </div>
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
