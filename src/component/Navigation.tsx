import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  const Navigation = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    border-bottom: 1px solid black;
  `;

  const StyledLink = styled(Link)`
    width: 200px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  `;

  return (
    <>
      <Navigation id="navigation">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="about">About</StyledLink>
        <StyledLink to="archive">Archive</StyledLink>
        <StyledLink to="photographers">Photographers</StyledLink>
        <StyledLink to="thanks">Thanks</StyledLink>
      </Navigation>
    </>
  );
};
export default Navigation;
