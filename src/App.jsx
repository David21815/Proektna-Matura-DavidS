import { Link } from "react-router-dom";
import img from "./Images/hero-img.avif";

function App() {
  return (
    <>
      <div className="bg-[#FFFFD2] pt-[96px] pb-[96px]">
        <div className="flex justify-center">
          <div className="bg-[#FFFFD2] lg:gap-[100px] px-4 w-full flex flex-col lg:flex-row justify-start lg:justify-center items-center">
            <div className="flex flex-col items-center lg:items-start w-full md:w-[490px]">
              <h1 class="text-5xl lg:text-7xl font-bold mb-6">Започнете со</h1>
              <h1 class="text-5xl lg:text-7xl font-bold mb-6">Trivia Квиз.</h1>
              <p className="text-xl font-light leading-8 box-border w-[248px] md:w-[490px]">
                Добредојдовте во најдобриот Trivia квиз. Дали сте подготвени
                да одговорите на некои тешки прашања? Завршете ги сите
                предизвици и бидете на врвот на табелите на играчи! Над 100000
                активни играчи!
              </p>
              <Link
                to="/quiz"
                className="py-[9px] px-[14px] w-[115px] bg-[#6E026E] text-base border border-[#6E026E] hover:border-black hover:bg-[#AA96DA] hover:text-black box-border rounded-lg text-white font-semibold mt-4 transition duration-300 ease-in-out"
              >
                Тестирај се
              </Link>
            </div>
            <div className="w-full md:w-[490px] mt-10 lg:mt-0 flex justify-center">
              <img src={img} alt="Hero image" className=" object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
