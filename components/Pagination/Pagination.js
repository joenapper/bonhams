import styled from "styled-components";

const StyledNav = styled.nav`
  padding: 10px;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    /* Cab be used to centralise page numbers
    position: relative; */
  }

  button {
    border: 1px solid rebeccapurple;
    color: #000;
    padding: 5px 10px;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }

  button:hover {
    background-color: rebeccapurple;
    color: #fff
  }

  /* Can be used to centralise page numbers
  li:nth-child(2) button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
  } */

  .active {
    background-color: rebeccapurple;
    color: #fff
  }
`;

export function Pagination({ perPage, totalResults, paginate, currentPage }) {
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalResults / perPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <StyledNav aria-label="Pagination">
      <ul>
        <li>
          <button
            type="button"
            disabled={currentPage === 1}
            aria-label={`Go To Page ${currentPage - 1}`}
            onClick={() => paginate(currentPage - 1)}
          >
            Previous Page
          </button>
        </li>

        <li>
          {pageNumbers.map(number => (
            <button
              key={number}
              className={currentPage === number ? "active" : null}
              type="button"
              aria-current="true"
              aria-label={`Current Page, Page ${currentPage}`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
        </li>

        <li>
          <button
            type="button"
            disabled={currentPage === pageNumbers.length}
            aria-label={`Go To Page ${currentPage + 1}`}
            onClick={() => paginate(currentPage + 1)}
          >
            Next Page
          </button>
        </li>
      </ul>
    </StyledNav>
  );
}