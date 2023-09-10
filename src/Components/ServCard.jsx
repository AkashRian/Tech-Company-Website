
import React from 'react';
import './ServCard.css'; // Import your SCSS file for styling

const ServCard = () => {
    return (
        <div className="box-container">
            {/* <div className="main-box">
        This is the main box.
      </div> */}
            <div className="sub-boxes">
                <div className="sub-box">
                    <h1>Strategy</h1>
                    <p>Strategic technology advice to help plan your future growth.</p>
                </div>
                <div className="sub-box">
                    <h1>Planning</h1>
                    <p>Strategic technology advice to help plan your future growth.</p>
                </div>
                <div className="sub-box">
                    <h1> Security</h1>
                    <p>Strategic technology advice to help plan your future growth.</p>

                </div>
                <div className="sub-box">
                    <h1>Support</h1><br />
                    <p>Strategic technology advice to help plan your future growth.</p>

                </div>
            </div>
        </div>
    );
};

export default ServCard;
