import Bronze from "./Bronze";

function Membership() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[20px] xl:gap-[60px] mx-[10px] lg:mx-[30px] my-[50px]">
        <Bronze />
        <Bronze />
        <Bronze />
      </div>
    </>
  );
}

export default Membership;
