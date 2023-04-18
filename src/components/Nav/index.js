import { useEffect } from "react";
//import Page from "../Page";

const Nav =(props) => {
    const {
        pages = [],
        setCurrentPage, 
        currentPage, 
    } = props; 

useEffect(()=>{
    document.title = currentPage.name;
},[currentPage]); 

return (
    <nav>
        <ul>
        {pages.map((Page) => (
          <li
              className={`${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => {
                  setCurrentPage(Page);
                }}
              >
                {Page.name}
              </span>
            </li>
        ))}
        </ul>
    </nav>

); 
            }

export default Nav; 