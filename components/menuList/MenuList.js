import { gql, GraphQLClient } from "graphql-request";
import styled from "styled-components";

import { useState, useEffect } from "react";
import Link from "next/link";
import ListItemFake from "./ListItemFake";
import ListItem from "./ListItem";

const MenuList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getMenuItems() {
      const data = await hygraph.request(query);
      setData(data);
    }
    getMenuItems();
  }, []);

  const productsArr = Object.values(data);
  const productsListArr = Object.keys(data);

  return (
    <MenuStyled>
      <div className="menuLeft">
        <div className="menuSection">
          <div className="menuTitleSection">
            <div className="menuTitle">
              <div className="titleSection">
                <h3>Products</h3>
              </div>
            </div>
          </div>

          <div>
            <Link href="/">
              <p>New & Promo products</p>
            </Link>
          </div>
          {productsListArr.map((item, idx) => {
            const spaced = item.replace("_", " ");
            const listItemTitle =
              spaced.charAt(0).toUpperCase() + spaced.slice(1);
            return (
              <ListItem
                key={idx}
                itemDetails={productsArr[idx]}
                itemTitle={listItemTitle}
                rawTitle={item}
              />
            );
          })}

          <ListItemFake />
          <div className="bottomBar">
            <h3>Products ↑</h3>
          </div>
        </div>
      </div>
    </MenuStyled>
  );
};

export default MenuList;

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  },
});

const query = gql`
  {
    accessories {
      id
      title
      slug
    }
    houses {
      id
      title
      slug
    }
    outfits {
      id
      title
      slug
    }
    pet_Cares {
      id
      title
      slug
    }
    toys {
      id
      title
      slug
    }
  }
`;

const MenuStyled = styled.div`
  background-color: lightblue;

  .menuSection {
    min-width: 14.5rem;
    max-width: 14.5rem;
    margin-bottom: 2rem;

    .menuTitleSection {
      .menuTitle {
        background-color: #004695;
        text-align: center;
        border-radius: 6px 6px 0 0;

        .titleSection {
          h3 {
            color: #e9edf2;
            font-weight: 400;
            letter-spacing: 0.05rem;
            padding: 0.3rem 0;
            margin-bottom: 0;
          }
        }
      }
    }

    p {
      padding: 0.2rem 0 0.2rem 0.8rem;
      border: solid 1px #d3dce5;
      background-color: #e9edf2;
      margin: 0;

      :hover {
        cursor: pointer;
        background-color: #d1dfed;
        border-color: c3ced9;
      }
    }

    .bottomBar {
      background-color: #004695;
      text-align: center;
      border-radius: 0 0 6px 6px;

      h3 {
        color: #e9edf2;
        font-weight: 400;
        letter-spacing: 0.05rem;
        padding: 0.3rem 0;
        margin-bottom: 0;
        margin-top: 0;
      }
    }
  }
`;
