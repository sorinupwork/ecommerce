import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";
import styled from "styled-components";
import MenuList from "../../../components/menuList/MenuList";
import ProductCard from "../../../components/ProductCard";
import TopBar from "../../../components/productSection/TopBar";

const Title = ({ data }) => {
  const titleKey = Object.keys(data).toString();

  const topBarTitle =
    titleKey.charAt(0).toUpperCase() + titleKey.slice(1).replace("_", " ");

  if (data) {
    const productsArr = Object.values(data)[0];

    return (
      <AllProductsStyle>
        <div className="menu">
          <MenuList />
        </div>

        <div className="mainProductSection">
          <TopBar title={topBarTitle} />
          <div className="productsCardsLayout">
            {productsArr.map((item) => (
              <Link key={item.id} href={`/products/${item.slug}`}>
                <ProductCard item={item} />
              </Link>
            ))}
          </div>
        </div>
      </AllProductsStyle>
    );
  }
};

export default Title;

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  },
});

export async function getServerSideProps(context) {
  const theSlug = context.params.title;

  const query = gql`
    {
      ${theSlug} {
        id
        slug
        price
        onPromotion
        onDiscount
        isNewProduct
        discount
        stock
        title
        images {
          url
        }
        description2 {
          raw
        }
      }
    }
  `;
  const data = await hygraph.request(query);

  return {
    props: {
      data,
    },
  };
}

const AllProductsStyle = styled.div`
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

    .productsCardsLayout {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
`;
