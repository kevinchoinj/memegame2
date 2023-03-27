import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "data/routes";
import { styled } from "@mui/system";

const StyledWrapper = styled("div")({
  width: "230px",
  height: "100%",
  display: "flex",
  boxSizing: "border-box",
  backgroundColor: "#2f3136",
  flexDirection: "column",
  "& a": {
    color: "#ddd",
    textDecoration: "none",
  },
});

const StyledCount = styled("div")({
  fontSize: "12px",
});

const LinkObject = ({ count, className, label, href }) => {
  return (
    <Link href={href} className={className}>
      {label} <StyledCount>{count}</StyledCount>
    </Link>
  );
};

const StyledLink = styled(LinkObject)(({ active }) => ({
  transition: "0.2s ease",
  backgroundColor: active ? "#42464d" : "",
  padding: "0.5rem 1.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#42464d",
  },
}));

const Navigation = () => {
  const router = useRouter();
  return (
    <StyledWrapper>
      <StyledLink href={routes.home} label="Home" active={routes.home === router.pathname} />
      <StyledLink href={routes.library} label="Library" active={routes.library === router.pathname} />
      <StyledLink href={routes.inventory} label="Inventory" active={routes.inventory === router.pathname} />
    </StyledWrapper>
  );
};

export default Navigation;