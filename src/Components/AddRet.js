import { Link } from "react-router-dom";

const AddRet = () => {
  return (
    <div className="flex p-4 lg:w-[30vw] sm:w-[10vw] ml-12 mt-10 gap-3 gap-y-4 ">
      <button className=" p-4 bg-blue-500 text-white">
        <Link to={"/"}>Add New Person</Link>
      </button>
      <button className="p-4 bg-blue-500 text-white">
        <Link to={"/retrieve"}>Retrieve Information</Link>
      </button>
    </div>
  );
};

export default AddRet;
