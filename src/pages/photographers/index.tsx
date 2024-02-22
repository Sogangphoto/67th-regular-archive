import classNames from "classnames";
import data from "./data";

function Index() {
  return (
    <div className="flex flex-col items-center text-[#444444]">
      {/* Mobile  */}
      <div className="mt-32 text-center text-4xl lg:hidden">Photographer</div>
      <p className="mt-8 w-[677px] text-center text-xs text-black lg:hidden">
        전시를 준비하는 시간동안의 작가들과 <br />
        그들의 여운을 느껴보세요.
      </p>
      {/* PC Layout */}
      <div className="mt-40 hidden text-center text-7xl lg:block">
        Photographer
      </div>
      <p className="mt-8 hidden w-[677px] text-center text-lg text-black lg:block">
        전시를 준비하는 시간동안의 작가들과 그들의 여운을 느껴보세요.
      </p>
      <div className="mt-10">
        <div className="gap-[60px] text-xl xl:grid xl:grid-cols-5">
          {data.map((data, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col space-y-[20px] text-center"
              >
                <div
                  className={classNames(
                    "h-[300px]",
                    "w-[240px]",
                    "bg-slate-400",
                    "bg-no-repeat",
                    "bg-cover",
                    "bg-center",
                  )}
                  style={{ backgroundImage: `url("${data.src}")` }}
                ></div>
                <div className="" style={{ marginBottom: "40px" }}>
                  {data.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Index;
