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
    cpus(where: { OR: [{ newProduct: true }, { promotion: true }] }) {
      id
      discountPercent
      images {
        url
      }
      newProduct
      onDiscount
      price
      promotion
      slug
      title
      subtitle
    }
    gpus(where: { OR: [{ newProduct: true }, { promotion: true }] }) {
      id
      discountPercent
      images {
        url
      }
      newProduct
      onDiscount
      price
      promotion
      slug
      title
      subtitle
    }
    laptops(where: { OR: [{ newProduct: true }, { promotion: true }] }) {
      id
      discountPercent
      images {
        url
      }
      newProduct
      onDiscount
      price
      promotion
      slug
      title
      subtitle
    }
    motherboards(where: { OR: [{ newProduct: true }, { promotion: true }] }) {
      id
      discountPercent
      images {
        url
      }
      newProduct
      onDiscount
      price
      promotion
      slug
      title
      subtitle
    }
    storageEquipments(
      where: { OR: [{ newProduct: true }, { promotion: true }] }
    ) {
      id
      discountPercent
      images {
        url
      }
      newProduct
      onDiscount
      price
      promotion
      slug
      title
      subtitle
    }
  }
`;

export async function getServerSideProps() {
  const data = await hygraph.request(MyQuery);
  return {
    props: { data },
  };
}
