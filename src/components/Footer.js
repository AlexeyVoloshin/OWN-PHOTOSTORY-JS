import React, { Component } from 'react';
import './../App.css';
const urlImage = [
    require('./../assets/img/fb.png'),
    require('./../assets/img/vk.png'),
    require('./../assets/img/instagram.png'),
    require('./../assets/img/logo2.png'),
];

class Footer extends React.Component{
    render(){
        return(

            <footer class="footer-style ">
                <div class="container-style max-width">
                    <div class="wrap-style column-containers ">
                        <div class="container">
                            <div class="cont-text-footer">
                                <p class="text-footer-style">About us</p>
                                <p class="text-footer-style">Careers</p>
                                <p class="text-footer-style">Help</p>
                                <p class="text-footer-style">Press</p>
                            </div>
                        </div>
                        <div class="container">
                            <div class="cont-text-footer">
                                <p class="text-footer-style">Term</p>
                                <p class="text-footer-style">Payment</p>
                                <p class="text-footer-style">Shipping</p>
                                <p class="text-footer-style">Contact</p>
                            </div>

                        </div>
                        <div class="container">
                            <div class="cont-text-footer">
                                <p class="text-footer-style">lightbook</p>
                                <p class="text-footer-style">classicbook</p>
                                <p class="text-footer-style">premiumbook</p>
                            </div>

                        </div>
                        <div class="container">
                            <div class="fb-vk-inst">

                                <a href="#">
                                    <img src={urlImage[0]} alt="fb"/>
                                </a>

                                <a href="#">
                                    <img src={urlImage[1]} alt="vk"/>
                                </a>

                                <a href="#">
                                    <img src={urlImage[2]} alt="inst"/>
                                </a>
                            </div>
                            <div class="logo-style">
                                <p class="logo-text">Designed by </p>
                                <img class="logo-img" src={urlImage[3]}/>
                            </div>
                        </div>

                    </div>
                    <p class="logo-text-style">© 2015 Photobook. All rights reserved</p>
                </div>



            </footer>
        )
    }

}

export default Footer;