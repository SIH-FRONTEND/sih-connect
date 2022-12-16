import styled, { css } from "styled-components";

export const Button = styled.button`
  border-radius: 8px;
  margin: 1em 1em 1em 0;
  padding: 1.2rem 1rem;
  width: 200px;
  // font-size: 1.2rem;
  text-align: center;
  display: flex;
  justify-contents: center;

  ${(props) =>
    props.type === "A"
      ? css`
          background: #10328c;
          color: #fff;
        `
      : props.type === "B"
      ? css`
          background: transparent;
          border: 2px solid #10328c;
          color: #10328c;
        `
      : props.type === "C"
      ? css``
      : null}
`;
//   ${props =>
//     (props.main)
//       ? css`
//           background: palevioletred;
//           color: white;
//         `
//       : (props.submain)? css`background: green;
//     color: gold`: css`background: orange; color: black`}`;
