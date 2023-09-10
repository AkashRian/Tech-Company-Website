import React from 'react';
import './Testimon.css'; // Import your CSS file for styling

const Testimonial = () => {
    return (
        <div className="testimonial-box">
            <div className="test-client">
                <img className=' tag-test' src='.\images\Numbers-01.png' alt='Dot' />

                <h4>CLIENTS TESTIMONIALS</h4>
            </div>
            <div class="containe">
                <div class="box-box1">
                    <img className='award' src="./images/award-04.png" alt="" />

                </div>
                <div class="box-box2">
                    <img className='award' src="./images/award-06.png" alt="" />
                </div>
                <div class="box-box2">
                    <img className='award' src="./images/award-07.png" alt="" />
                </div>

            </div>




        </div>
    );
};

export default Testimonial;
