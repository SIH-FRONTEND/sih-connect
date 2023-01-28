//importing from styled component
import styled from "styled-components";

//importing from react-router-dom
import { useLocation, useNavigate } from "react-router-dom";

//using styled components to styled div in order to account for hover
const ImageControl = styled.div`
  & {
    width: ${({ width }) => width || "9em"};
    height: ${({ height }) => height || "9em"};
    border-radius: 50%;
    border: 0.5px solid #10328c;
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
    width: 4em;
    height: 4em;
  }
`;

const DisplayPhoto = ({
  img,
  alt,
  width,
  backgroundColor,
  currentStatus,
  id,
}) => {
  const navigate = useNavigate();
  //declaring navigate

  const location = useLocation();
  console.log(location);

  const displayProfile = () => {
    navigate(`/${id}/profile`);
  };
  return (
    <ImageControl onClick={displayProfile} className="h-24  w-24 ">
      {currentStatus && (
        <div className=" absolute rounded-full right-1 top-0 xl2:right-2 xl2:top-3 border-2 border-white border-solid bg-[#1ED70E] h-[15px] w-[15px] xl2:h-[20px] xl2:w-[20px] z-[4]"></div>
      )}
      <img
        src={img}
        alt={alt}
        width={width}
        backgroundColor={backgroundColor}
      />
      <p className="">View Profile</p>
    </ImageControl>
  );
};

export default DisplayPhoto;
