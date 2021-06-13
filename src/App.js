import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const [pageNo, setPageNo] = useState(1);

  const getUsers = async () => {
    const response = await fetch(`https://reqres.in/api/users?page=${pageNo}`);
    // console.log(response);
    var api_response = await response.json();
    setUsers(api_response.data);
  };

  const loadMore = () => {
    setPageNo(pageNo + 1);

    getUsers();
  };

  const previousPage = () => {
    setPageNo(pageNo -1);

    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, [users, pageNo]);

  return (
    <div>
      

      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5 ">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={curElem.avatar}
                        className="rounded"
                        width="155"
                      >
                        {curElem.img}
                      </img>
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 text left">{curElem.id}</h4>
                        <span className="textleft">{curElem.email}</span>
                        <div className="p-2 mt-2 bg-primaryd-flex justify-content-between rounder text-black stats">
                          {/* {curElem.first_name}  {curElem.last_name} */}

                          <div className="d-flex flex-coloum">
                            <span className="articles">
                              {curElem.first_name} {curElem.last_name}
                            </span>
                            <span className="number1"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button className="btn1" onClick={loadMore}>
        Next
      </button>


      <button className="btn2" onClick={previousPage}>
        Previous
      </button>
    </div>

  );
};

export default App;
