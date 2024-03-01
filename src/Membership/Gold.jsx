import CheckSVG from "./CheckSVG";
import GrayCheckSGV from "./GrayCheckSVG";
import PopUp from "./PopUp";
import React, { useState } from "react";

function Gold() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const handleChoosePlanClick = () => {
    setIsPopUpVisible(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
  };
  return (
    <>
      <div
        className="mt-[0.75em] rounded-2xl p-[10px] bg-[#fff] text-[#697e91] max-w-[300px] border-4 border-[#FFD700]"
        style={{ boxShadow: "0 30px 30px -25px rgba(0, 38, 255, 0.205)" }}
      >
        <div className="pt-10 p-5 bg-[#ecf0ff] relative rounded-2xl">
          <span
            className="absolute top-0 right-0 bg-[#bed6fb] flex items-center text-[1.25rem] font-semibold text-[#425475] px-[0.75em] py-[0.625em]"
            style={{ borderRadius: "99em 0 0 99em" }}
          >
            $49
            <small class="text-[#707a91] text-[0.75em] ms-[0.25em]">/ m</small>
          </span>
          <p class="font-semibold text-[1.25rem] text-[#425675] mt-[0.75em]">
            Profesional
          </p>
          <p class="info">
            This plan is for those who are more experienced and want to have
            more fun.
          </p>
          <ul className="flex flex-col mt-[1rem]">
            <li className="flex items-center gap-[0.5rem]">
              <span>
                <CheckSVG />
              </span>
              <span>
                <strong class="text-[#425275] font-semibold">5</strong>
                &nbsp;different quizzes a day
              </span>
            </li>
            <li className="flex items-center gap-[0.5rem] mt-[0.75rem]">
              <span>
                <CheckSVG />
              </span>
              <span>
                <strong class="text-[#425275] font-semibold">5</strong>
                &nbsp;daily puzzles
              </span>
            </li>
            <li className="flex items-center gap-[0.5rem] mt-[0.75rem]">
              <span>
                <CheckSVG />
              </span>
              <span>
                <strong class="text-[#425275] font-semibold">100</strong>
                &nbsp;points for solved quiz
              </span>
            </li>
            <li className="flex items-center gap-[0.5rem] mt-[0.75rem]">
              <span>
                <CheckSVG />
              </span>
              <span>
                <strong class="text-[#425275] font-semibold">5</strong>
                &nbsp;free hints
              </span>
            </li>
            <li className="flex items-center gap-[0.5rem] mt-[0.75rem]">
              <span>
                <GrayCheckSGV />
              </span>
              <span className="flex line-through items-center">
                <strong class="text-[#425275] font-semibold">1</strong>
                &nbsp;free reward every day
              </span>
            </li>
            <li className="flex items-center gap-[0.5rem] mt-[0.75rem]">
              <span>
                <GrayCheckSGV />
              </span>
              <span className="flex line-through items-center">
                <strong class="text-[#425275] font-semibold">3</strong>
                &nbsp;attempts for each quiz
              </span>
            </li>
          </ul>
          <div className="w-full flex justify-center mt-[1.25rem]">
            <button
              onClick={handleChoosePlanClick}
              className="bg-[#6558d3] hover:bg-[#aa96da] border-2 border-[#fff] hover:border-[#6558d3] rounded-md text-white font-medium text-[1.125rem] text-center w-full px-[0.75em] py-[0.625em]"
            >
              Choose plan
            </button>
          </div>
        </div>
      </div>
      {isPopUpVisible && <PopUp onClose={handleClosePopUp} />}
    </>
  );
}

export default Gold;
