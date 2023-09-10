// import React from 'react';
// import './Card.css'; // Import your CSS file for styling

// const Card = () => {
//   return (
//     <div className="card-box">
//       This is a box component.
//     </div>
//   );
// };

// export default Card;


import React from 'react';
import './Boxcontainer.css'; // Import your SCSS file for styling

const BoxContainer = () => {
    return (
        <div className="box-container">
            {/* <div className="main-box">
        This is the main box.
      </div> */}
            <div className="sub-boxes">
                <div className="sub-box">
                <img className=' tag' src='.\images\Numbers-01.png' alt='Dot' />

                <h1 class="tittle-1">Strategy</h1>
                <p>Strategic technology advice to<br/>help plan your future growth</p>

                    


                </div>
                <div className="sub-box">
                <img className=' tag' src='.\images\Numbers-01.png' alt='Dot' />

                <div className="main-dabba">
                <h1 class="tittle-1">Planning</h1>
                <p>Strategic technology advice to <br/>help plan your future growth</p>


                
                        {/* <div className="dabba">
                        <p>02</p>
                            <div className="dabba-1">
                                <h1>Planning</h1>

                            </div>
                            <div className="dabba-3">
                                <p>Strategic technology advice to <br/>help plan your future growth</p>

                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="sub-box">
                <img className=' tag' src='.\images\Numbers-01.png' alt='Dot' />

                <div className="main-dabba">
                <h1 class="tittle-1">Security</h1>
                <p>Strategic technology advice to <br/>help plan your future growth</p>


                        {/* <div className="dabba">
                        <p>03</p>
                            <div className="dabba-1">
                                <h1>Security</h1>

                            </div>
                            <div className="dabba-3">
                                <p>Strategic technology advice to <br/>help plan your future growth</p>

                            </div>
                        </div> */}
                    </div>

                </div>
                <div className="sub-box">
                <img className=' tag' src='.\images\Numbers-01.png' alt='Dot' />

                <div className="main-dabba">
                <h1 class="tittle-1">Support</h1>
                <p>Strategic technology advice to <br/>help plan your future growth</p>


                        {/* <div className="dabba">
                        <p>04</p>
                            <div className="dabba-1">
                                <h1>Support</h1>

                            </div>
                            <div className="dabba-3">
                                <p>Strategic technology advice to <br/>help plan your future growth</p>

                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BoxContainer;
