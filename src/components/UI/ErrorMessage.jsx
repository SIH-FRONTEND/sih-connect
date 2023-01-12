import { BiError } from "react-icons/bi";

const ErrorMessage = ({ bg }) => {
  const errorClassName =
    "m-auto p-8 flex items-center flex-col w-[90%] xl2:w-[40%] " +
    `bg-[${bg || "#ffffff"}]`;
  return (
    <div className={errorClassName}>
      <BiError fill="red" size="48" />
      <h2 className="font-[400] text-[2em]">An error occured</h2>
    </div>
  );
};

export default ErrorMessage;
