import React, { Fragment } from "react";
import '../styles/form.css'
import img1 from './img/bestbuy-logo.png'
import img2 from './img/home.png'
import img3 from './img/user.png'
import img4 from './img/shop.png'
import img5 from './img/shop-b.png'
import img6 from './img/yang-profile.jpg'
import img7 from './img/tag.png'
import img8 from './img/logout.png'
import img9 from './img/upload.png'

const Form = () => {
  return (
    <Fragment>
       <div id="page-container">
        <div id="sc-side-nav-bar">
            <img class="main-logo" src={img1} width="auto" height="60px"/>
            <div id="side-bar-category-wrap">
                <div class="side-nav-bar-category">
                    <img src={img2} width="30px" height="30px"/>
                    <p>Dashboard</p>
                </div>

                <div class="side-nav-bar-category">
                    <img src={img3} width="30px" height="30px"/>
                    <p>Profile</p>
                </div>

                <div class="side-nav-bar-category">
                    <img src={img4} width="30px" height="30px"/>
                    <p>Shop</p>
                </div>
            </div>

            <div id="create-product-btn-wrap">
                <button id="create-product-btn">POST</button>
            </div>
        </div>

        <div id="main-section-container">
            <div id="sc-top-header-bar">
                <div class="header-icon-wrap">
                    <img src={img5} width="25px" height="auto"/>
                    <p class="header-subtext">Shop</p>
                </div>
                <div id="profile-wrap" class="header-icon-wrap">
                    <img src={img6} width="25px" height="25px"/>
                </div>
                <div id="point-wrap" class="header-icon-wrap">
                    <img src={img7} width="25px" height="auto"/>
                    <p class="header-subtext" id="user-tag-count">45</p>
                </div>
                <div class="header-icon-wrap">
                    <img src={img8} width="25px" height="auto"/>
                    <p class="header-subtext">Logout</p>
                </div>
            </div>

            <div id="sc-main-form">
                <div class="sc-main-form-1">
                    <div class="search">
                        <input id="search_item" type="text" placeholder="type serial number of unique identify id.."/>
                        <button id="search_button">Search</button>
                    </div>
                    <div class="image">
                        <div class="image-wrap">
                        <p class="image-title">Drag & Drop Images Here</p>
                        <img id={img9} src="img/upload.png" width="50px" height="auto"/>
                        <p class="image-title">Or</p>
                        <button id="image-upload-btn">Upload Image</button>
                    </div>
                    </div>
                    <div class="tag">
                        <div class="tag-list">
                            <button class="tag-item">technology</button>
                            <button class="tag-item">laptop</button>
                            <button class="tag-item">mac</button>
                            <button class="tag-item">2019</button>
                            <button class="tag-item">Apple</button>
                            <button class="tag-item">256GB</button>
                            <button class="tag-item">Intel</button>
                            <button class="tag-item">SSD</button>
                            <button class="tag-item">Macbook</button>
                            <i id="create-tag-btn" class="fas fa-plus-circle"></i>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
    </Fragment>
  );
};

export default Form;
