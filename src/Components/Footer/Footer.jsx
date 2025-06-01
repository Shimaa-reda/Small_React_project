import React from "react";

export default function Footer() {
  return (
    <>
      {/* <div className='bg-warning p-3 text-center text-white fixed-bottom'>
     footer 
    </div> */}


      <div className="footer pt-5 bg-second-color text-white ">
        <div className="container py-3">
          <div className="row">
            <div className="col-sm-12 col-md-4 mb-4 mb-md-0">
              <div className="lacation text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-4 mb-md-0">
              <div className="around text-center">
                <h3>AROUND THE WEB</h3>
                <ul className="list-unstyled d-flex gap-2 justify-content-center align-items-center">
                    <li>
                        <i class="fa-brands fa-facebook mx-1"></i>
                    </li> 
                    <li>
                        <i class="fa-brands fa-twitter mx-1"></i>
                    </li> 
                    <li>
                       <i class="fa-brands fa-linkedin-in mx-1"></i>
                    </li>
                     <li>
                        <i class="fa-solid fa-globe mx-1"></i>
                    </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-4 mb-md-0">
              <div className="about text-center">
                <h3>ABOUT FREELANCER</h3>
                <p className="fs-7">Freelance is a free to use, licensed Bootstrap theme created by Routee</p>
                
              </div>
            </div>
           
          </div>
        </div>
        <p className="bg-footer text-white text-center  p-3 mt-4 mb-0">Copyright &copy; Your Website 2021</p>
      </div>

  
       

    </>
  );
}
