import cn from "classnames";
import { styled } from "styled-components";

const arr = [
  { text: "기유림 | 총괄 기획", span: 3, top: 5, left: 0, rotate: 10, src: "" },
  { text: "류지원 | 총괄 기획", span: 3, top: -5, left: 0, rotate: 3, src: "" },
  { text: "임서영 | 아카이빙", span: 2, top: 10, left: 0, rotate: 0, src: "" },
  { text: "김지원 | 디자인", span: 2, top: 30, left: 0, rotate: -34, src: "" },
  {
    text: "류민우 | 프로그램 기획",
    span: 2,
    top: 0,
    left: 0,
    rotate: 0,
    src: "",
  },
  { text: "임이서 | 제작부", span: 2, top: 0, left: 0, rotate: 0, src: "" },
  { text: "이연우 | 아이디어팀", span: 2, top: 0, left: 0, rotate: 0, src: "" },
  {
    text: "정고은 | 아카이빙 | 웹",
    span: 2,
    top: 0,
    left: 0,
    rotate: 0,
    src: "",
  },
  {
    text: "채경서 | 프로그램기획",
    span: 2,
    top: 0,
    left: 0,
    rotate: 0,
    src: "",
  },
  { text: "윤근우 | 전시 기획", span: 2, top: 0, left: 0, rotate: 0, src: "" },
  {
    text: "조성효 | 프로그램 기획",
    span: 2,
    top: 0,
    left: 0,
    rotate: 0,
    src: "",
  },
  { text: "김준수 | 디자인", span: 2, top: 0, left: 0, rotate: 0, src: "" },
  {
    text: "김성민 | 작가협력 팀",
    span: 2,
    top: 0,
    left: 0,
    rotate: 0,
    src: "",
  },
  { text: "신현주 | 전시 기획", span: 2, top: 0, left: 0, rotate: 0, src: "" },
  {
    text: "이창호 | 작가협력 팀",
    span: 2,
    top: 0,
    left: 0,
    rotate: 0,
    src: "",
  },
  {
    text: "금유현 | 디자인 | 아카이빙",
    span: 2,
    top: 0,
    left: 0,
    rotate: 0,
    src: "",
  },
  { text: "형화진 | 제작부", span: 2, top: 0, left: 0, rotate: 0, src: "" },
  {
    text: "안현석 | 아카이빙 | 웹",
    span: 3,
    top: 0,
    left: 0,
    rotate: 0,
    src: "",
  },
  { text: "장한슬 | 아이디어", span: 3, top: 0, left: 0, rotate: 0, src: "" },
];

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
      <div className="mt-40 text-center text-7xl">About Us</div>
      <div className="mt-20 w-[680px] text-center text-2xl">
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
      <div className="mt-20 grid w-full grid-cols-6 justify-items-center gap-8 px-[48px]">
        {arr.map((item, idx) => {
          return (
            <StyledCard
              key={idx}
              className={cn("h-[300px]", "w-[350px]", "bg-slate-400")}
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
