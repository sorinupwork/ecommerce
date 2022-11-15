import React, { useEffect, useState } from "react";
import TopBar from "../../components/productSection/TopBar";
import styled from "styled-components";
import { useProductContext } from "../../state/context/productContext";
import CartComponent from "../../components/cart/CartComponent";
import Head from "next/head";
import Link from "next/link";

const AddToCart = () => {
  const { cart, clearCart } = useProductContext();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Cart Page</title>
        <meta name="description" content="Cart products details" />
      </Head>
      <StyledCartPage>
        <div className="mainCartSection">
          <TopBar title="Cart Page" />
          {!loading && cart.length ? (
            <div className="ifCart">
              <h2>Your Cart Items:</h2>
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

                  {cart.map((item) => {
                    return (
                      <div key={item.id}>
                        <CartComponent item={item} />
                      </div>
                    );
                  })}
                  <div className="bordering">
                    <hr />
                  </div>
                  <div className="buttons">
                    <div className="btn link">
                      <button>
                        <Link href="/">Continue Shopping</Link>
                      </button>
                    </div>
                    <div className="btn">
                      <button onClick={() => clearCart()}>
                        Clear The Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="total">
                  {/* <CartTotal total={total} shipping={shipping} /> */}
                </div>
              </div>
            </div>
          ) : (
            <div className="emptyCart">
              <h2>Your Cart is Empty</h2>
              <div className="btn">
                <button>
                  <Link href="/">Go Shopping</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </StyledCartPage>
    </>
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
        .buttons {
          display: flex;
          justify-content: space-between;

          .btn {
            button {
              background-color: #e05539;
            }
            button:hover {
              background-color: #ff6a4d;
            }
          }
          .link {
            button {
              background-color: #19a695;
            }
            button:hover {
              background-color: #00bfa9;
            }
          }
        }
      }
    }
  }
  .emptyCart {
    h2 {
      margin: 3rem 2rem;
      color: #e05539;
      font-size: 2rem;
    }
    .btn {
      button {
        font-size: 1.1rem;
        letter-spacing: 0.05rem;
      }
    }
  }
`;
