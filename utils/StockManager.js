import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  },
});

const GetProductById = gql`
  query GetProductById($id: ID!) {
    accessory(where: { id: $id }) {
      id
      stock
    }
    house(where: { id: $id }) {
      id
      stock
    }
    outfit(where: { id: $id }) {
      id
      stock
    }
    petCare(where: { id: $id }) {
      id
      stock
    }
    toy(where: { id: $id }) {
      id
      stock
    }
  }
`;

const UpdateProductStock = gql`
  mutation UpdateProductStock($id: ID!, $stock: Int) {
    updateAccessory(where: { id: $id }, data: { stock: $stock }) {
      id
      stock
    }
    publishAccessory(to: PUBLISHED, where: { id: $id }) {
      id
    }
    updateHouse(where: { id: $id }, data: { stock: $stock }) {
      id
      stock
    }
    publishHouse(to: PUBLISHED, where: { id: $id }) {
      id
    }
    updateToy(where: { id: $id }, data: { stock: $stock }) {
      id
      stock
    }
    publishToy(to: PUBLISHED, where: { id: $id }) {
      id
    }
    updatePetCare(where: { id: $id }, data: { stock: $stock }) {
      id
      stock
    }
    publishPetCare(to: PUBLISHED, where: { id: $id }) {
      id
    }
    updateOutfit(where: { id: $id }, data: { stock: $stock }) {
      id
      stock
    }
    publishOutfit(to: PUBLISHED, where: { id: $id }) {
      id
    }
  }
`;

const StockManager = (cart) => {
  const checkProducts = async (theID, stockChange) => {
    const itemFromCart = await graphcms.request(GetProductById, {
      id: theID,
    });

    const productsArray = await Object.values(itemFromCart);

    productsArray.map((item) => {
      if (item && item.id === theID) {
        const stock = item.stock - stockChange;
        const updateStock = graphcms.request(UpdateProductStock, {
          id: theID,
          stock: stock,
        });
      }
    });
  };

  cart &&
    cart.map((item, idx) => {
      const theID = item.id;
      const stockChange = item.numItems;
      checkProducts(theID, stockChange);
    });
};

export default StockManager;
