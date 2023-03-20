import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  height: ${(props) => (props.size === "small" ? props.theme.cardHeightSmall : props.theme.cardHeight)};
  width: ${(props) => (props.size === "small" ? props.theme.cardWidthSmall : props.theme.cardWidth)};
  height: ${(props) => props.size === "large" && props.theme.cardHeightLarge};
  width: ${(props) => props.size === "large" && props.theme.cardWidthLarge};
  text-align: ${(props) => (props.alignLeft ? "left" : "right")};
  padding: 10px;
  box-sizing: border-box;
  background-color: #292b2f;
  align-items: flex-end;
  display: flex;
  position: relative;
  flex-direction: column;
  font-size: 13px;
  meter {
    width: 100%;
  }
  b {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }
`;
const CardDetails = ({ alignLeft, children, size }) => {
  return (
    <StyledDetails alignLeft={alignLeft} size={size}>
      {children}
    </StyledDetails>
  );
};

export default CardDetails;
