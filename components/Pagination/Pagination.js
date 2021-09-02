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
`;

export function Pagination({ currentPage, totalPages }) {
  return (
    <StyledNav aria-label="Pagination">
      <ul>
        <li>
          <button
            type="button"
            disabled={currentPage === 1}
            aria-label={`Go To Page ${currentPage - 1}`}
          >
            Previous Page
          </button>
        </li>
        <li>
          <button
            type="button"
            aria-current="true"
            aria-label={`Current Page, Page ${currentPage}`}
          >
            {currentPage}
          </button>
        </li>
        <li>
          <button
            type="button"
            disabled={currentPage === totalPages}
            aria-label={`Go To Page ${currentPage + 1}`}
          >
            Next Page
          </button>
        </li>
      </ul>
    </StyledNav>
  );
}