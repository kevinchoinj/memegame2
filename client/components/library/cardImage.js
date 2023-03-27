import React from "react";
import { useRouter } from "next/router";
import { styled } from "@material-ui/core/styles";

const StyledImage = styled("img")(({ defeated, link }) => ({
  width: 225,
  height: 400,
  objectFit: "cover",
  objectPosition: "center center",
  transition: "0.2s ease",
  transform: defeated ? "rotate(-45deg) translateY(30%) translateX(-20%)" : "",
  cursor: link ? "pointer" : "",
}));

const Image = ({ defeated, link, onClick, size, src }) => {
  return <StyledImage alt="" defeated={defeated} link={link} loading="lazy" onClick={onClick} size={size} src={src} />;
};

const CardImage = ({ defeated, link, onClick, src }) => {
  const navigate = useRouter();
  return (
    <Image
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
      src={src}
    />
  );
};

export default CardImage;
