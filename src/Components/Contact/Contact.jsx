import React, { useState } from "react";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  return (
    <div className="container contact  vh-100" style={{height:'630px'}}>
      <div className="header pb-2">
        <h2 className="text-uppercase text-center text-second-color fw-bolder fs-1 mb-3">
          contact section
        </h2>
        <div className="line_star d-flex justify-content-center text-second-color align-items-center mb-5">
          <div className="line_portofolio me-2"></div>
          <i className="fa-solid fa-star text-second-color"></i>
          <div className="line_portofolio ms-2"></div>
        </div>
      </div>

      <form className="  position-relative mt-3" style={{ marginLeft: 0, marginRight: 'auto' }}>
        <div className="mb-4 position-relative">
          <div style={{ marginBottom: "30px" }}>
            <label
              className={`custom-label mb-4 ${userName ? "" : "hidden"}`}
              htmlFor="userName"
            >
              userName:
            </label>
            <input
              id="userName"
              type="text"
              placeholder="userName"
              className="form-control border-0 border-bottom py-3"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label
              className={`custom-label ${userAge ? "" : "hidden"}`}
              htmlFor="userAge"
            >
              userAge:
            </label>
            <input
              id="userAge"
              type="text"
              placeholder="userAge"
              className="form-control border-0 border-bottom py-3"
              value={userAge}
              onChange={(e) => setUserAge(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label
              className={`custom-label ${userEmail ? "" : "hidden"}`}
              htmlFor="userEmail"
            >
              userEmail:
            </label>
            <input
              id="userEmail"
              type="text"
              placeholder="userEmail"
              className="form-control border-0 border-bottom py-3"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label
              className={`custom-label ${userPassword ? "" : "hidden"}`}
              htmlFor="userPassword"
            >
              userPassword:
            </label>
            <input
              id="userPassword"
              type="text"
              placeholder="userPassword"
              className="form-control border-0 border-bottom py-3"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          type="button"
          className="btn text-white"
          style={{ backgroundColor: "#1abc9c" }}
        >
          send Message
        </button>
      </form>
    </div>
  );
}
