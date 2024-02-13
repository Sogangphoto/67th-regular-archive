import cn from "classnames";
import { styled } from "styled-components";
import data from "./data";

const StyledCard = styled.div<{
  item: {
    top: number;
    left: number;
    span: number;
    rotate: number;
  };
}>`
  position: relative;
  ${({ item }) => `
    grid-column: span ${item.span};
    top: ${item.top}px;
    left: ${item.left}px;
    rotate: ${item.rotate}deg;
  `}
`;

function Index() {
  return (
    <div className="flex flex-col items-center text-[#444444]">
      <div className="mt-40 text-center text-5xl xl:text-7xl">About Us</div>
      <div className="mt-20 text-center text-xl xl:w-[680px] xl:text-2xl">
        <p>
          서광회는 1963년에 발족한 서강대학교의 중앙 사진 동아리로, 대한민국에서
          오랜 역사를 지닌 사진 동아리입니다. 매년 2회, 여름 신인전과 겨울
          정기전을 개최함에 따라 다양하고도 풍부한 전시 경험과 자료를 가지고
          있습니다. 여러 주제의 세미나를 통한 기초 사진 교육과 선후배가 함께하는
          출사, 사진 전시회 관람, 공모전 출품 등 다양한 활동을 통해 부원 간
          친목을 도모하고 사진을 익히는 것을 목적으로 합니다.
          <br />
          <br /> 서광회에서는 나이, 학번, 사전 지식, 경험에 관계없이 자유롭게
          사진을 찍고 감상을 공유할 수 있습니다. 사진을 좋아하고, 자신의
          이야기를 나누고 싶은 그 누구에게나 서광회는 열려있습니다.
        </p>
      </div>
      <div className="mt-96 text-center text-7xl">Planning</div>
      <div className="mt-20 w-full px-[48px] xl:grid xl:grid-cols-6 xl:gap-8">
        {data.map((item, idx) => {
          return (
            <StyledCard
              key={idx}
              className={cn(
                "h-[300px]",
                "xl:w-[350px]",
                "bg-slate-400",
                "mx-auto",
              )}
              item={item}
            >
              {item.text}
            </StyledCard>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
