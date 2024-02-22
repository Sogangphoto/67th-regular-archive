function Index() {
  return (
    <div>
      {/* Mobile */}
      <div className="relative block flex flex-col items-center justify-start gap-5 lg:hidden">
        <p className="flex-shrink-0 flex-grow-0 text-center text-[8px] text-[#797979]">
          * PC 화면을 권장합니다.
        </p>
        <p className="w-full flex-shrink-0 flex-grow-0 text-left text-2xl font-light text-black">
          The Archive team gathered to record the entire process itself as the
          theme of the 67th regular exhibition of Sogang Photo is time and
          afterglow.
        </p>
        <p className="w-full flex-shrink-0 flex-grow-0 text-left text-2xl font-light text-black">
          We make sure that the exhibition will last forever by keeping records.
        </p>
        <p className="w-full flex-shrink-0 flex-grow-0 text-left text-2xl font-light text-black">
          We don’t process the exhibition but neatly records and delivers raw
          materials, and ultimately helps the planning team, photographers and
          visitors to communicate freely and naturally.
        </p>
        <p className="w-full flex-shrink-0 flex-grow-0 text-left text-2xl font-light text-black">
          In addition, the work of the Archive team and its traces maximize the
          afterglow even after the exhibition.
        </p>
      </div>
      {/* PC */}
      <div className="relative flex flex-col items-start justify-start gap-[92px] p-2.5">
        <p className="hidden h-[315px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black lg:block">
          <span className="h-[315px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black">
            The Archive team gathered to record the entire process itself as the
            theme of the 67th regul ar exhibition of Sogang Photo is time and
            afterglow.
          </span>
          <br />
          <br />
        </p>
        <div className="relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-[46px]">
          <p className="hidden h-[170px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black lg:block">
            We make sure that the exhibition will last forever by keeping
            records.
          </p>
          <p className="hidden h-[405px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black lg:block">
            We don’t process the exhibition but neatly records and delivers raw
            materials, and ultimately helps the planning team, photographers and
            visitors to communicate freely and naturally.
          </p>
        </div>
        <p className="mb-32 hidden h-[231px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black lg:block">
          In addition, the work of the Archive team and its traces maximize the
          afterglow even after the exhibition.
        </p>
      </div>
    </div>
  );
}

export default Index;
