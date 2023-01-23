

//importing static icons from assets
import showIcon from '../../../assets/showpass_icon.png'
import hideIcon from '../../../assets/hidepass_icon.png'


const ChangePassword = () => {
  return (
    <div>
      <div className="">
        <div className="mt-10">
          <div>
            <div className="mt-3 mx-auto h-[30rem] w-[40rem] border-2 ">
              <div className="w-[30rem] h-[55px] mx-auto mt-16">
                <label className="text-[#344054] flex text-start text-[13px] font-medium ">
                  Current password
                </label>
                <input
                  className=" w-full h-full py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
                  type="text"
                  placeholder="type here "
                />
              </div>
              <div className="w-[30rem] h-[55px] mx-auto mt-10">
                <label className="text-[#344054] flex text-start text-[13px] font-medium ">
                  New password
                </label>
                <div className="relative">
                  <input
                    className=" w-[30rem] h-[55px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
                    type="text"
                    placeholder="type here "
                  />
                  <div className="absolute  bottom-[2.2rem] left-[25rem] h-3 w-4">
                    <img
                      src={showIcon}
                      alt=""
                      className="h-[100%] w-[100%] object-fit"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[30rem] h-[55px] mx-auto mt-10">
                <label className="text-[#344054] flex text-start text-[13px] font-medium ">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    className=" w-[30rem] h-[55px] py-1 rounded-md  border-gray-300  px-2 inline-none mb-4  bg-[#F6F8FE]   text-[10px] text-[#B8B8B8]"
                    type="text"
                    placeholder="type here "
                  />
                  <div className="absolute  bottom-[2.2rem] left-[25rem] h-3 w-4">
                    <img
                      src={hideIcon}
                      alt=""
                      className="h-[100%] w-[100%] object-fit"
                    />
                  </div>
                </div>
              </div>

              <button className="w-[30rem] flex justify-center items-center mx-auto content-center bg-[#10328C] font-[Raleway]  text[20px] text-white py-[0.6rem] px-[3rem]  rounded-md  hover:bg-[#5d8aa8] transition-colors mt-20">
                Change password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
