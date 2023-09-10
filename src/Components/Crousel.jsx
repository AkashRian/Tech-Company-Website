import React from 'react';
import './Crousel.css'; // Import your CSS file for styling

const Crousel = () => {
    return (
        <div className="box-crousel">
            {/* <div className="scrolling-image-container">
                <img className='crs-im1' src="./images/herologo.png" width="120" height="60" alt="Natural" />
                <img className='crs-im2' src="./images/herologo.png" width="120" height="60" alt="Natural" />
                <img className='crs-im3' src="./images/herologo.png" width="120" height="60" alt="Natural" />


                <img  className='crs-im4' src="./images/herologo.png" width="120" height="60" alt="Natural" />
                




            </div> */}
            <div className="crouse-img">
            <div className="crouse-im1">
                <img  className='img-crouse'src=".\images\crouse2.png" alt="Logo-1" />
            </div>
            <div className="crouse-im1">
            <img  className='img-crouse'src=".\images\penta-img1.png" alt="logo-1" />

            </div>
            <div className="crouse-im1">
            <img  className='img-crouse'src=".\images\imgfcefc.png" alt="Logo-1" />

            </div>
            <div className="crouse-im1">
            <img  className='img-crouse'src=".\images\img-crousejhf1.png" alt="Logo-1" />

            </div>
            <div className="crouse-im1">
            <img  className='img-crouse'src="./images/efrf.png" alt="Logo-1" />

            </div>

            </div>




        </div>
    );
};

export default Crousel;
