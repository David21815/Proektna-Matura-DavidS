import React, { useState } from "react";

function Quiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <>
      <div className="pt-[96px] h-[90vh] bg-[#C5FAD5]">
        <div>
          {showResults ? (
            /* 4. Final Results */
            <div className="bg-purple-600 w-[90%] max-w-[600px] mx-auto rounded-[10px] p-[30px] border-[3px] border-blue-800 shadow-md">
              <h1 className="text-[40px]">Final Results</h1>
              <h2 className="text-[#FFA500] text-lg">
                {score} out of {questions.length} correct - (
                {(score / questions.length) * 100}%)
              </h2>
              <button
                className="w-1/4 bg-[#FFA500] text-black font-medium p-[10px] my-3 text-center cursor-pointer rounded-lg border-2 border-blue-500 transition-all duration-300"
                onClick={() => restartGame()}
              >
                Restart game
              </button>
            </div>
          ) : (
            /* 5. Question Card  */
            <div
              className="bg-purple-600 w-[90%] max-w-[600px] mx-auto rounded-[10px] p-[30px] border-[3px] border-blue-800 shadow-md"
              style={{ boxShadow: "0px 20px 30px -10px rgb(38, 57, 77)" }}
            >
              {/* Current Question  */}
              <h2>
                Question: {currentQuestion + 1} out of {questions.length}
              </h2>
              <h3 className="text-[21px] text-[#FFA500] font-semibold">
                {questions[currentQuestion].text}
              </h3>

              {/* List of possible answers  */}
              <ul className="my-5">
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li
                      className="bg-[#FFFFD2] text-[#FF4500] font-medium border-2 border-blue-800 w-full p-[10px] my-[15px] text-left cursor-pointer rounded-xl transition duration-300 ease-in-out hover:bg-[#FFA500] hover:text-white"
                      key={option.id}
                      onClick={() => optionClicked(option.isCorrect)}
                    >
                      {option.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Quiz;
