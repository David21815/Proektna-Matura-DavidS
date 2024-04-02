import React, { useState } from "react";

function TestQuiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "1. Која компанија го произведува моделот на паметен телефон Xperia?",
      options: [
        { id: 0, text: "Samsung", isCorrect: false },
        { id: 1, text: "Iphone", isCorrect: false },
        { id: 2, text: "Sony", isCorrect: true },
        { id: 3, text: "Nokia", isCorrect: false },
      ],
    },
    {
      text: "2. Каде е употребен првиот пример на книжни пари?",
      options: [
        { id: 0, text: "Англија", isCorrect: false },
        { id: 1, text: "Кина", isCorrect: true },
        { id: 2, text: "Италија", isCorrect: false },
        { id: 3, text: "Австралија", isCorrect: false },
      ],
    },
    {
      text: "3. Која земја е најголема по површина?",
      options: [
        { id: 0, text: "Канада", isCorrect: false },
        { id: 1, text: "Аргентина", isCorrect: false },
        { id: 2, text: "Русија", isCorrect: true },
        { id: 3, text: "Шпанија", isCorrect: false },
      ],
    },
    {
      text: "4. Која древна цивилизација ги изградила пирамидите во Гиза?",
      options: [
        { id: 0, text: "Месопотамијците", isCorrect: false },
        { id: 1, text: "Египќаните", isCorrect: true },
        { id: 2, text: "Грците", isCorrect: false },
        { id: 3, text: "Римјаните", isCorrect: false },
      ],
    },
    {
      text: "5. Кој настан го означи почетокот на Втората светска војна?",
      options: [
        { id: 0, text: "Бомбардирање на Перл Харбор", isCorrect: false },
        { id: 1, text: "Инвазија на Полска", isCorrect: true },
        { id: 2, text: "Потпишување на Версајскиот договор", isCorrect: false },
        { id: 3, text: "Атентат на Франц Фердинанд", isCorrect: false },
      ],
    },
    {
      text: "6. Во која година Кристофер Колумбо првпат стигна до Америка?",
      options: [
        { id: 0, text: "1492", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1620", isCorrect: false },
        { id: 3, text: "1498", isCorrect: false },
      ],
    },
    {
      text: "7. Кој град бил главен град на Византиската империја?",
      options: [
        { id: 0, text: "Рим", isCorrect: false },
        { id: 1, text: "Константинопол", isCorrect: true },
        { id: 2, text: "Атина", isCorrect: false },
        { id: 3, text: "Александрија", isCorrect: false },
      ],
    },
    {
      text: "8. Ако низата ја следи шемата: 1, 3, 6, 10, 15, ..., кој е следниот број во низата?",
      options: [
        { id: 0, text: "24", isCorrect: false },
        { id: 1, text: "21", isCorrect: true },
        { id: 2, text: "27", isCorrect: false },
        { id: 3, text: "30", isCorrect: false },
      ],
    },
    {
      text: "9. Кој е атомскиот број на јаглерод?",
      options: [
        { id: 0, text: "7", isCorrect: false },
        { id: 1, text: "6", isCorrect: true },
        { id: 2, text: "1", isCorrect: false },
        { id: 3, text: "19", isCorrect: false },
      ],
    },
    {
      text: "10. Која е главната компонента на јадрото на Земјата?",
      options: [
        { id: 0, text: "Железо", isCorrect: true },
        { id: 1, text: "Никел", isCorrect: false },
        { id: 2, text: "Бакар", isCorrect: false },
        { id: 3, text: "Цинк", isCorrect: false },
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
              <h1 className="text-[40px]">Резултати</h1>
              <h2 className="text-[#FFA500] text-lg">
                {score} од {questions.length} точни - (
                {((score / questions.length) * 100).toFixed(2)}%)
              </h2>
              <button
                className="w-1/3 min-w-[100px] bg-[#FFA500] text-black font-medium p-[10px] my-3 text-center cursor-pointer rounded-lg border-2 border-blue-500 transition-all duration-300"
                onClick={() => restartGame()}
              >
                Играј повторно
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
                Прашање: {currentQuestion + 1} од {questions.length}
              </h2>
              <h3 className="text-[21px] text-[#FFA500] font-semibold">
                {questions[currentQuestion].text}
              </h3>

              {/* List of possible answers  */}
              <ul className="my-5">
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li
                      className="bg-[#FFFFD2] text-[#FF4500] font-medium border-2 border-blue-800 w-full p-[10px] my-[15px] text-left cursor-pointer rounded-xl transition duration-300 ease-in-out hover:bg-[#FFFFD2] md:hover:bg-[#FFA500] md:hover:text-white"
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

export default TestQuiz;
