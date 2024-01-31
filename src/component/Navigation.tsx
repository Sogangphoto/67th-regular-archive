import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
`;

const NavContainer = styled.div<{
  $opacityHeight?: number;
  $scrollY: number;
}>`
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  border-bottom: 1px solid black;

  opacity: ${(p) => (p.$opacityHeight ? p.$scrollY / p.$opacityHeight : 1)};
`;

const Navigation = ({ opacityHeight }: { opacityHeight?: number }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!opacityHeight) return;

    document.addEventListener("scroll", () => {
      if (window.scrollY < opacityHeight) {
        setScrollY(window.scrollY);
      }
    });
    return () => {};
  }, []);

  return (
    <>
      <NavContainer
        id="navigation"
        $opacityHeight={opacityHeight}
        $scrollY={scrollY}
      >
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="about">About</StyledLink>
        <StyledLink to="archive">Archive</StyledLink>
        <StyledLink to="photographers">Photographers</StyledLink>
        <StyledLink to="thanks">Thanks</StyledLink>
      </NavContainer>
    </>
  );
};
export default Navigation;
