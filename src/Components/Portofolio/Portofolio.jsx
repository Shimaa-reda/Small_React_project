import React, { useEffect, useState } from 'react'
import port1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'


export default function Portofolio() {
   useEffect(() => {
    document.title = 'portfolio';
  }, []);
 const [selectedImage, setSelectedImage] = useState(null);

   

   let portofolios = [
     {
       id: 1,
       image: port1,
     },
     {
       id: 2,
       image: port2,
     },
     {
       id: 3,
       image: port3,
     },
     {
       id: 4,
       image: port1,
     },
     {
       id: 5,
       image: port2,
     },
     {
       id: 6,
       image: port3,
     },
   ];
  return <>

  <div className="porto pb-5" >
        <div className="header ">
           <h2 className="text-uppercase text-center text-second-color fw-bolder fs-1 mb-3">
            portfolio component
          </h2>
          <div className="line_star d-flex justify-content-center text-second-color align-items-center mb-3">
            <div className="line_portofolio me-2 "></div>
            <i class="fa-solid fa-star text-second-color"></i>
            <div className="line_portofolio ms-2"></div>
          </div>
        </div>
          <div className="container">
           

          <div className="row g-5">
            {
               portofolios.map((portofolio)=>{
                  return (
                    <div className="col-md-6 col-lg-4 col-sm-12" key={portofolio.id}>
                     <div className="item position-relative overflow-hidden rounded-3" >
                      <img src={portofolio.image} alt="" className="img-fluid "   />
                      <div className="layer d-flex justify-content-center align-items-center position-absolute top-0 left-0"
                       onClick={() => setSelectedImage(portofolio.image)}>
                          <i className="fa-solid fa-plus text-white fa-6x"></i>
                          
                      </div>

                     </div>

                    </div>
                  );
               })
            }

          </div>

          
          
          </div>

        
  </div>
  {/* Modal */}
      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: '#0d6efd40', zIndex: 9999 }}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="img-fluid "
            style={{ maxHeight: '60%', maxWidth: '60%' }}
          />
        </div>
      )}
  
  </>
}
