import React, { useState } from "react";

function SportsQuiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "1. Кој е најдобриот стрелец на сите времиња во историјата на англиската Премиер лига?",
      options: [
        { id: 0, text: "Alan Shearer", isCorrect: true },
        { id: 1, text: "Wayne Rooney", isCorrect: false },
        { id: 2, text: "Andrew Cole", isCorrect: false },
        { id: 3, text: "Sergio Aguero", isCorrect: false },
      ],
    },
    {
      text: "2. Кој тим ја освои Лигата на шампионите на УЕФА во 2021 година?",
      options: [
        { id: 0, text: "Manchester City FC", isCorrect: false },
        { id: 1, text: "Paris Saint-Germain FC", isCorrect: false },
        { id: 2, text: "Chelsea FC", isCorrect: true },
        { id: 3, text: "Real Madrid CF", isCorrect: false },
      ],
    },
    {
      text: "3. Кој ја освои наградата „Златна топка“ за машки фудбал во 2021 година?",
      options: [
        { id: 0, text: "Cristiano Ronaldo", isCorrect: false },
        { id: 1, text: "Lionel Messi", isCorrect: true },
        { id: 2, text: "Eden Hazard", isCorrect: false },
        { id: 3, text: "Harry Maguire", isCorrect: false },
      ],
    },
    {
      text: "4. Во кој град се одржаа Зимските олимписки игри 2018?",
      options: [
        { id: 0, text: "Пјонгчанг, Јужна Кореја", isCorrect: true },
        { id: 1, text: "Сочи, Русија", isCorrect: false },
        { id: 2, text: "Ванкувер, Канада", isCorrect: false },
        { id: 3, text: "Солт Лејк Сити, САД", isCorrect: false },
      ],
    },
    {
      text: "5. Кој тим го освои НБА шампионатот во 2021 година?",
      options: [
        { id: 0, text: "Los Angeles Lakers", isCorrect: false },
        { id: 1, text: "Brooklyn Nets", isCorrect: false },
        { id: 2, text: "Milwaukee Bucks", isCorrect: true },
        { id: 3, text: "Phoenix Suns", isCorrect: false },
      ],
    },
    {
      text: "6. Кој ја освои наградата „Златна топка“ за женски фудбал во 2021 година?",
      options: [
        { id: 0, text: "Sam Kerr", isCorrect: false },
        { id: 1, text: "Fran Kirby", isCorrect: false },
        { id: 2, text: "Vivianne Miedema", isCorrect: false },
        { id: 3, text: "Alexia Putella", isCorrect: true },
      ],
    },
    {
      text: "7. Кој го освои Светското првенство во ФИФА во 2018 година?",
      options: [
        { id: 0, text: "Португалија", isCorrect: false },
        { id: 1, text: "Франција", isCorrect: true },
        { id: 2, text: "Македонија", isCorrect: false },
        { id: 3, text: "Шпанија", isCorrect: false },
      ],
    },
    {
      text: "8. Кој е најдобриот стрелец на сите времиња во историјата на Лигата на шампионите?",
      options: [
        { id: 0, text: "Lionel Messi", isCorrect: false },
        { id: 1, text: "Robert Lewandowski", isCorrect: false },
        { id: 2, text: "Karim Benzema", isCorrect: false },
        { id: 3, text: "Cristiano Ronaldo", isCorrect: true },
      ],
    },
    {
      text: "9. Кој го освои златниот медал на 100 метри за мажи на Олимписките игри во Токио 2021 година?",
      options: [
        { id: 0, text: "Justin Gatlin", isCorrect: false },
        { id: 1, text: "Andre De Grasse", isCorrect: true },
        { id: 2, text: "Trayvon Bromell", isCorrect: false },
        { id: 3, text: "Usain Bolt", isCorrect: false },
      ],
    },
    {
      text: "10. Кој го освои турнирот на УЕФА Евро 2020?",
      options: [
        { id: 0, text: "Полска", isCorrect: false },
        { id: 1, text: "Англија", isCorrect: false },
        { id: 2, text: "Италија", isCorrect: true },
        { id: 3, text: "Србија", isCorrect: false },
      ],
    },
    {
      text: "11. Кој го освои Суперболот во 2021 година?",
      options: [
        { id: 0, text: "Tampa Bay Buccaneers", isCorrect: true },
        { id: 1, text: "New England Patriots", isCorrect: false },
        { id: 2, text: "Los Angeles Rams", isCorrect: false },
        { id: 3, text: "Kansas City Chiefs", isCorrect: false },
      ],
    },
    {
      text: "12. Кој е актуелниот светски шампион во бокс во тешка категорија?",
      options: [
        { id: 0, text: "Anthony Joshua", isCorrect: false },
        { id: 1, text: "Tyson Fury", isCorrect: false },
        { id: 2, text: "Deontay Wilder", isCorrect: false },
        { id: 3, text: "Oleksandr Usyk", isCorrect: true },
      ],
    },
    {
      text: "13. Кој ја освои титулата во Премиер лигата во сезоната 2020-2021?",
      options: [
        { id: 0, text: "Liverpool", isCorrect: false },
        { id: 1, text: "Manchester United", isCorrect: false },
        { id: 2, text: "Manchester City", isCorrect: true },
        { id: 3, text: "Chelsea", isCorrect: false },
      ],
    },
    {
      text: "14. Кој ја освои наградата за МВП на НБА во 2021 година?",
      options: [
        { id: 0, text: "LeBron James", isCorrect: false },
        { id: 1, text: "Stephen Curry", isCorrect: false },
        { id: 2, text: "Nikola Jokic", isCorrect: true },
        { id: 3, text: "Kevin Durant", isCorrect: false },
      ],
    },
    {
        text: "15. Кој е најдобриот фудбалер на сите времиња?",
        options: [
          { id: 0, text: "Cristiano Ronaldo", isCorrect: true },
          { id: 1, text: "Lionel Messi", isCorrect: false },
          { id: 2, text: "Ronaldo Nazzario", isCorrect: false },
          { id: 3, text: "Zinedine Zidane", isCorrect: false },
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

export default SportsQuiz;
