import styled from "styled-components";

const HeaderControl = styled.h1`
  & {
    color: ${({ color }) => color || "#000"};
  }
`;

const HeadingText = (props) => {
  return (
    <HeaderControl
      color={props.color}
      className="text-center font-bold text-[1.2em] xl2:text-[1.5em] mb-[0.5em]"
    >
      {props.children}
    </HeaderControl>
  );
};

export default HeadingText;
