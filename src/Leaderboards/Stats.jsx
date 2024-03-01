import AchievementsSVG from "./StatsSVGs/AchievementsSVG";
import RatingSVG from "./StatsSVGs/RatingSVG";
import CheckSVG from "./StatsSVGs/CheckSVG";
import GrowthSVG from "./StatsSVGs/GrowthSVG";

function Stats() {
  return (
    <>
      <section class="flex flex-col mt-20">
        <h1 class="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-black sm:mb-0 mb-3">
          Here Are Some Of The App's Achievements
        </h1>
        <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">
          <div class="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
            <div class="flex flex-row justify-center items-center">
              <AchievementsSVG />
              <p class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                35K+
              </p>
            </div>
            <p class="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
              Achievements completed
            </p>
          </div>
          <div class="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
            <div class="flex flex-row justify-center items-center">
              <RatingSVG />
              <p class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                77.8
              </p>
            </div>
            <p class="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
              Average Player Rating
            </p>
          </div>
          <div class="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
            <div class="flex flex-row justify-center items-center">
              <CheckSVG />
              <p class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                4500+
              </p>
            </div>
            <p class="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
              Quizzes Completed
            </p>
          </div>
          <div class="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
            <div class="flex flex-row justify-center items-center">
              <GrowthSVG />
              <p class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                7.5M+
              </p>
            </div>
            <p class="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
              App Downloads
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
