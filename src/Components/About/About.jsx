import React, { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'about';
  }, []);
  return <>
  
  <div className="about_page d-flex justify-content-center align-items-center flex-column " style={{height:'710px'}}>
        
         <div className="content pt-4 text-center">
           <h2 className="text-uppercase text-white fw-bolder fs-1 mb-3">
             about component
           </h2>
           <div className="line_star d-flex justify-content-center align-items-center mb-3">
             <div className="line me-2"></div>
             <i class="fa-solid fa-star text-white"></i>
             <div className="line ms-2"></div>
           </div>
           </div>
           <div className="container text-white">
                 <div className="row px-5">
            <div className="col-sm-12 col-md-6 ps-md-5">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>

             <div className="col-sm-12 col-md-6 pe-md-5">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
           </div>
           </div>
          
       
       </div>
  </>
    
}
