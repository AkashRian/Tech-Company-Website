import React from 'react';
import './Card.css'; // Import your CSS file for styling

const Card = () => {
  return (



    <div className="card-box">
      <div className="card-sab">
        <img className=' tag-service' src='.\images\Numbers-01.png' alt='Dot' />
        <h4 className='serv'>OUR SERVICES </h4>
        {/* <div className='dot-box'>

          <span class="dot"></span>
        </div> */}

        <div className="card-boxr">
          <div className="card-boxer1">
            <div className="find">
              <h2 className='find-out'>Find out more about </h2>
              <h2 className='find-out1'>our IT support</h2>
              <p className='whether'>Whether you need a full IT team or specialized consultation, Integris can help.

              </p>

            </div>

          </div>

        </div>
        <div className="card-boxer2">
          <div className="boxer-a">
            <h1 className='boxer-ab'>01  Managed IT Services</h1>
            <div className='dot-box'>

          <span class="dot"></span>
        </div>

          </div>
          <div className="boxer-a">
            <h1 className='boxer-ac' >02 Cybersecurity</h1>
            <div className='dot-box'>

          <span class="dot"></span>
        </div>

          </div>
          <div className="boxer-a">
            <h1 className='boxer-ad'>03 IT Consulting</h1>
            <div className='dot-box'>

          <span class="dot"></span>
        </div>

          </div>
          <div className="boxer-a">
            <h1 className='boxer-ae'>04 Managed Cloud</h1>
            <div className='dot-box'>

          <span class="dot"></span>
        </div>

          </div>


        </div>
      </div>
    </div>











  );
};

export default Card;
