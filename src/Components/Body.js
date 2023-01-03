import React, { useState, useEffect } from "react";

const Main = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [singleDetail, setSingleDetail] = useState({});
  const [details, setDetails] = useState([]);
  const [hide, setHide] = useState("");

  useEffect(() => {
    setSingleDetail({
      Name: `${name}`,
      DateOfBirth: `${dob}`,
      AadharNumber: `${aadhar}`,
      MobileNumber: `${number}`,
      Age: `${age}`,
    });
  }, [name, dob, aadhar, number, age]);

  useEffect(() => {
    if (dob === "") {
    } else {
      let dod = new Date(dob);
      let month_diff = Date.now() - dod.getTime();
      let age_dt = new Date(month_diff);
      let year = age_dt.getUTCFullYear();
      let Age = Math.abs(year - 1970);
      setAge(Age);
    }
  }, [dob]);

  const add = () => {
    if (name === "" || dob === "" || aadhar === "" || number === "") {
      alert("Please Fill all the inputs fields");
    } else if (aadhar.length !== 12) {
      alert("Aadhar Number should be 12 digits long.");
    } else if (number.length !== 10) {
      alert("Mobile Number should be 10 digits long.");
    } else {
      setDetails([...details, singleDetail]);
      setHide("none");
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(details));
  }, [details]);

  const removeAfterSave = (e) => {
    console.log(e);
    let arr = [];
    details.forEach((ele) => {
      if (ele.AadharNumber !== e.AadharNumber) {
        arr.push(ele);
      }
    });
    setDetails(arr);
  };

  const remove = () => {
    setName("");
    setDob("");
    setAadhar("");
    setNumber("");
    setAge("");
  };

  const display = () => {
    setHide("");
    setName("");
    setDob("");
    setAadhar("");
    setNumber("");
    setAge("");
  };
  return (
    <div className="main flex gap-y-10">
      <h3 className="person  border-2 border-black">Add New Person</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th className="thead bg-blue-500">Name</th>
              <th className="thead bg-blue-500">Date of Birth</th>
              <th className="thead bg-blue-500">Aadhar Number</th>
              <th className="thead bg-blue-500">Mobile Number</th>
              <th className="thead bg-blue-500">Age</th>
              <th className="thead bg-blue-500">Actions</th>
            </tr>
          </thead>
          <tbody>{details.map((e, i) => {
              return (
                <tr key={i}>
                  <td>
                    <input defaultValue={e.Name} type={"text"} />
                  </td>
                  <td>
                    <input className="input-date" defaultValue={e.DateOfBirth}  type={"date"}/>
                  </td>
                  <td>
                    <input className="input-num"defaultValue={e.AadharNumber} type={"number"}/>
                  </td>
                  <td>
                    <input className="input-num" defaultValue={e.MobileNumber} type={"number"}/>
                  </td>
                  <td>{e.Age}</td>
                  <td>
                    <button className="action">Save</button>
                    <button
                      className="action right" onClick={() => removeAfterSave(e)}>Delete
                   </button>
                  </td>
                </tr>
              );
            })}
            <tr style={{ display: hide }}>
              <td>
                <input value={name} type={"text"} onChange={(e) => setName(e.target.value)}/>
              </td>
              <td>
                <input value={dob} className="input-date" type={"date"} onChange={(e) => setDob(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="input-num"
                  value={aadhar}
                  type={"number"}
                  onChange={(e) => setAadhar(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="input-num"
                  value={number}
                  type={"number"}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </td>
              <td>{age}</td>
              <td>
                <button className="action" onClick={() => add()}>
                  Save
                </button>
                <button className="action" onClick={() => remove()}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="add" onClick={() => display()}>
        Add
      </button>
    </div>
  );
};

export default Main;
