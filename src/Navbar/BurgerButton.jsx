import LinksSidebar from "./LinksSidebar"
import SideBar from "./Sidebar"
import { useState } from "react";
import "./Sidebar.css"

function BurgerButton(){
    const [show, setShow] = useState(false);
    const closeSidebar = () => {
      setShow(false);
    };
    return(
        <>
        <div className="lg:hidden">
        <button className="text-base p-2 ml-auto" onClick={() => setShow((show) => !show)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
              className="w-[30px] h-[30px]"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
          <SideBar show={show}>
            <div
              className="custom-x"
              onClick={() => setShow((show) => !show)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </div>
            <LinksSidebar onClose={closeSidebar} />
          </SideBar>
        </div>
        </>
    )
}

export default BurgerButton