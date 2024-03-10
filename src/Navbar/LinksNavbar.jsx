import { Link } from "react-router-dom"
import "../global.css"

function LinksNavbar(){
    return(
        <>
        <div className="py-3 gap-6 items-center hidden lg:flex">
            <Link className="text-base hover:bg-[#FFFFD2] p-2 transition duration-300 ease-in-out rounded-full global-font" to='/'>
            Почетна
            </Link>
            <Link className="text-base hover:bg-[#FFFFD2] p-2 transition duration-300 ease-in-out rounded-full global-font" to='/start'>
            Започни
            </Link>
            <Link className="text-base hover:bg-[#FFFFD2] p-2 transition duration-300 ease-in-out rounded-full global-font" to='/membership'>
            Членство
            </Link>
            <Link className="text-base hover:bg-[#FFFFD2] p-2 transition duration-300 ease-in-out rounded-full global-font" to='/leaderboards'>
            Табели
            </Link>
            <Link className="text-base hover:bg-[#FFFFD2] p-2 transition duration-300 ease-in-out rounded-full global-font" to='/login'>
            Најави се
            </Link>
        </div>
        </>
    )
}

export default LinksNavbar