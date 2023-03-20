import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Image = ({ className, onClick, size, src }) => (
  <img alt="" className={className} loading="lazy" onClick={onClick} size={size} src={src} />
);

const StyledImage = styled(Image)`
  width: ${(props) => (props.size === "small" ? props.theme.cardWidthSmall : props.theme.cardWidth)};
  height: ${(props) => (props.size === "small" ? props.theme.cardHeightSmall : props.theme.cardHeight)};
  height: ${(props) => props.size === "large" && props.theme.cardHeightLarge};
  width: ${(props) => props.size === "large" && props.theme.cardWidthLarge};
  object-fit: cover;
  object-position: center center;
  transition: 0.2s ease;
  transform: ${(props) => props.defeated && "rotate(-45deg) translateY(30%) translateX(-20%);"};
  cursor: ${(props) => props.link && "pointer"};
`;

const CardImage = ({ defeated, link, onClick, size, src }) => {
  const navigate = useRouter();
  return (
    <StyledImage
      alt="card"
      defeated={defeated}
      link={link || onClick}
      onClick={() => {
        if (onClick) {
          onClick();
        }
        if (link) {
          navigate(link);
        }
        return;
      }}
      size={size}
      src={src}
    />
  );
};

export default CardImage;
