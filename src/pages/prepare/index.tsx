import { ReactComponent as Comingsoon } from "../../assets/svgs/comingsoon.svg";

const Index = () => {
  return (
    <>
      <div className="flex flex-grow items-center justify-center">
        <div className="flex flex-col items-center space-y-2 xl:space-y-4">
          <Comingsoon
            className="h-[50px] w-[50px] xl:h-[108px] xl:w-[108px]"
            height={"full"}
            width={"full"}
          />
          <div className="pb-4 text-center text-4xl xl:text-7xl">
            Coming Soon...
          </div>
          <div className="text-center text-base xl:text-2xl">
            페이지 준비중입니다.
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
