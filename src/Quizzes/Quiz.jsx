import React, { useState } from "react";

function Quiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "1. Во кој град се наоѓа Колосеумот",
      options: [
        { id: 0, text: "Венеција", isCorrect: false },
        { id: 1, text: "Рим", isCorrect: true },
        { id: 2, text: "Наполи", isCorrect: false },
        { id: 3, text: "Милан", isCorrect: false },
      ],
    },
    {
      text: "2. Кој од следните тагови претставува заглавие на секција во HTML5?",
      options: [
        { id: 0, text: "section", isCorrect: false },
        { id: 1, text: "article", isCorrect: false },
        { id: 2, text: "aside", isCorrect: false },
        { id: 3, text: "header", isCorrect: true },
      ],
    },
    {
      text: "3. Која е најдолгата река во светот?",
      options: [
        { id: 0, text: "Амазон", isCorrect: false },
        { id: 1, text: "Нил", isCorrect: true },
        { id: 2, text: "Жолта река", isCorrect: false },
        { id: 3, text: "Конго", isCorrect: false },
      ],
    },
    {
      text: "4. Од која држава потекнува Кристијано Роналдо?",
      options: [
        { id: 0, text: "Португалија", isCorrect: true },
        { id: 1, text: "Шпанија", isCorrect: false },
        { id: 2, text: "Италија", isCorrect: false },
        { id: 3, text: "Франција", isCorrect: false },
      ],
    },
    {
      text: "5. Што мери Рихтеровата скала?",
      options: [
        { id: 0, text: "Брзина на ветер", isCorrect: false },
        { id: 1, text: "Температура", isCorrect: false },
        { id: 2, text: "Сила на торнадо", isCorrect: false },
        { id: 3, text: "Јачина на земетрес", isCorrect: true },
      ],
    },
    {
      text: "6. Освен вода, кој е најпопуларниот пијалок во светот?",
      options: [
        { id: 0, text: "сок од портокал", isCorrect: false },
        { id: 1, text: "Кафе", isCorrect: false },
        { id: 2, text: "Пиво", isCorrect: false },
        { id: 3, text: "Чај", isCorrect: true },
      ],
    },
    {
      text: "7. Колку висока е планината Еверест?",
      options: [
        { id: 0, text: "5,849 м", isCorrect: false },
        { id: 1, text: "6,849 м", isCorrect: false },
        { id: 2, text: "7,849 м", isCorrect: false },
        { id: 3, text: "8,849 м", isCorrect: true },
      ],
    },
    {
      text: "8. Bootstrap распоредува содржина според систем со колку можни колони?",
      options: [
        { id: 0, text: "6", isCorrect: false },
        { id: 1, text: "8", isCorrect: false },
        { id: 2, text: "10", isCorrect: false },
        { id: 3, text: "12", isCorrect: true },
      ],
    },
    {
      text: "9. На кој континент се наоѓаат Чиле, Аргентина и Бразил?",
      options: [
        { id: 0, text: "Европа", isCorrect: false },
        { id: 1, text: "Јужна Америка", isCorrect: true },
        { id: 2, text: "Азија", isCorrect: false },
        { id: 3, text: "Африка", isCorrect: false },
      ],
    },
    {
      text: "10. Коj е најлесниот начин да се дознае возраста на едно дрво",
      options: [
        {
          id: 0,
          text: "Да се пребројат кроговите на стеблото",
          isCorrect: true,
        },
        { id: 1, text: "Да се измери висината на дрвото", isCorrect: false },
        {
          id: 2,
          text: "Да се пребројат листовите на дрвото",
          isCorrect: false,
        },
        { id: 3, text: "Да се измери ширината на дрвото", isCorrect: false },
      ],
    },
    {
      text: "11. Кое од следните животни може најбрзо да трча?",
      options: [
        { id: 0, text: "Лав", isCorrect: false },
        { id: 1, text: "Гепард", isCorrect: true },
        { id: 2, text: "Зебра", isCorrect: false },
        { id: 3, text: "Тигар", isCorrect: false },
      ],
    },
    {
      text: "12. Кои се најмногу поени што играчот може да ги постигне со едно фрлање во пикадо?",
      options: [
        { id: 0, text: "20", isCorrect: false },
        { id: 1, text: "40", isCorrect: false },
        { id: 2, text: "60", isCorrect: true },
        { id: 3, text: "80", isCorrect: false },
      ],
    },
    {
      text: "13. Двата најголеми извозници на пива во Европа се Германија и…",
      options: [
        { id: 0, text: "Шпанија", isCorrect: false },
        { id: 1, text: "Италија", isCorrect: false },
        { id: 2, text: "Анлија", isCorrect: false },
        { id: 3, text: "Белгија", isCorrect: true },
      ],
    },
    {
      text: "14. Која е најретката група на крв во човечкото тело?",
      options: [
        { id: 0, text: "AB негатив", isCorrect: true },
        { id: 1, text: "0 позитив", isCorrect: false },
        { id: 2, text: "B негатив", isCorrect: false },
        { id: 3, text: "A позитив", isCorrect: false },
      ],
    },
    {
      text: "15. Bootstrap 5 често ги одредува фонтовите и големини на границите во однос на REM. На што е еднаков REM?",
      options: [
        { id: 0, text: "12 пиксели", isCorrect: false },
        {
          id: 1,
          text: "Висината на текстот на HTML елементот",
          isCorrect: true,
        },
        { id: 2, text: "1 пиксел", isCorrect: false },
        { id: 3, text: "0.1 пиксел", isCorrect: false },
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

export default Quiz;
