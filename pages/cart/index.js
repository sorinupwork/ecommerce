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
        <div>Your Cart Items</div>

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

          {data.cart ? (
            data.cart.map((item) => (
              <div key={item.id}>
                <CartComponent item={item} />
              </div>
            ))
          ) : (
            <div>
              <h2 style={{ color: "#e05539" }}>Your cart is Empty</h2>
            </div>
          )}
          <div className="bordering">
            <hr />
          </div>
          <div className="total">
            <p>Total amount: $xxx</p>
          </div>
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

    h2 {
      margin: 2rem;
    }

    .bordering {
      hr {
        border-top: 1px solid #004695;
      }
    }
    .cartInfoSection {
      margin: 0 20%;
      .cartInfo {
        .infoSection {
          background-color: #004695;
          border-radius: 6px 6px 0 0;
          .columnTitle {
            margin: 0 7%;
            display: flex;
            justify-content: space-between;
            h4 {
              color: #e9edf2;
              margin: 0;
              padding: 0.42rem 0;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
`;
