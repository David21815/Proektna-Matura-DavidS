import { Link } from "react-router-dom"
import "../global.css"

function LinksNavbar(){
    return(
        <>
        <div className="py-3 gap-6 items-center hidden lg:flex">
            <Link className="text-base font-semibold global-font" to='/'>
            Homepage
            </Link>
            <Link className="text-base font-semibold global-font" to='/quiz'>
            Start
            </Link>
            <Link className="text-base font-semibold global-font" to='/membership'>
            Membership
            </Link>
            <Link className="text-base font-semibold global-font" to='/leaderboards'>
            Leaderboards
            </Link>
            <Link className="text-base font-semibold global-font" to='/login'>
            Login
            </Link>
        </div>
        </>
    )
}

export default LinksNavbar