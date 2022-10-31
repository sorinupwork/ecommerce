import { gql, GraphQLClient } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import styled from "styled-components";
import MenuList from "../../components/menuList/MenuList";
import TopBar from "../../components/productSection/TopBar";
import useGetItemDetails from "../../utils/useGetItemDetails";
import Image from "next/image";

const SlugPage = ({ product }) => {
  const productArray = Object.values(product);
  let item = {};
  productArray.map((items) => items.map((i) => (item = i)));

  const {
    isNewProduct,
    isPromoProduct,
    price,
    tempPrice,
    discount,
    discountPrice,
    imgsrc,
    mainImgSrc,
    id,
    title,
    stock,
    description,
    description2,
  } = useGetItemDetails(item);

  return (
    <ProductStyled>
      <div className="menuSection">
        <MenuList />
      </div>

      <div className="productSection">
        <div className="productTitle">
          <TopBar title={title} />
        </div>
        <div className="productInfo">
          <div className="productDetails">
            <div className="product">
              <div className="subtitle">
                <h3>{description}</h3>
              </div>

              <div className="allDescription">
                <div className="productDescriptionTitle">
                  <p>Product Description: </p>
                </div>

                <div className="productDescription">
                  <RichText content={description2} />
                </div>
              </div>
            </div>
          </div>

          <div className="productPreview">
            <div className="previewWrapper">
              <div className="imageWrapper">
                <div className="promoBanner">
                  <Image
                    src={imgsrc}
                    alt={"promo-new-product"}
                    width={145}
                    height={90}
                  />
                </div>

                <div className="priceSection">
                  <div className="prices">
                    {isPromoProduct ? (
                      <div>
                        <p className="fadedPrice">
                          Price: ${price} <span>- {discount}% OFF</span>
                        </p>
                        <p className="promoPrice">
                          Promo price = <span>${discountPrice}</span>
                        </p>
                      </div>
                    ) : isNewProduct ? (
                      <div>
                        <p className="newProduct">
                          <span>NEW</span> Product
                        </p>
                        <p className="price">Current price ${price}</p>
                      </div>
                    ) : (
                      <div>
                        <p className="regularProduct">Regular Product</p>
                        <p className="price">Current price ${price}</p>
                      </div>
                    )}
                  </div>
                </div>

                <Image src={mainImgSrc} width={478} height={478} alt={title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductStyled>
  );
};

export default SlugPage;

const hygraph = new GraphQLClient(process.env.HYGRAPH_API, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

export async function getServerSideProps(context) {
  const currentSlug = context.params.slug;

  const query = gql`
    query ($currentSlug: String) {
      accessories(where: { slug: $currentSlug }) {
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
        description
        description2 {
          raw
        }
      }
      houses(where: { slug: $currentSlug }) {
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
        description
        description2 {
          raw
        }
      }
      outfits(where: { slug: $currentSlug }) {
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
        description
        description2 {
          raw
        }
      }
      toys(where: { slug: $currentSlug }) {
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
        description
        description2 {
          raw
        }
      }
      pet_Cares(where: { slug: $currentSlug }) {
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
        description
        description2 {
          raw
        }
      }
    }
  `;

  const variables = {
    currentSlug,
  };
  const product = await hygraph.request(query, variables);

  return {
    props: {
      product: product,
    },
  };
}

const ProductStyled = styled.div`
  display: flex;
  gap: 5%;
  padding: 0 10%;

  .productSection {
    width: 100%;
  }
`;
