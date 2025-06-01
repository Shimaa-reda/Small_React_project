import React from "react";
import homeImage from "../../assets/home.svg";
export default function Home() {
  return (
    <>
      <div className="home d-flex justify-content-center align-items-center flex-column " style={{height:'710px'}}>
        <img src={homeImage} alt="" style={{ width: "200px" }} />
        <div className="content pt-4 text-center">
          <h2 className="text-uppercase text-white fw-bolder fs-1 mb-3">
            start Framework
          </h2>
          <div className="line_star d-flex justify-content-center align-items-center mb-3">
            <div className="line me-2"></div>
            <i class="fa-solid fa-star text-white"></i>
            <div className="line ms-2"></div>
          </div>
          <div className="about text-white fs-6 mb-3">Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </>
  );
}
