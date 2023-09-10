
import React from 'react';
import './Update.css'; // Import your CSS file for styling

const Update = () => {
    return (
        <div className="flex-box">
        <h1>EMPTY PAGE </h1>
          




        </div>




        // End sample page




    );
};

export default Update;



testing:- crousel 

// html part

<div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
	</div>
</div>




// css part for crousel 
body {
	align-items: center;
	background: #E3E3E3;
	display: flex;
	height: 100vh;
	justify-content: center;
}

@mixin white-gradient {
	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
}


// Styling
.slider {
	background: white;
	box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
	height: 100px;
	margin: auto;
	overflow:hidden;
	position: relative;
	width: 960px;
	
	&::before,
	&::after {
		@include white-gradient;
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}
	
	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}
	
	.slide-track {
		animation: scroll $animationSpeed linear infinite;
		display: flex;
		width: calc(250px * 14);
	}
	
	.slide {
		height: 100px;
		width: 250px;
	}
}




// box page
<div class="wrapper">
        <div className="find">
          <h2 className='find-out'>Find out more about <br />
            our IT support</h2>
          <p className='whether'>Whether you need a full IT team or specialized consultation, Integris can help.

          </p>

        </div>
        <div className="card-contbox">
          <div className="service-box">

          </div>
        </div>





        <div className="service">


          {/* <h2 className='count-4'>Find out more abouts</h2> */}

          {/* <div className="count-h"> */}
          {/* <h2 className='count-1'>Find out more abouts</h2> */}
          {/* <h2 className='count-1'>our IT support</h2> */}
          {/* <p className='count-1'>Whether you need a full IT team or specialized consultation, Integris can help.</p> */}

          {/* </div> */}

        </div>

      </div>

      <div className="card-sebox">
      
              {/* <div class="box-a">
                <h1>01  Managed IT Services</h1>
              </div>
              <div class="box-b">
                <h1>02 Cybersecurity</h1>
              </div>
              <div class="box-c">
                <h1> 03 IT Consulting</h1>
              </div>
              <div class="box-d">
                <h1>04 Managed Cloud</h1>
              </div> */}
            </div>
