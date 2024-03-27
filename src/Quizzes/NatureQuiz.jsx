import React, { useState } from "react";

function NatureQuiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "1. Кое од наведеното е обновлив извор на енергија?",
      options: [
        { id: 0, text: "Јаглен", isCorrect: false },
        { id: 1, text: "Природен гас", isCorrect: false },
        { id: 2, text: "Сончева енергија", isCorrect: true },
        { id: 3, text: "Нуклеарна", isCorrect: false },
      ],
    },
    {
      text: "2. Која планета е позната како „Црвена планета“?",
      options: [
        { id: 0, text: "Венера", isCorrect: false },
        { id: 1, text: "Марс", isCorrect: true },
        { id: 2, text: "Јупитер", isCorrect: false },
        { id: 3, text: "Сатурн", isCorrect: false },
      ],
    },
    {
      text: "3. Кој е примарниот гас што ја сочинува атмосферата на Земјата?",
      options: [
        { id: 0, text: "Кислород", isCorrect: false },
        { id: 1, text: "Јаглерод диоксид", isCorrect: false },
        { id: 2, text: "Азот", isCorrect: true },
        { id: 3, text: "Водород", isCorrect: false },
      ],
    },
    {
      text: "4. Кој е процесот со кој растенијата ја претвораат сончевата светлина во енергија?",
      options: [
        { id: 0, text: "Дишење", isCorrect: false },
        { id: 1, text: "Фотосинтеза", isCorrect: true },
        { id: 2, text: "Транспирација", isCorrect: false },
        { id: 3, text: "Ртење", isCorrect: false },
      ],
    },
    {
      text: "5. Кој процес е одговорен за производството на енергија на Сонцето?",
      options: [
        { id: 0, text: "Нуклеарна фузија", isCorrect: true },
        { id: 1, text: "Нуклеарна фисија", isCorrect: false },
        { id: 2, text: "Фотосинтеза", isCorrect: false },
        { id: 3, text: "Согорување", isCorrect: false },
      ],
    },
    {
      text: "6. Која е најмалата единица на животот?",
      options: [
        { id: 0, text: "Ќелија", isCorrect: true },
        { id: 1, text: "Атом", isCorrect: false },
        { id: 2, text: "Молекула", isCorrect: false },
        { id: 3, text: "Орган", isCorrect: false },
      ],
    },
    {
      text: "7. Што од наведеното е цицач?",
      options: [
        { id: 0, text: "Змија", isCorrect: false },
        { id: 1, text: "Желка", isCorrect: false },
        { id: 2, text: "Делфин", isCorrect: true },
        { id: 3, text: "Крокодил", isCorrect: false },
      ],
    },
    {
      text: "8. Кој е најголемиот орган во човечкото тело?",
      options: [
        { id: 0, text: "Мозок", isCorrect: false },
        { id: 1, text: "Кожата", isCorrect: true },
        { id: 2, text: "Црниот дроб", isCorrect: false },
        { id: 3, text: "Срце", isCorrect: false },
      ],
    },
    {
      text: "9. Кој е хемискиот симбол за златото?",
      options: [
        { id: 0, text: "Al", isCorrect: false },
        { id: 1, text: "Au", isCorrect: true },
        { id: 2, text: "Fe", isCorrect: false },
        { id: 3, text: "Cu", isCorrect: false },
      ],
    },
    {
      text: "10. Како се нарекува проучувањето на фосилите?",
      options: [
        { id: 0, text: "Палеонтологија", isCorrect: true },
        { id: 1, text: "Метеорологија", isCorrect: false },
        { id: 2, text: "Геологија", isCorrect: false },
        { id: 3, text: "Антропологија", isCorrect: false },
      ],
    },
    {
      text: "11. Што од наведеното е спроводник на струја?",
      options: [
        { id: 0, text: "Гума", isCorrect: false },
        { id: 1, text: "Пластика", isCorrect: false },
        { id: 2, text: "Бакар", isCorrect: true },
        { id: 3, text: "Дрво", isCorrect: false },
      ],
    },
    {
      text: "12. Која е најголемата планета во нашиот Сончев систем?",
      options: [
        { id: 0, text: "Меркур", isCorrect: false },
        { id: 1, text: "Венера", isCorrect: false },
        { id: 2, text: "Земјата", isCorrect: false },
        { id: 3, text: "Јупитер", isCorrect: true },
      ],
    },
    {
      text: "13. Која е мерната единица за електрична струја?",
      options: [
        { id: 0, text: "Волт", isCorrect: false },
        { id: 1, text: "Ампер", isCorrect: true },
        { id: 2, text: "Ом", isCorrect: false },
        { id: 3, text: "Ват", isCorrect: false },
      ],
    },
    {
      text: "14. Што од наведеното е обновлив извор на слатка вода?",
      options: [
        { id: 0, text: "Oкеанска вода", isCorrect: false },
        { id: 1, text: "Подземните води", isCorrect: false },
        { id: 2, text: "Морски езера", isCorrect: false },
        { id: 3, text: "Врнежи од дожд", isCorrect: true },
      ],
    },
    {
        text: "15. Кој е најголемиот океан на Земјата?",
        options: [
          { id: 0, text: "Атлантскиот Океан", isCorrect: false },
          { id: 1, text: "Индиски Океан", isCorrect: false },
          { id: 2, text: "Арктичкиот океан", isCorrect: false },
          { id: 3, text: "Тихиот Океан", isCorrect: true },
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

export default NatureQuiz;
