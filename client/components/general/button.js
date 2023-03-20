import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledButton = styled.button`
  margin: 2px 0;
  display: inline-flex;
  padding: 4px 6px;
  font-size: 13px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease;
  color: #fefefe;
  pointer-events: ${(props) => props.disabled && "none"};
  background-color: ${(props) => (props.disabled ? "#ccc" : "rgb(55, 90, 127)")};
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  &:hover {
    background-color: rgb(43, 71, 100);
  }
`;
const StyledLink = styled(Link)`
  margin: 1px 0;
  display: inline-flex;
  padding: 4px 6px;
  font-size: 13px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease;
  text-decoration: none;
  color: #fefefe;
  pointer-events: ${(props) => props.disabled && "none"};
  background-color: ${(props) => (props.disabled ? "#ccc" : "rgb(55, 90, 127)")};
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  &:hover {
    background-color: rgb(43, 71, 100);
  }
`;
const Button = ({ children, disabled, onClick, href, type }) => {
  if (onClick) {
    return (
      <div>
        <StyledButton type={type} onClick={() => onClick()} disabled={disabled}>
          {children}
        </StyledButton>
      </div>
    );
  } else if (href) {
    return (
      <div>
        <StyledLink type={type} href={href} disabled={disabled}>
          {children}
        </StyledLink>
      </div>
    );
  }
  return (
    <div>
      <StyledButton type={type} disabled={disabled}>
        {children}
      </StyledButton>
    </div>
  );
};

export default Button;
