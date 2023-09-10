
import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
    return (

        <div className="footer-final">

            <div className="footer-section">
                <img className=' tag' src='.\images\Numbers-01.png' alt='Dot' />



                <h4>NEWS UPDATE </h4>
            </div>
            <div className="footer-secti">

                <h1>Get Informed about IT
                </h1>
            </div>



            <div className="footer-fbox">

                {/* <h2>This is news update page</h2> */}
                <div className="imp-box">
                    <div className="footer-fbox1">

                        {/* <h5>box-1
                        </h5> */}
                        <div className="img-div1">
                            <img className='img-serv1' src='.\images\Blog-06.jpg' alt="service" ></img>
                            <div class="bottom-left">
                                <input type="button" class="button-im" value="CyberSecurity" />
                                <h1 className='micro'>Microsoft SharePoint Phishing Scam</h1>
                                <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipiscing elit taciti orci...</p>
                            </div>
                            


                        </div>
                        <div className="img-div2">
                            <img className='img-serv2' src='.\images\Blog-04.jpg' alt="service" ></img>
                           



                        </div>
                        <div className="img-div3">
                            <img className='img-serv3' src='.\images\Blog-01.jpg' alt="service" ></img>


                        </div>






                        {/* <img src=".\images\Blog-06.jpg" alt="service"> */}

                    </div>
                    {/* <div className="footer-fbox2">

                        <h5>box-2
                        </h5>
                    </div>
                    <div className="footer-fbox3">

                        <h5>Box-3
                        </h5>
                    </div> */}

                </div>


            </div>
        </div>


















    );
};

export default Footer;
