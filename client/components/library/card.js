import styled from "styled-components";
import Link from "next/link";
import CardImage from "components/library/cardImage";
import CardDetails from "components/library/cardDetails";
import CharacterDelete from "components/library/characterDelete";

const StyledCardWrapper = styled.div`
  display: flex;
  margin: 2px;
  a {
    display: flex;
  }
`;

const Card = ({ char }) => {
  return (
    <StyledCardWrapper>
      <CardDetails>
        <CharacterDelete char={char}/>
        <h3>{char.name}</h3>
      </CardDetails>
      <Link href={`/library/edit/${char.id}`}>
        <CardImage src={char.image} />
      </Link>
    </StyledCardWrapper>
  );
};

Card.defaultProps = {
  char: {},
};

export default Card;
