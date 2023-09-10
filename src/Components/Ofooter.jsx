import React from 'react';
import './Ofooter.css'; // Import your CSS file for styling

const Ofooter = () => {
    return (
        <div className="ofooter">
            {/* this is footer section  */}



            {/* 
                <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Footer</title>
    <link rel="stylesheet" href="styles.css" />
    <script
      src="https://kit.fontawesome.com/66aa7c98b3.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body> */}
            <div class="footer">
                <div class="heading">
                    {/* <h2>Rtech<sup>™</sup></h2> */}
                    <img src="./images/logo_w2.png" alt="Logo" />

                </div>
                <div class="content">
                    <div class="services">
                        <h4>Services</h4>
                        <p><a href="#">App development</a></p>
                        <p><a href="#">Web development</a></p>
                        <p><a href="#">DevOps</a></p>
                        <p><a href="#">Web designing</a></p>
                    </div>
                    {/* <div class="social-media">
                        <h4>Social</h4>
                        <p>
                            <a href="#"
                            ><i class="fab fa-linkedin"></i> Linkedin</a
                            >
                        </p>
                        <p>
                            <a href="#"
                            ><i class="fab fa-twitter"></i> Twitter</a
                            >
                        </p>
                        <p>
                            <a href="https://github.com/farazc60"
                            ><i class="fab fa-github"></i> Github</a
                            >
                        </p>
                        <p>
                            <a href="https://www.facebook.com/codewithfaraz"
                            ><i class="fab fa-facebook"></i> Facebook</a
                            >
                        </p> */}
                        {/* <p>
                            <a href="https://www.instagram.com/codewithfaraz"
                            ><i class="fab fa-instagram"></i> Instagram</a
                            >
                        </p>
                    </div> */}
                    <div class="links">
                        <h4>Quick links</h4>
                        <p><a href="#">Home</a></p>
                        <p><a href="#">About</a></p>
                        <p><a href="#">Blogs</a></p>
                        <p><a href="#">Contact</a></p>
                    </div>
                    <div class="details">
                        <h4 class="address">Address</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur <br />
                            adipisicing elit. Cupiditate, qui!
                        </p>
                        <h4 class="mobile">Mobile</h4>
                        <p><a href="#">+91-12225*****</a></p>
                        <h4 class="mail">Email</h4>
                        <p><a href="#">searchk.akash@gmail.com</a></p>
                    </div>
                </div>
                <footer>
                    <hr />
                    © 2022- CodewithAkash.
                </footer>
            </div>



            {/* End footer section  */}

        </div>





    );
};

export default Ofooter;