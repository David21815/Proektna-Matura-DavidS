import React from 'react';

function Success() {
  return (
    <div className="flex pt-[150px] justify-center h-screen px-4 bg-[#FFFFD2]">
      <div>
        <div className="flex flex-col items-center space-y-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 size-[150px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-4xl font-bold">Ви благодариме !</h1>
          <p>Најавата е успешна!</p>
          <a
            href="/" // Adjust href according to your routing setup
            className="inline-flex items-center px-4 py-2 text-white bg-indigo-500 border border-indigo-500 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="text-sm font-medium">
              Почетна
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Success;