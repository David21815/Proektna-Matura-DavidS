import React, { useState } from "react";

function TechQuiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "1. Која беше најсимнуваната апликација во 2010-тите?",
      options: [
        { id: 0, text: "Facebook", isCorrect: true },
        { id: 1, text: "Instagram", isCorrect: false },
        { id: 2, text: "Twitter", isCorrect: false },
        { id: 3, text: "Discord", isCorrect: false },
      ],
    },
    {
      text: "2. Кој програмски јазик е именуван по еден вид индонезиско кафе?",
      options: [
        { id: 0, text: "Python", isCorrect: false },
        { id: 1, text: "C++", isCorrect: false },
        { id: 2, text: "Java", isCorrect: true },
        { id: 3, text: "Rust", isCorrect: false },
      ],
    },
    {
      text: "3. Еден гигабајт е еднаков на колку мегабајти?",
      options: [
        { id: 0, text: "256", isCorrect: false },
        { id: 1, text: "1000", isCorrect: true },
        { id: 2, text: "2048", isCorrect: false },
        { id: 3, text: "500", isCorrect: false },
      ],
    },
    {
      text: "4. Во која година е основан eBay?",
      options: [
        { id: 0, text: "1995", isCorrect: true },
        { id: 1, text: "1996", isCorrect: false },
        { id: 2, text: "1980", isCorrect: false },
        { id: 3, text: "2001", isCorrect: false },
      ],
    },
    {
      text: "5. Која апликација има зелен був како маскота?",
      options: [
        { id: 0, text: "React", isCorrect: false },
        { id: 1, text: "Tailwind", isCorrect: false },
        { id: 2, text: "Duolingo", isCorrect: true },
        { id: 3, text: "Facebook", isCorrect: false },
      ],
    },
    {
      text: "6. Кое е официјалното име за тестовите „докажи дека не си робот“ што понекогаш ги бараат веб-страниците?",
      options: [
        { id: 0, text: "Check+", isCorrect: false },
        { id: 1, text: "Discord", isCorrect: false },
        { id: 2, text: "JSX", isCorrect: false },
        { id: 3, text: "CAPTCHAs", isCorrect: true },
      ],
    },
    {
      text: "7. Која компанија за хостирање и развој на софтвер има Octocat за логото?",
      options: [
        { id: 0, text: "Wordpress", isCorrect: false },
        { id: 1, text: "GIt Hub", isCorrect: true },
        { id: 2, text: "Git", isCorrect: false },
        { id: 3, text: "Material UI", isCorrect: false },
      ],
    },
    {
      text: "8. Што значи процесорот?",
      options: [
        { id: 0, text: "Central Processing Unit", isCorrect: true },
        { id: 1, text: "Computer Personal Unit", isCorrect: false },
        { id: 2, text: "Central Power Unit", isCorrect: false },
        { id: 3, text: "Computer Programming Unit", isCorrect: false },
      ],
    },
    {
      text: "9. Која е најмалата единица на дигитални информации?",
      options: [
        { id: 0, text: "Byte", isCorrect: false },
        { id: 1, text: "Bit", isCorrect: true },
        { id: 2, text: "Megabyte", isCorrect: false },
        { id: 3, text: "Gigabyte", isCorrect: false },
      ],
    },
    {
      text: "10. Кој програмски јазик најчесто се користи за развој на веб?",
      options: [
        { id: 0, text: "Java", isCorrect: false },
        { id: 1, text: "Python", isCorrect: false },
        { id: 2, text: "HTML", isCorrect: true },
        { id: 3, text: "C++", isCorrect: false },
      ],
    },
    {
      text: "11. Што значи HTML?",
      options: [
        { id: 0, text: "HyperText Markup Language", isCorrect: true },
        { id: 1, text: "High Transmission Mode Language", isCorrect: false },
        { id: 2, text: "Hypersonic Technical Machine Language", isCorrect: false },
        { id: 3, text: "Hyper Tool Mechanism Language", isCorrect: false },
      ],
    },
    {
      text: "12. Кој од следниве е програмски јазик на високо ниво?",
      options: [
        { id: 0, text: "Binary", isCorrect: false },
        { id: 1, text: "Assembly", isCorrect: false },
        { id: 2, text: "Java", isCorrect: true },
        { id: 3, text: "Machine code", isCorrect: false },
      ],
    },
    {
      text: "13. Што од наведеното НЕ е тип на компјутерска меморија?",
      options: [
        { id: 0, text: "ROM", isCorrect: false },
        { id: 1, text: "RAM", isCorrect: false },
        { id: 2, text: "CPU", isCorrect: true },
        { id: 3, text: "Cache", isCorrect: false },
      ],
    },
    {
      text: "14. Кој е терминот за злонамерен софтвер кој се шири од еден на друг компјутер без интервенција на корисникот?",
      options: [
        { id: 0, text: "Virus", isCorrect: false },
        { id: 1, text: "Trojan horse", isCorrect: false },
        { id: 2, text: "Worm", isCorrect: true },
        { id: 3, text: "Spyware", isCorrect: false },
      ],
    },
    {
        text: "15. Што од следново е пример за влезен уред?",
        options: [
          { id: 0, text: "Тастатура", isCorrect: true },
          { id: 1, text: "Монитор", isCorrect: false },
          { id: 2, text: "Принтер", isCorrect: false },
          { id: 3, text: "Звучник", isCorrect: false },
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

export default TechQuiz;
