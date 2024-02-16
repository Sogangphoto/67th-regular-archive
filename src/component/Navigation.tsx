import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import cn from "classnames";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger_icon.svg";
import { ReactComponent as XIcon } from "../assets/x_icon.svg";

const StyledLink = styled(Link)<{
  isCurrentPage?: boolean;
  isMobile?: boolean;
}>`
  display: block;
  height: 40px;
  line-height: 40px;

  box-sizing: border-box;

  ${(p) => (p.isCurrentPage ? "border-bottom: 3px dashed;" : "")}
  ${(p) =>
    p.isMobile
      ? "border-bottom: 3px dashed; height: 72px; padding-left: 30px; line-height: 80px"
      : ""}
`;
const Navigation = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const isCurrentPage = useCallback(
    (pathname: string) => {
      if (location.pathname.match(pathname)) {
        return true;
      } else return false;
    },
    [location],
  );

  const to = (to: string) => {
    return location.hash === "#archive" ? `${to}#archive` : to;
  };

  useEffect(() => {
    console.log(location);
    return () => {};
  }, [location]);

  return (
    <>
      <div
        id="navigation"
        className={cn(
          "hidden",
          "xl:flex",
          "justify-between",
          "w-full",
          "px-8",
          "py-4",
          "text-xl",
          "text-center",
        )}
      >
        <StyledLink to={to("/")} className="text-xl">
          서광회 67회 정기전
        </StyledLink>
        <div className="flex space-x-8">
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

      <div
        id="navigation"
        className={cn(
          "flex",
          "xl:hidden",
          "flex-col",
          "text-[32px]",
          "pt-4",
          "justify-between",
          isOpen ? ["h-screen ", "w-screen", "fixed", "left-0", "top-0"] : "",
          "bg-[#F1EFEB]",
        )}
      >
        <div className="mx-4 flex items-center justify-between">
          <StyledLink to={to("/")} className="text-xs">
            Sogang Photo 67th Exhibiton
          </StyledLink>
          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XIcon /> : <HamburgerIcon />}
          </div>
        </div>

        <div
          className={cn(
            "flex-col text-left transition",
            isOpen ? "flex" : "hidden",
          )}
        >
          <StyledLink
            isMobile={true}
            isCurrentPage={isCurrentPage("about")}
            to={to("about")}
          >
            About
          </StyledLink>
          {location.hash === "#archive" && (
            <StyledLink
              isMobile={true}
              isCurrentPage={isCurrentPage("archive")}
              to={to("archive")}
            >
              Archive
            </StyledLink>
          )}
          <StyledLink
            isMobile={true}
            isCurrentPage={isCurrentPage("photographers")}
            to={to("photographers")}
          >
            Photographers
          </StyledLink>
          <StyledLink
            isMobile={true}
            isCurrentPage={isCurrentPage("thanks")}
            to={to("thanks")}
          >
            Thanks to
          </StyledLink>
          <div className="h-28"></div>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default Navigation;
