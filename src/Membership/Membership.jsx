import Bronze from "./Bronze";
import Gold from "./Gold"
import Diamond from "./Diamond"

function Membership() {
  return (
    <>
      <div className="text-[45px] text-center font-semibold pt-[20px] bg-[#FFFFD2]">
      Можете да ги купите нашите членства за подобро искуство
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[20px] xl:gap-[60px] px-[10px] lg:px-[30px] py-[40px] bg-[#FFFFD2]">
        <Bronze />
        <Gold />
        <Diamond />
      </div>
    </>
  );
}

export default Membership;
