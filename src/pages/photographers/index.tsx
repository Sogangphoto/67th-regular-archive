import data from "./data";

function Index() {
  return (
    <div className="flex flex-col items-center text-[#444444]">
      <div className="mt-40 text-center text-7xl">Photographer</div>
      <div className="mt-32">
        <div className="gap-[60px] text-xl xl:grid xl:grid-cols-3">
          {data.map((data, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col space-y-[20px] text-center"
              >
                <div className="h-[300px] w-[240px] bg-slate-400"></div>
                <div className="">{data.name}</div>
                <div>{data.comment}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Index;
