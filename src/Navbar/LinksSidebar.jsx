import { Link } from "react-router-dom"
import "../global.css"
function LinksSidebar({ onClose }) {

    return (
      <>
      <div className="flex flex-col pt-16">
            <Link onClick={onClose} className="pt-2 pe-2 pb-5 pl-9 font-normal text-xl global-font hover:bg-[#FFFFD2] p-2 rounded-full" to="/">Homepage</Link>
            <Link onClick={onClose} className="pt-2 pe-2 pb-5 pl-9 font-normal text-xl global-font hover:bg-[#FFFFD2] p-2 rounded-full" to="/quiz">Start</Link>
            <Link onClick={onClose} className="pt-2 pe-2 pb-5 pl-9 font-normal text-xl global-font hover:bg-[#FFFFD2] p-2 rounded-full" to="/membership">Membership</Link>
            <Link onClick={onClose} className="pt-2 pe-2 pb-5 pl-9 font-normal text-xl global-font hover:bg-[#FFFFD2] p-2 rounded-full" to="/leaderboards">
              Leaderboards
            </Link>
            <Link onClick={onClose} className="pt-2 pe-2 pb-5 pl-9 font-normal text-xl global-font hover:bg-[#FFFFD2] p-2 rounded-full" to="/login">Login</Link>
            </div>
      </>
    )
  }
  
  export default LinksSidebar
  