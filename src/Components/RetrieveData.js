import React, { useState } from "react";

function RetrieveData() {
  const [input, setInput] = useState();
  const [result, setResult] = useState("");

  let str = localStorage.getItem("data");
  let data = JSON.parse(str);

  const check = () => {
    data.forEach((e) => {
      if (e.AadharNumber === input) {
        setResult(e);
      }
    });
  };

  console.log(result);
  return (
    <div className="retrieve flex">
      <h3 className="p-4 border-2 border-black">Retrieve Information</h3>
      <div  className="single-data">
      <div>
        <input
          className=" search  border-2 border-black" placeholder="Enter Your Aadhar Number"
          type={"number"}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn-find" onClick={() => check()}>
          Find
        </button>
      </div>
      <div>
        {result === "" ? (
          <h1 className="no-data font-bold text-[30px]">NO DATA</h1>
        ) : (
          <div className="find-detail">
            <h3 className="h3">Name: <span>{result.Name} </span> </h3>
            <h3 className="h3">DOB: <span>{result.DateOfBirth} </span> </h3>
            <h3 className="h3">Aadhar: <span>{result.AadharNumber} </span> </h3>
            <h3 className="h3">Mobile No: <span>{result.MobileNumber} </span> </h3>
            <h3 className="h3">Age: <span>{result.Age} </span> </h3>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default RetrieveData;
