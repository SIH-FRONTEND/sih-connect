//importing from style-components
import styled from "styled-components";

const ButtonControl = styled.button`
  & {
    height: ${({ height }) => (height ? height : "3em")};

    display: flex;
    justify-content: center;

    align-items: center;

    background-color: ${(props) => props.backgroundColor || "#10328C"};
    color: ${(props) => props.color || "#ffffff"};
    padding: 1em;
    width: ${(props) => props.width || "200px"};
    border-radius: 8px;
    margin: ${({ margin }) => margin || "1em"};
    font-size: ${({ fontSize }) => fontSize || "1.2em"};
    border: ${(props) => props.border || `2px solid ${props.backgroundColor}`};
    cursor: pointer;
  }
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "#090e47"};
  }

  @media (max-width: 1024px) {
    & {
      height: 2.5em;
      width: ${({ rWidth }) => rWidth || "120px"};
      font-size: 1em;
    }
  }
`;
const Button = ({
  backgroundColor,
  children,
  width,
  height,
  hoverColor,
  color,
  type,
  border,
  fontSize,
  margin,
  rWidth,
  clickHandler,
}) => {
  return (
    <ButtonControl
      type={type && type}
      backgroundColor={backgroundColor}
      height={height}
      border={border}
      color={color}
      hoverColor={hoverColor}
      width={width}
      fontSize={fontSize}
      margin={margin}
      rWidth={rWidth}
      onClick={clickHandler}
    >
      {children}
    </ButtonControl>
  );
};

export default Button;
