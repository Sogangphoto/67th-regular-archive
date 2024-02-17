import classNames from "classnames";

function Index() {
  return (
    <>
      <div className="flex">
        <div className="flex-1"></div>
        <div className="xl:mr-16 xl:mt-24 xl:w-[500px]">
          <div className="content space-y-4">
            <div className="hidden text-2xl text-[#444444] xl:block">
              Sogang Photo 67th Exhibiton
            </div>
            <div
              className={classNames(
                "untaza",
                "bold",
                "text-5xl",
                "font-bold",
                "tracking-[-.15em]",
                "text-[#444444]",
                "drop-shadow-[-4px_4px_0_rgba(0,0,0,0.25)]",
                "xl:-ml-2",
              )}
            >
              영원으로 남은 시간, 여운
            </div>
            <div className="hidden text-right text-xl font-light xl:block">
              2.28-3.3
            </div>
            <div className="untaza text-base leading-5 xl:w-[450px]">
              당신의 시간은 영원한가요?
              <br />
              <br />
              서광회 제67회 정기전에서는 15명의 작가 저마다를 이루고 지탱하는
              시간을 여운이라는 이름으로 조명합니다.  휘발되어 날아간 기억이
              시간 속에 머물다가 다시 나에게로 돌아올 수 있도록, 찰나의 소중함을
              영원으로 남길 수 있도록 셔터를 누르는 방법을 택한 이들입니다. 
              각기 다른 선 위에서 환하게 빛나고 있을 점들을, 시간들을, 그 여운을
              따라가며 감상해보세요.
              <br />
              <br />
              당신에게 영원으로 남은 시간, 여운은 어떤 모습인가요?  시간이
              지나간 자리에 남겨진 사진들이 당신에게 진한 여운으로 닿기를
              바랍니다.
            </div>
          </div>
          <div className="info">
            <div className="leading-[22px] xl:mt-10 xl:flex">
              <div className="flex space-x-4">
                <div className="text-right font-light">
                  2/28 <br />
                  2/29-3/2 <br />
                  3/3
                </div>
                <div className="text-left font-light">
                  1pm-6pm <br />
                  9am-6pm <br />
                  9am-4pm
                </div>
              </div>
              <div className="untaza xl:ml-5">
                서울특별시 용산구 녹사평대로 150, <br />
                용산 아트홀 1층 <br />
                <span className="stamp font-light">
                  150, Noksapyeong-daero, Yongsan-gu, Seoul
                </span>
              </div>
            </div>
            <div className="text-right tracking-[-.05em] text-[#797979] xl:mt-8">
              본 전시는 무료 전시입니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
