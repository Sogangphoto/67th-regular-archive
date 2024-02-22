import typo from "../../assets/images/typo.jpg";
import visitors from "../../assets/images/visitors.png";
import photographers from "../../assets/images/photographers.jpg";
import poster from "../../assets/images/포스터.jpg";
import sgPhoto from "../../assets/images/sgphoto.jpg";
import process from "../../assets/images/process1.jpg";
import process3 from "../../assets/images/process3.jpg";
import work from "../../assets/images/work.jpg";

import { useState } from "react";

function Index() {
  interface HoverImageProps {
    text: string;
    image: string;
  }

  const HoverImage: React.FC<HoverImageProps> = ({ text, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <span
        className={`h-[315px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 top-[230px] flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <img
              src={image}
              alt="Image"
              style={{ width: "450px", zIndex: 1 }}
            />
          </div>
        )}
      </span>
    );
  };

  return (
    <div>
      {/* Mobile */}
      <div className="relative block flex-col items-center justify-start gap-5 lg:hidden">
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
      <div className="relative flex flex-col items-center justify-start gap-[92px] p-2.5">
        <p className="relative h-[315px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black lg:block">
          <HoverImage text="The Archive team" image={typo} />
          <span className="h-[315px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black">
            {" "}
            gathered to record the entire{" "}
          </span>

          <HoverImage text="process" image={process} />
          <span className="h-[315px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black">
            {" "}
            itself as the theme of the 67th regular exhibition of{" "}
          </span>
          <HoverImage text="Sogang Photo" image={sgPhoto} />

          <span className="h-[315px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black">
            {" "}
            is{" "}
          </span>
          <HoverImage text="time and afterglow." image={poster} />

          <br />
          <br />
        </p>

        <div className="relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-[46px]">
          <p className="hidden h-[170px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black lg:block">
            We make sure that the exhibition will last forever by keeping
            records.
          </p>
          <p className="hidden h-[405px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black lg:block">
            <span className="h-[315px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black">
              We don’t process the exhibition but neatly records and delivers
              raw materials, and ultimately helps the{" "}
            </span>
            <HoverImage text="Plannig team" image={process3} />
            <HoverImage text="- Photographers" image={photographers} />
            <HoverImage text="- Visitors" image={visitors} />
            <span className="h-[315px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black">
              {" "}
              to communicate freely and naturally.
            </span>
          </p>
        </div>
        <p className="mb-32 hidden h-[231px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black lg:block">
          <span className="h-[315px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black">
            In addition,{" "}
          </span>
          <HoverImage text="the work of the Archive" image={work} />
          <span className="h-[315px] w-[1162px] flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black">
            {" "}
            team and its traces maximize the afterglow even after the
            exhibition.{" "}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Index;
