import { Link } from "react-router-dom"
import "../global.css"

function LinksNavbar(){
    return(
        <>
        <div className="py-3 gap-6 items-center hidden lg:flex">
            <Link className="text-base hover:bg-[#FFFFD2] p-2 transition duration-300 ease-in-out rounded-full global-font" to='/'>
            Homepage
            </Link>
            <Link className="text-base hover:bg-[#FFFFD2] p-2 transition duration-300 ease-in-out rounded-full global-font" to='/quiz'>
            Start
            </Link>
            <Link className="text-base hover:bg-[#FFFFD2] p-2 transition duration-300 ease-in-out rounded-full global-font" to='/membership'>
            Membership{/* https://flowbite.com/docs/components/card/ */}
            </Link>
            <Link className="text-base hover:bg-[#FFFFD2] p-2 transition duration-300 ease-in-out rounded-full global-font" to='/leaderboards'>
            Leaderboards
            </Link>
            <Link className="text-base hover:bg-[#FFFFD2] p-2 transition duration-300 ease-in-out rounded-full global-font" to='/login'>
            Login
            </Link>
        </div>
        </>
    )
}

export default LinksNavbar