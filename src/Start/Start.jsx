import "./Start.css";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div className="py-[100px] flex justify-center items-center flex-wrap w-[100%] max-w-[100%] bg-[#FFFFD2]">
      {/* Classic quiz */}

      <div
        className="h-[400px] w-[300px] p-5"
        style={{ perspective: "1000px" }}
      >
        <div className="card">
          <div className="content-box">
            <h1 className="card-title">Класичен квиз</h1>
            <p className="card-content">
              Истражете ја историјата, науката, уметноста и многу повеќе во
              нашите класични Trivia квизови. Поттикни љубопитност и пријателска
              конкуренција, обединувајќи се да стекнете знаење и мудрост.
            </p>
            <Link to="/quiz" className="see-more">
              Види повеќе
            </Link>
          </div>
          <div className="date-box">
            <span className="month">Поени</span>
            <span className="date">100</span>
          </div>
        </div>
      </div>

      {/* Classic quiz */}

      {/* Tech quiz */}

      <div
        className="h-[400px] w-[300px] p-5"
        style={{ perspective: "1000px" }}
      >
        <div className="card2">
          <div className="content-box">
            <h1 className="card-title">Техно-квиз</h1>
            <p className="card-content">
              Нурнете во технолошките чуда во нашиот квиз - кодирање, вештачка
              интелигенција, сајбер безбедност и гаџети, поттикнувајќи искра
              љубопитност и пријателска конкуренција помеѓу учесниците.
            </p>
            <Link to="/quiz" className="see-more">
              Види повеќе
            </Link>
          </div>
          <div className="date-box">
            <span className="month">Поени</span>
            <span className="date">100</span>
          </div>
        </div>
      </div>

      {/* Tech quiz */}

      {/* Sports quiz */}

      <div
        className="h-[400px] w-[300px] p-5"
        style={{ perspective: "1000px" }}
      >
        <div className="card3">
          <div className="content-box">
            <h1 className="card-title">Спортски квиз</h1>
            <p className="card-content">
              Нурнете во светот на спортот во нашиот квиз - тимови, играчи и
              легендарни моменти. Поттикни љубопитност и пријателска
              конкуренција. Приклучи се патувањето на спортското знаење.
            </p>
            <Link to="/quiz" className="see-more">
              Види повеќе
            </Link>
          </div>
          <div className="date-box">
            <span className="month">Поени</span>
            <span className="date">100</span>
          </div>
        </div>
      </div>

      {/* Sports quiz */}

      {/* Nature quiz */}

      <div
        className="h-[400px] w-[300px] p-5"
        style={{ perspective: "1000px" }}
      >
        <div className="card4">
          <div className="content-box">
            <h1 className="card-title">Квиз за природата</h1>
            <p className="card-content">
              Откријте ги чудата на природата во нашиот квиз, истражувајќи ја
              биолошката разновидност, екосистемите и геолошките чуда.
            </p>
            <Link to="/quiz" className="see-more">
              Види повеќе
            </Link>
          </div>
          <div className="date-box">
            <span className="month">Поени</span>
            <span className="date">100</span>
          </div>
        </div>
      </div>

      {/* Nature quiz */}
    </div>
  );
}

export default Start;
