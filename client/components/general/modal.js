import React from "react";
import { styled } from "@mui/system";
import Button from "components/general/button";

const StyledWrapper = styled("div")(({ dataDisplayed }) => ({
  position: "fixed",
  height: "100%",
  width: "100%",
  left: 0,
  top: 0,
  display: dataDisplayed ? "flex" : "none",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
}));

const StyledMask = styled("div")(({ dataDisplayed }) => ({
  height: "100%",
  width: "100%",
  position: "fixed",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  opacity: dataDisplayed ? 1 : 0,
  pointerEvents: dataDisplayed ? "" : "none",
  transition: "0.2s linear",
  left: 0,
  top: 0,
}));

const StyledModal = styled("div")(({ dataWidth }) => ({
  padding: "28px 36px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#111",
  position: "relative",
  borderRadius: "12px",
  width: dataWidth || "440px",
  "& h2": {
    margin: "0 0 18px 0",
    fontSize: "24px",
  },
  "& p": {
    marginBottom: "36px",
    fontSize: "16px",
  },
}));

const StyledButtons = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const StyledCancel = styled("div")(({ theme }) => ({
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  fill: theme.colorBlack,
  "& label": {
    marginLeft: "1rem",
    cursor: "pointer",
    fontWeight: 700,
  },
  "& svg": {
    height: "12px",
    width: "12px",
  },
}));

const Modal = ({ description, displayed, handleSubmit, hide, title, width }) => {
  return (
    <StyledWrapper data-displayed={displayed}>
      <StyledMask data-displayed={displayed} onClick={() => hide()} />
      <StyledModal data-width={width}>
        <h2>{title}</h2>
        <p>{description}</p>
        <StyledButtons>
          <StyledCancel onClick={() => hide()}>
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.74353 11.7488C6.57944 11.9096 6.35692 12 6.12489 12C5.89287 12 5.67035 11.9096 5.50626 11.7488L0.256191 6.60136C0.0921521 6.44048 0 6.22231 0 5.99482C0 5.76733 0.0921521 5.54916 0.256191 5.38828L5.50626 0.240825C5.67129 0.0845501 5.89232 -0.00192225 6.12175 3.24312e-05C6.35117 0.00198711 6.57063 0.0922125 6.73287 0.251276C6.8951 0.410339 6.98713 0.625513 6.98912 0.850454C6.99111 1.0754 6.90292 1.2921 6.74353 1.45391L2.9871 5.13691H13.125C13.3571 5.13691 13.5796 5.2273 13.7437 5.38819C13.9078 5.54908 14 5.76729 14 5.99482C14 6.22235 13.9078 6.44056 13.7437 6.60145C13.5796 6.76234 13.3571 6.85273 13.125 6.85273H2.9871L6.74353 10.5357C6.90757 10.6966 6.99972 10.9148 6.99972 11.1423C6.99972 11.3698 6.90757 11.5879 6.74353 11.7488Z"
                fill="#DEDEDE"
              />
            </svg>
            <label>Back</label>
          </StyledCancel>
          <Button onClick={() => handleSubmit()}>Confirm</Button>
        </StyledButtons>
      </StyledModal>
    </StyledWrapper>
  );
};

export default Modal;
