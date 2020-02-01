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
    
    const upload=()=>{
        // Upload Function Here
    }

  return (
    <Fragment>
       <div className="page-container">
        <div className="sc-side-nav-bar">
            <img className="main-logo" src={img1} width="auto" height="60px"/>
            <div className="side-bar-category-wrap">
                <div className="side-nav-bar-category">
                    <img src={img2} width="30px" height="30px"/>
                    <p>Dashboard</p>
                </div>

                <div className="side-nav-bar-category">
                    <img src={img3} width="30px" height="30px"/>
                    <p>Profile</p>
                </div>

                <div className="side-nav-bar-category">
                    <img src={img4} width="30px" height="30px"/>
                    <p>Shop</p>
                </div>
            </div>

            <div className="create-product-btn-wrap">
                <button className="create-product-btn">POST</button>
            </div>
        </div>

        <div className="main-section-container">
            <div className="sc-top-header-bar">
                <div className="header-icon-wrap">
                    <img src={img5} width="25px" height="auto"/>
                    <p className="header-subtext">Shop</p>
                </div>
                <div className="header-icon-wrap profile-wrap">
                    <img src={img6} width="25px" height="25px"/>
                </div>
                <div className="header-icon-wrap point-wrap">
                    <img src={img7} width="25px" height="auto"/>
                    <p className="user-tag-count header-subtext">45</p>
                </div>
                <div className="header-icon-wrap">
                    <img src={img8} width="25px" height="auto"/>
                    <p className="header-subtext">Logout</p>
                </div>
            </div>

            <div className="sc-main-form">
                <div className="sc-main-form-1">
                    <div className="search">
                        <input className="search_item" type="text" placeholder="type serial number of unique identify id.."/>
                        <button className="search_button">Search</button>
                    </div>
                    <div className="image">
                        <div className="image-wrap">
                        <p className="image-title">Drag & Drop Images Here</p>
                        <img className="upload-img" src={img9} width="50px" height="auto"/>
                        <p className="image-title">Or</p>
                        <button className="image-upload-btn" onClick={upload}>Upload Image</button>
                    </div>
                    </div>
                    <div className="tag">
                        <div className="tag-list">
                            <button className="tag-item">technology</button>
                            <button className="tag-item">laptop</button>
                            <button className="tag-item">mac</button>
                            <button className="tag-item">2019</button>
                            <button className="tag-item">Apple</button>
                            <button className="tag-item">256GB</button>
                            <button className="tag-item">Intel</button>
                            <button className="tag-item">SSD</button>
                            <button className="tag-item">Macbook</button>
                            <i className="fas fa-plus-circle create-tag-btn"></i>
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
