import Image from "next/image"
import styled from "styled-components";

const StyledCard = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px -2px #e0e0e0;
  max-width: 600px;
  min-width: 260px;

  .title {
    font-family: sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
  }
  
  .description {
    font-family: 'serif', sans-serif;
    font-size: 1.1rem;
  }

  .price {
    font-family: 'fantasy', sans-serif;
    font-size: 1rem;
    border-bottom: 3px solid rebeccapurple;
  }
`;

export function Card({ name, description, price, image, id }) {
  return (
    <StyledCard key={id}>
      <Image src={image} height={200} width={300} />
      <h2 className="title">{name}</h2>
      <p className="description">{description}</p>
      <span className="price">{price}</span>
    </StyledCard>
  );
}