import { gql, GraphQLClient } from "graphql-request";
import styled from "styled-components";

const Title = ({ data }) => {
  return <div>Title</div>;
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
