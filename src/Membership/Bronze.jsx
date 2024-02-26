import CheckSVG from "./CheckSVG";
import GrayCheckSVG from "./GrayCheckSVG";

function Bronze() {
  return (
    <>
      <div class="w-full max-w-[350px] p-8 bg-gray-800 border-4 border-[#CD7F32] rounded-lg">
        <h5 class="mb-4 text-xl font-medium text-[#CD7F32]">Bronze plan</h5>
        <div class="flex items-baseline text-white">
          <span class="text-3xl font-semibold">$</span>
          <span class="text-5xl font-extrabold tracking-tight ">
            4.99
          </span>
          <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex items-center">
            <CheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              5 different quizzes a day
            </span>
          </li>
          <li class="flex">
            <CheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              5 daily puzzles
            </span>
          </li>
          <li class="flex">
            <CheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              100 points for solved quiz
            </span>
          </li>
          <li class="flex line-through decoration-gray-500">
            <GrayCheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">
              5 free hints
            </span>
          </li>
          <li class="flex line-through decoration-gray-500">
            <GrayCheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">
              1 free reward every day
            </span>
          </li>
          <li class="flex line-through decoration-gray-500">
            <GrayCheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">
              3 attempts for each quiz
            </span>
          </li>
          <li class="flex line-through decoration-gray-500">
            <GrayCheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">
              24×7 phone & email support
            </span>
          </li>
        </ul>
        <div className="text-center">
          <div class="relative inline-flex group">
            <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              title="Get quote now"
              class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Get it now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bronze;
