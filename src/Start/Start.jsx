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
            <h1 className="card-title">Classic Quiz</h1>
            <p className="card-content">
              Explore history, science, arts, and more in our classic trivia
              quiz. Ignite curiosity and friendly competition, uniting in a
              quest for diverse knowledge and shared wisdom.
            </p>
            <Link to="/quiz" className="see-more">
              See More
            </Link>
          </div>
          <div className="date-box">
            <span className="month">Points</span>
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
            <h1 className="card-title">Tech Quiz</h1>
            <p className="card-content">
              Dive into tech wonders in our quiz—coding, AI, cybersecurity and
              gadgets. Spark curiosity and friendly competition. Join the
              journey of knowledge and camaraderie.
            </p>
            <Link to="/quiz" className="see-more">
              See More
            </Link>
          </div>
          <div className="date-box">
            <span className="month">Points</span>
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
            <h1 className="card-title">Sports quiz</h1>
            <p className="card-content">
              Dive into the world of sports in our quiz—teams, players, and
              legendary moments. Ignite curiosity and friendly competition. Join
              the journey of sports knowledge and camaraderie.
            </p>
            <Link to="/quiz" className="see-more">
              See More
            </Link>
          </div>
          <div className="date-box">
            <span className="month">Points</span>
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
            <h1 className="card-title">Nature Quiz</h1>
            <p className="card-content">
              Discover nature's wonders in our quiz, exploring biodiversity,
              ecosystems, and geological marvels, fostering curiosity and
              friendly competition among participants.
            </p>
            <Link to="/quiz" className="see-more">
              See More
            </Link>
          </div>
          <div className="date-box">
            <span className="month">Points</span>
            <span className="date">100</span>
          </div>
        </div>
      </div>

      {/* Nature quiz */}
    </div>
  );
}

export default Start;
