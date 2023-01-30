//importing from styled component
import styled from "styled-components";

//importing from react-router-dom
import { useLocation, useNavigate } from "react-router-dom";

//using styled components to styled div in order to account for hover
const ImageControl = styled.div`
  & {
    width: ${({ size }) => size || "9em"};
    height: ${({ size }) => size || "9em"};
    border-radius: 50%;
    position: relative;
    cursor: pointer;
  }

  & > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    display: none;
  }
  & > img {
    border-radius: 50%;
    width: 100%;
    position: relative;
    z-index: 0;
    filter: none;
    transition: filter 0.2s;
  }

  &:hover img {
    filter: blur(5px);
    z-index: 2;
    opacity: 0.4;
    background-color: ${({ backgroundColor }) => backgroundColor || "none"};
  }

  &:hover p {
    display: block;
  }

  @media (max-width: 1024px) {
    & {
      width: ${({ rWidth }) => rWidth || "4em"};
      height: ${({ rWidth }) => rWidth || "4em"};
    }
  }
`;

const DisplayPhoto = ({
  img,
  alt,
  size,
  backgroundColor,
  currentStatus,
  id,
  rWidth,
}) => {
  const navigate = useNavigate();
  //declaring navigate

  const location = useLocation();
  console.log(location);

  const displayProfile = () => {
    navigate(`/${id}/profile`);
  };
  return (
    <ImageControl onClick={displayProfile}>
      {currentStatus && (
        <div className=" absolute rounded-full right-1 top-0 xl2:right-2 xl2:top-3 border-2 border-white border-solid bg-[#1ED70E] h-[15px] w-[15px] xl2:h-[20px] xl2:w-[20px] z-[4]"></div>
      )}
      <img
        src={img}
        alt={alt}
        size={size}
        rWidth={rWidth}
        backgroundColor={backgroundColor}
      />
      <p className="">View Profile</p>
    </ImageControl>
  );
};

export default DisplayPhoto;
