import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function insertDecimal(num) {
  return (num / 100).toFixed(2);
}

const CartComponent = ({ item }) => {
  console.log("item is", item);

  const fullPrice = item.price * 100;
  const price = item.discount
    ? insertDecimal(fullPrice - fullPrice * (item.discount / 100))
    : insertDecimal(fullPrice);
  return (
    <StyledCartItem>
      <div className="cartWrapper">
        <div className="imgAndTitle">
          <Link href={`/cart/${item.id}`} passHref>
            <div className="imgWrapper">
              <Image
                src={item.mainImgSrc}
                alt={item.title}
                width={80}
                height={80}
              />
            </div>
          </Link>
        </div>
        <div className="price">
          <p>${price}</p>
        </div>
        <div className="quantity">
          <p>{item.numItems}</p>
        </div>
        <div className="subtotal">
          <p>
            $
            {insertDecimal(
              fullPrice * item.numItems -
                fullPrice * item.numItems * (item.discount / 100)
            )}
          </p>
        </div>
      </div>
    </StyledCartItem>
  );
};

export default CartComponent;

const StyledCartItem = styled.div`
  .cartWrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .imgAndTitle {
      flex: 1;
      position: relative;
      cursor: pointer;
      text-align: left;
    }

    .price {
      flex: 1;
      text-align: left;
      padding-left: 4%;
    }

    .quantity {
      flex: 1;
    }

    .subtotal {
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }
  }
`;
