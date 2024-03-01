function Table() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-[80px] px-4">
        <h1 class="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-black sm:mb-0 mb-3 pb-[40px]">
          Leaderboards
        </h1>
        <div className="relative overflow-x-auto w-full max-w-[1210px]">
          <table className="w-full text-sm text-left rtl:text-right text-gray-400">
            <thead className="text-xs uppercase text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-black font-bold">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-black font-bold">
                  Hours played
                </th>
                <th scope="col" className="px-6 py-3 text-black font-bold">
                  Quizzes completed
                </th>
                <th scope="col" className="px-6 py-3 text-black font-bold">
                  Points
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-[#AA96DA] hover:bg-[#b5a0e8] border-2 border-white">
                <th
                  scope="row"
                  className="px-6 py-4 text-black font-medium whitespace-nowrap"
                >
                  1. Steve Hunter
                </th>
                <td className="px-6 py-4 text-black font-medium">129 hr</td>
                <td className="px-6 py-4 text-black font-medium">
                  170 quizzes
                </td>
                <td className="px-6 py-4 text-black font-medium">20400</td>
              </tr>

              <tr className="bg-[#AA96DA] hover:bg-[#b5a0e8] border-2 border-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-black"
                >
                  2. Marshall James
                </th>
                <td className="px-6 py-4 text-black font-medium">120 hr</td>
                <td className="px-6 py-4 text-black font-medium">
                  168 quizzes
                </td>
                <td className="px-6 py-4 text-black font-medium">20100</td>
              </tr>

              <tr className="bg-[#AA96DA] hover:bg-[#b5a0e8] border-2 border-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  3. Jerry Wells
                </th>
                <td className="px-6 py-4 text-black font-medium">115 hr</td>
                <td className="px-6 py-4 text-black font-medium">
                  164 quizzes
                </td>
                <td className="px-6 py-4 text-black font-medium">19900</td>
              </tr>
              <tr className="bg-[#AA96DA] hover:bg-[#b5a0e8] border-2 border-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  4. Floyd Mccann
                </th>
                <td className="px-6 py-4 text-black font-medium">112 hr</td>
                <td className="px-6 py-4 text-black font-medium">
                  160 quizzes
                </td>
                <td className="px-6 py-4 text-black font-medium">19800</td>
              </tr>
              <tr className="bg-[#AA96DA] hover:bg-[#b5a0e8] border-2 border-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  5. Bernice Fox
                </th>
                <td className="px-6 py-4 text-black font-medium">119 hr</td>
                <td className="px-6 py-4 text-black font-medium">
                  158 quizzes
                </td>
                <td className="px-6 py-4 text-black font-medium">19500</td>
              </tr>
              <tr className="bg-[#AA96DA] hover:bg-[#b5a0e8] border-2 border-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  6. Alex Nelson
                </th>
                <td className="px-6 py-4 text-black font-medium">113 hr</td>
                <td className="px-6 py-4 text-black font-medium">
                  154 quizzes
                </td>
                <td className="px-6 py-4 text-black font-medium">19000</td>
              </tr>
              <tr className="bg-[#AA96DA] hover:bg-[#b5a0e8] border-2 border-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  7. Jayne Shields
                </th>
                <td className="px-6 py-4 text-black font-medium">109 hr</td>
                <td className="px-6 py-4 text-black font-medium">
                  140 quizzes
                </td>
                <td className="px-6 py-4 text-black font-medium">18400</td>
              </tr>
              <tr className="bg-[#AA96DA] hover:bg-[#b5a0e8] border-2 border-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  8. Andy Shaffer
                </th>
                <td className="px-6 py-4 text-black font-medium">108 hr</td>
                <td className="px-6 py-4 text-black font-medium">
                  139 quizzes
                </td>
                <td className="px-6 py-4 text-black font-medium">18300</td>
              </tr>
              <tr className="bg-[#AA96DA] hover:bg-[#b5a0e8] border-2 border-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  9. Jimmy Reese
                </th>
                <td className="px-6 py-4 text-black font-medium">101 hr</td>
                <td className="px-6 py-4 text-black font-medium">
                  130 quizzes
                </td>
                <td className="px-6 py-4 text-black font-medium">17400</td>
              </tr>
              <tr className="bg-[#AA96DA] hover:bg-[#b5a0e8] border-2 border-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  10. Taylor Ballard
                </th>
                <td className="px-6 py-4 text-black font-medium">98 hr</td>
                <td className="px-6 py-4 text-black font-medium">
                  127 quizzes
                </td>
                <td className="px-6 py-4 text-black font-medium">16900</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Table;
