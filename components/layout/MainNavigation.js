import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useProductContext } from "../../state/context/productContext";

const MainNavigation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const { cart } = useProductContext();

  const allItemsFromCart = [];

  if (!loading) {
    cart.map((item) => {
      allItemsFromCart.push(item.numItems);
    });
  }

  const initialAmount = 0;
  const itemsInCart = allItemsFromCart.reduce(
    (previousAmount, currentAmount) => previousAmount + currentAmount,
    initialAmount
  );

  return (
    <Navigation>
      <div className="topHeader">
        <div className="imageWrapper">
          <Link href="/">
            <Image
              src="/logo.svg"
              priority
              height={150}
              width={200}
              alt="logo"
            />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="#">login</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>

          <div className={`cartWrapper ${itemsInCart > 0 && "lessPadding"}`}>
            <Link href="/cart">
              <div className="fullCart">
                {itemsInCart > 0 && (
                  <div className="items">
                    <div className="numbers">
                      <p>{itemsInCart}</p>
                    </div>
                    <Image
                      src="/cartItems.svg"
                      height={24}
                      width={24}
                      alt="items in cart"
                    />
                  </div>
                )}
                <div className="cart">
                  <Image
                    src="/cartIcon.svg"
                    height={24}
                    width={24}
                    alt="cart"
                  />
                </div>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </Navigation>
  );
};

export default MainNavigation;

const Navigation = styled.div`
  background-color: #004695;

  .topHeader {
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    height: 7rem;
    align-items: center;

    nav {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        li {
          list-style: none;
          color: #e9edf2;
          padding: 0 2rem;
        }
      }
    }

    .cartWrapper {
      display: flex;
      padding-left: 3rem;
      .fullCart {
        display: flex;
        .items {
          align-items: center;
          position: relative;
          display: flex;
          z-index: 100;
          transform: translate(10px, -13px);
          .numbers {
            position: absolute;
            z-index: 200;
            width: 24px;
            text-align: center;
            p {
              color: #e9edf2;
              margin: 0;
            }
          }
        }
      }
    }
    .lessPadding {
      padding-left: 1.5rem;
    }
  }
`;
