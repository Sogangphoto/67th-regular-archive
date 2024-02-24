import React from "react";
import offbeat from "../../assets/images/offbeat.jpg";

function Index() {
  return (
    <div className="flex flex-col items-center text-[#444444]">
      {/* PC */}
      <div className="mt-40 hidden text-center text-7xl lg:block">
        Thanks to
      </div>
      <div
        className="hidden lg:relative lg:flex lg:items-end lg:justify-center lg:gap-8"
        style={{ marginTop: "80px" }}
      >
        <img
          src={offbeat}
          className="object-cover lg:h-60 lg:w-[233.59px] lg:flex-shrink-0 lg:flex-grow-0"
        />
        <div className="lg:h-[77px] lg:w-[279px] lg:flex-shrink-0 lg:flex-grow-0">
          <p className="text-left text-[25px] text-[#444] lg:absolute lg:left-[265.59px] lg:top-[183px]">
            STUDIO OFF-BEAT
          </p>
          <p className="text-center text-lg text-[#444] lg:absolute lg:left-[265.59px] lg:top-[218px]">
            52기 최근우 선배님, 김진 작가님
          </p>
          <p className="lg:text-s text-center text-[#444] lg:absolute lg:left-[265.59px] lg:top-[163px]">
            작가 프로필 촬영
          </p>
        </div>
      </div>

      {/* mobile */}

      <div className="block lg:hidden">
        <div className="mt-32 text-center text-4xl">
          <p className="text-center text-[35px] text-black">Thanks to</p>
        </div>
        <div
          className="relative flex flex-col items-center justify-start gap-[21px]"
          style={{ marginTop: "57px" }}
        >
          <img
            src={offbeat}
            className="h-[174.66px] w-[170px] flex-shrink-0 flex-grow-0 object-cover"
          />
          <div className="h-[39px] w-[115px] flex-shrink-0 flex-grow-0">
            <p className="absolute left-[27.5px] top-[215.66px] text-left text-base text-[#444]">
              STUDIO OFF-BEAT
            </p>
            <p className="absolute left-[36.5px] top-[195.66px] text-center text-xs text-[#444]">
              작가 프로필 촬영
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
