import { gql, GraphQLClient } from "graphql-request";

export const hygraph = new GraphQLClient(process.env.HYGRAPH_API, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

const Home = ({ data }) => {
  return <div>Home</div>;
};

export default Home;

export const MyQuery = gql`
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
