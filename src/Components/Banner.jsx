import React from 'react';
import './Banner.css'; // Import your CSS file for styling

const Banner = () => {
  return (
    <div className="box">
      {/* for image contaner  */}
        <div class="container">
            <div class="background-img"></div>
            <div class="text-block">
                <div class="row">
                    <div class="column">
                        <h1 class="title-1">Top Managed</h1>
                        <h1 class="title-1">Provider &</h1>
                        <h1 class="title-2">IT Services</h1>
                        <h2 class="title-3">Strategic technology advice to help plan your future growth.</h2>
                        <div class="banner-btn-wrap">
                            <button class="button btn-1">Get Started </button>
                            <button class="button btn-2">Learn More</button>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End box model --> */}
    </div>
  );
};

export default Banner;
