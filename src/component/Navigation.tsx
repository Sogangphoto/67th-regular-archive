import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import cn from "classnames";

const StyledLink = styled(Link)<{ isCurrentPage?: boolean }>`
  display: block;

  font-size: 20px;
  height: 40px;
  line-height: 40px;

  margin: 32px 16px;
  text-align: center;
  box-sizing: border-box;

  ${(p) => (p.isCurrentPage ? "border-bottom: 3px dashed;" : "")}
`;
const Navigation = () => {
  const location = useLocation();

  const isCurrentPage = useCallback(
    (pathname: string) => {
      if (location.pathname.match(pathname)) {
        return true;
      } else return false;
    },
    [location],
  );

  const to = (to: string) => {
    return location.hash == "#archive" ? `${to}#archive` : to;
  };

  useEffect(() => {
    console.log(location);
    return () => {};
  }, [location]);

  return (
    <div
      id="navigation"
      className={cn("xl:flex", "xl:justify-between", "w-full", "px-8")}
    >
      <StyledLink to={to("/")}>서광회 67회 정기전</StyledLink>
      <div className="xl:flex">
        <StyledLink isCurrentPage={isCurrentPage("about")} to={to("about")}>
          About
        </StyledLink>
        {location.hash === "#archive" && (
          <StyledLink
            isCurrentPage={isCurrentPage("archive")}
            to={to("archive")}
          >
            Archive
          </StyledLink>
        )}
        <StyledLink
          isCurrentPage={isCurrentPage("photographers")}
          to={to("photographers")}
        >
          Photographers
        </StyledLink>
        <StyledLink isCurrentPage={isCurrentPage("thanks")} to={to("thanks")}>
          Thanks to
        </StyledLink>
      </div>
    </div>
  );
};
export default Navigation;
