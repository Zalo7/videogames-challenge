import React from "react";
// import '../styles/Paginate.css';


export default function Paginate({ dealsPerPage, apiData, paginate }) {
  let pageNumbers = [];
  console.log(dealsPerPage, apiData, paginate)
  for (let i = 1; i <= Math.ceil(apiData / dealsPerPage); i++) {
    pageNumbers.push(i);
  }
if(apiData < 6) {
  pageNumbers = false;
}
console.log(pageNumbers)
  return (
    <nav className="paginate">
      <ul>
        {pageNumbers &&
          pageNumbers.map((number, i) => (
            <li key={i} className="paginate">
              <button className="button-paginate" onClick={() => paginate(number)}>{number} </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}