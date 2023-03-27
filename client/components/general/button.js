import React from "react";
import { styled } from "@material-ui/core/styles";
import Link from "next/link";

const StyledButton = styled("button")(({ disabled }) => ({
  margin: "2px 0",
  display: "inline-flex",
  padding: "4px 6px",
  fontSize: "13px",
  borderRadius: "3px",
  border: "none",
  cursor: "pointer",
  transition: "0.2s ease",
  color: "#fefefe",
  pointerEvents: disabled ? "none" : "",
  backgroundColor: disabled ? "#ccc" : "rgb(55, 90, 127)",
  fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
  "&:hover": {
    backgroundColor: "rgb(43, 71, 100)",
  },
}));

const StyledLink = styled(Link)(({ disabled }) => ({
  margin: "1px 0",
  display: "inline-flex",
  padding: "4px 6px",
  fontSize: "13px",
  borderRadius: "3px",
  border: "none",
  cursor: "pointer",
  transition: "0.2s ease",
  textDecoration: "none",
  color: "#fefefe",
  pointerEvents: disabled ? "none" : "",
  backgroundColor: disabled ? "#ccc" : "rgb(55, 90, 127)",
  fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
  "&:hover": {
    backgroundColor: "rgb(43, 71, 100)",
  },
}));

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