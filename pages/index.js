import { gql, GraphQLClient } from "graphql-request";
import styled from "styled-components";

import MenuList from "../components/menuList/MenuList";
import TopBar from "../components/productSection/TopBar";

const Home = ({ data }) => {
  return (
    <HomeStyled>
      <div className="menu">
        <MenuList />
      </div>

      <div className="mainProductSection">
        <TopBar />
        <div className="productCardsLayout">Home</div>
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
      price
      onPromotion
      onDiscount
      isNewProduct
      images {
        url
      }
      slug
      title
    }
    houses(where: { OR: [{ isNewProduct: true }, { onPromotion: true }] }) {
      id
      discount
      description
      price
      onPromotion
      onDiscount
      isNewProduct
      images {
        url
      }
      slug
      title
    }
    outfits(where: { OR: [{ isNewProduct: true }, { onPromotion: true }] }) {
      id
      discount
      description
      price
      onPromotion
      onDiscount
      isNewProduct
      images {
        url
      }
      slug
      title
    }
    petCares(where: { OR: [{ isNewProduct: true }, { onPromotion: true }] }) {
      id
      discount
      description
      price
      onPromotion
      onDiscount
      isNewProduct
      images {
        url
      }
      slug
      title
    }
    toys(where: { OR: [{ isNewProduct: true }, { onPromotion: true }] }) {
      id
      discount
      description
      price
      onPromotion
      onDiscount
      isNewProduct
      images {
        url
      }
      slug
      title
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

  .mainProductSection {
    width: 100%;
  }
`;
