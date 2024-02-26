import CheckSVG from "./CheckSVG";
import GrayCheckSVG from "./GrayCheckSVG";

function Bronze() {
  return (
    <>
      <div class="w-full max-w-[350px] p-8 bg-gray-800 bordeр-4 border-[] rounded-lg">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Standard plan
        </h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
          <span class="text-3xl font-semibold">$</span>
          <span class="text-5xl font-extrabold tracking-tight">49</span>
          <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex items-center">
            <CheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              2 team members
            </span>
          </li>
          <li class="flex">
            <CheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              20GB Cloud storage
            </span>
          </li>
          <li class="flex">
            <CheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Integration help
            </span>
          </li>
          <li class="flex line-through decoration-gray-500">
            <GrayCheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">
              Sketch Files
            </span>
          </li>
          <li class="flex line-through decoration-gray-500">
            <GrayCheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">
              API Access
            </span>
          </li>
          <li class="flex line-through decoration-gray-500">
            <GrayCheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">
              Complete documentation
            </span>
          </li>
          <li class="flex line-through decoration-gray-500">
            <GrayCheckSVG />
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">
              24×7 phone & email support
            </span>
          </li>
        </ul>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button>
      </div>
    </>
  );
}

export default Bronze;
