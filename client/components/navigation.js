import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "data/routes";

const StyledWrapper = styled.div`
  width: 230px;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  background-color: #2f3136;
  flex-direction: column;
  a {
    color: #ddd;
    text-decoration: none;
  }
`;

const StyledCount = styled.div`
  font-size: 12px;
`;
const LinkObject = ({ count, className, label, href }) => {
  return (
    <Link href={href} className={className}>
      {label} <StyledCount>{count}</StyledCount>
    </Link>
  );
};

const StyledLink = styled(LinkObject)`
  transition: 0.2s ease;
  background-color: ${(props) => props.active && "#42464d"};
  padding: 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
  &:hover {
    background-color: #42464d;
  }
`;

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
