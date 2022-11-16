import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";
import styled from "styled-components";

import MenuList from "../components/menuList/MenuList";
import ProductCard from "../components/ProductCard";
import TopBar from "../components/productSection/TopBar";
import FetchUsers from "../utils/FetchUsers";

const Home = ({ data }) => {
  FetchUsers();
  const topBarTitle = "New & Promo products";

  const productsArr = Object.values(data);

  let myItems = [];
  productsArr.map((items) => items.map((item) => myItems.push(item)));

  return (
    <HomeStyled>
      <div className="menu">
        <MenuList />
      </div>

      <div className="mainProductSection">
        <TopBar title={topBarTitle} />
        <div className="productCardsLayout">
          {myItems.map((item) => (
            <Link key={item.id} href={`/products/${item.slug}`}>
              <ProductCard item={item} />
            </Link>
          ))}
        </div>
      </div>
    </HomeStyled>
  );
};

export default Home;

const hygraph = new GraphQLClient(process.env.HYGRAPH_API, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

const MyQuery = gql`
  {
    accessories(
      where: { OR: [{ isNewProduct: true }, { onPromotion: true }] }
    ) {
      id
      discount
      description
      description2 {
        raw
      }
      price
      onPromotion
      onDiscount
      isNewProduct
      images {
        url
      }
      slug
      title
      stock
    }
    houses(where: { OR: [{ isNewProduct: true }, { onPromotion: true }] }) {
      id
      discount
      description
      description2 {
        raw
      }
      price
      onPromotion
      onDiscount
      isNewProduct
      images {
        url
      }
      slug
      title
      stock
    }
    outfits(where: { OR: [{ isNewProduct: true }, { onPromotion: true }] }) {
      id
      discount
      description
      description2 {
        raw
      }
      price
      onPromotion
      onDiscount
      isNewProduct
      images {
        url
      }
      slug
      title
      stock
    }
    pet_Cares(where: { OR: [{ isNewProduct: true }, { onPromotion: true }] }) {
      id
      discount
      description
      description2 {
        raw
      }
      price
      onPromotion
      onDiscount
      isNewProduct
      images {
        url
      }
      slug
      title
      stock
    }
    toys(where: { OR: [{ isNewProduct: true }, { onPromotion: true }] }) {
      id
      discount
      description
      description2 {
        raw
      }
      price
      onPromotion
      onDiscount
      isNewProduct
      images {
        url
      }
      slug
      title
      stock
    }
  }
`;

export async function getServerSideProps() {
  const data = await hygraph.request(MyQuery);
  return {
    props: { data },
  };
}

const HomeStyled = styled.div`
  display: flex;
  gap: 5%;
  padding: 0 10%;
  @media (max-width: 1440px) {
    padding: 0 5%;
  }
  @media (max-width: 768px) {
    gap: 0;
  }
  .mainProductSection {
    width: 100%;

    .productCardsLayout {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: space-around;
    }
  }
`;
