import React from 'react'
import '../styles/aem-grid.css';
import instagram from '../images/instagram.jpg'
import facebook from '../images/facebook.jpg';
import twitter from '../images/twitter.jpg';

export default function Footer() {
    return (
        <div class="container1">
            <div class="footer">
                <div class="aem-Grid  aem-Grid--12">

                    <div class="aem-GridColumn aem-GridColumn--default--3">
                        <div className='foot1'>
                            <h5>Account</h5>
                            <p>SignIn</p>
                            <p>Register</p>
                            <p>Order Status</p>
                        </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--3">
                        <h5>About Us</h5>
                        <p>Our Story</p>
                        <p>Careers</p>

                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--3">
                        <h5>Help</h5>
                        <p>Contact Us</p>
                        <p>Order Status</p>
                        <p>Status</p>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--3">
                        <h5>Follow Us!</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <div class="icons">
                            <img src={instagram} />
                            <img src={facebook} />
                            <img src={twitter} />

                        </div>
                    </div>
                </div>
                <hr/>
                <div className='foot-last'>
                    <div class="aem-Grid  aem-Grid--12">

                        <div class="aem-GridColumn aem-GridColumn--default--4">
                            <h3>VENIA</h3>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--4">
                            <p>© Company Name Address Ave, City Name, State ZIP</p>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--4">
                            <div className='foot1'>
                                <ul>
                                    <li><a href="">Terms of Use</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}



