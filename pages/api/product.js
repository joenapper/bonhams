import faker from "faker";

export default function handler(req, res) {
  res.status(200).json({
    results: [...Array(25)].map((_, index) => ({
      id: faker.datatype.number(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: index % 8 === 0 ? faker.commerce.price() : undefined,
      image: faker.image.image(),
    })),
  });
}