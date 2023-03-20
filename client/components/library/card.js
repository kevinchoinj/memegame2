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
        <div>Wins: {char.wins || 0}</div>
        <div>Losses: {char.losses || 0}</div>
        <div>Elo: {Math.round(char.elo) || 1500}</div>
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
