import HeroSection from "./HeroSection";
import Stats from "./Stats";
import Table from "./Table";

function Leaderboards() {
  return (
    <>
      <div className="bg-[#FFFFD2]">
        <HeroSection />
        <Stats />
        <Table />
      </div>
    </>
  );
}

export default Leaderboards;
