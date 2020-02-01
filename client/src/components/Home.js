import React, { useState } from "react";
import axios from "axios";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

import img1 from "./img/bestbuy-logo.png";
import img2 from "./img/home.png";
import img3 from "./img/comment.png";
import img4 from "./img/bookmark.png";
import img5 from "./img/home-b.png";
import img6 from "./img/yang-profile.jpg";
import img7 from "./img/tag.png";
import img8 from "./img/logout.png";
import img9 from "./img/chart.png";
import img10 from "./img/reward.png";
import img11 from "./img/book.png";
import img12 from "./img/item-showcase-sample.png";
import img13 from "./img/item-showcase-sample.png";
import img14 from "./img/yang-profile.jpg";
import img16 from "./img/target.png";
import img17 from "./img/target-4.png";
import img18 from "./img/target-1.png";
import img19 from "./img/item-showcase-sample.png";
import img20 from "./img/target-3.png";

const Home = () => {
  // const [data, setData] = useState([]);
  // const getData = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:7777/");
  //     console.log(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // setData([...data,res]);
  // };
  const [isRank, setIsRank] = useState(false);
  const [isReward, setIsReward] = useState(false);

  const openReward = () => {
    !isReward && setIsReward(!isReward);
  };

  const openRank = () => {
    !isRank && setIsRank(!isRank);
  };

  const closeReward = () => {
    isReward && setIsReward(!isReward);
  };

  const closeRank = () => {
    isRank && setIsRank(!isRank);
  };

  return (
    <Fragment>
      <div className="page-container">
        <div className="sc-side-nav-bar">
          <img
            className="main-logo"
            src={img1}
            style={{ width: "auto", height: "60px" }}
          />
          <div className="side-bar-category-wrap">
            <div className="side-nav-bar-category">
              <img src={img2} style={{ width: "30px", height: "30px" }} />
              <p>Dashboard</p>
            </div>

            <div className="side-nav-bar-category">
              <img src={img3} style={{ width: "30px", height: "30px" }} />
              <p>Profile</p>
            </div>

            <div className="side-nav-bar-category">
              <img src={img4} style={{ width: "30px", height: "30px" }} />
              <p>Shop</p>
            </div>
          </div>

          <div className="create-product-btn-wrap">
            <Link to="/dashboard" exact>
              <button className="create-product-btn">POST</button>
            </Link>
          </div>
        </div>

        <div className="main-section-container">
          <div className="sc-top-header-bar">
            <div className="header-icon-wrap">
              <img src={img5} width="25px" height="auto" />
              <p className="header-subtext">Dashboard</p>
            </div>
            <div className="profile-icon-wrap profile-wrap">
              <img src={img6} width="25px" height="25px" />
            </div>
            <div className="point-wrap header-icon-wrap">
              <img src={img7} width="25px" height="auto" />
              <p className="header-subtext user-tag-count">45</p>
            </div>
            <div className="header-icon-wrap">
              <img src={img8} width="25px" height="auto" />
              <p className="header-subtext">Logout</p>
            </div>
          </div>

          <div className="main-section">
            <div className="sc-category-user-wrap">
              <div className="sc-category-user">
                <img src={img9} width="100px" height="auto" />
                <p className="sc-category-title">Analysis</p>
                <div className="hor-line"></div>
                <p className="sc-category-subtitle">
                  Analysis the latest sales growth{" "}
                </p>
              </div>

              <div className="sc-category-user rank-box" onClick={openRank}>
                <img src={img10} width="100px" height="auto" />
                <p className="sc-category-title">Rank</p>
                <div className="hor-line"></div>
                <p className="sc-category-subtitle">
                  See what privilege you have next level.
                </p>
              </div>

              <div className="sc-category-user reward-box" onClick={openReward}>
                <img src={img11} width="100px" height="auto" />
                <p className="sc-category-title">Reward</p>
                <div className="hor-line"></div>
                <p className="sc-category-subtitle">
                  Received tags after missions.
                </p>
              </div>
            </div>

            <div className="item-container">
              <p className="item-container-tit">My Inventory</p>
              <div className="sc-item-list-wrap">
                <div className="item-list">
                  <img src={img12} width="auto" height="200px" />
                  <p className="item-name">
                    HP 15.6" Laptop - Silver (Intel Core i3-1005G1/256GB SSD/8GB
                    RAM/Windows 10)
                  </p>
                  <p className="item-price">$499.99</p>
                  <div className="item-rate-wrap">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <p className="item-comment-count">433</p>
                  </div>
                </div>

                <div className="item-list">
                  <img src={img13} width="auto" height="200px" />
                  <p className="item-name">
                    HP 15.6" Laptop - Silver (Intel Core i3-1005G1/256GB SSD/8GB
                    RAM/Windows 10)
                  </p>
                  <p className="item-price">$499.99</p>
                  <div className="item-rate-wrap">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <p className="item-comment-count">433</p>
                  </div>
                </div>

                <div className="item-list">
                  <img src={img13} width="auto" height="200px" />
                  <p className="item-name">
                    HP 15.6" Laptop - Silver (Intel Core i3-1005G1/256GB SSD/8GB
                    RAM/Windows 10)
                  </p>
                  <p className="item-price">$499.99</p>
                  <div className="item-rate-wrap">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <p className="item-comment-count">433</p>
                  </div>
                </div>

                <div className="item-list">
                  <img src={img13} width="auto" height="200px" />
                  <p className="item-name">
                    HP 15.6" Laptop - Silver (Intel Core i3-1005G1/256GB SSD/8GB
                    RAM/Windows 10)
                  </p>
                  <p className="item-price">$499.99</p>
                  <div className="item-rate-wrap">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <p className="item-comment-count">433</p>
                  </div>
                </div>

                <div className="item-list">
                  <img src={img13} width="auto" height="200px" />
                  <p className="item-name">
                    HP 15.6" Laptop - Silver (Intel Core i3-1005G1/256GB SSD/8GB
                    RAM/Windows 10)
                  </p>
                  <p className="item-price">$499.99</p>
                  <div className="item-rate-wrap">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <p className="item-comment-count">433</p>
                  </div>
                </div>

                <div className="item-list">
                  <img src={img13} width="auto" height="200px" />
                  <p className="item-name">
                    HP 15.6" Laptop - Silver (Intel Core i3-1005G1/256GB SSD/8GB
                    RAM/Windows 10)
                  </p>
                  <p className="item-price">$499.99</p>
                  <div className="item-rate-wrap">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <p className="item-comment-count">433</p>
                  </div>
                </div>

                <div className="item-list">
                  <img src={img13} width="auto" height="200px" />
                  <p className="item-name">
                    HP 15.6" Laptop - Silver (Intel Core i3-1005G1/256GB SSD/8GB
                    RAM/Windows 10)
                  </p>
                  <p className="item-price">$499.99</p>
                  <div className="item-rate-wrap">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <p className="item-comment-count">433</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isRank && (
        <div className="uid-rank-info-bg" onClick={closeRank}>
          <div className="uid-rank-info">
            <img
              className="user-profile"
              src={img14}
              width="120px"
              height="auto"
            />
            <p className="user-level">Lv. Senior Seller</p>
            <p>455 exp / 3000 exp</p>
            <div className="user-next-level">
              <p>Next level will unlock...</p>
              <div className="next-level-unlock">
                <img src={img7} width="30px" height="auto" />
                <img src={img7} width="30px" height="auto" />
                <img src={img7} width="30px" height="auto" />
                <img src={img7} width="30px" height="auto" />
              </div>
            </div>
          </div>
        </div>
      )}

      {isReward && (
        <div className="uid-reward-info-bg" onClick={closeReward}>
          <div className="uid-reward-info">
            <div className="uid-warp">
              <img className="reward-goal" src={img16} />
              <div className="reward-content-wrap">
                <p className="reward-name">Contributor</p>
                <p className="reward-info">
                  Complete all the information for an prodcut that being sell
                </p>
                <div className="progress">
                  <div className="bar" style={{ width: "35%" }}>
                    <p className="percent">35%</p>
                  </div>
                </div>
              </div>
              <div className="reward-amount">
                <img className="reward-point" src={img7} />
                <p className="reward-tag-number">50</p>
              </div>
            </div>

            <div className="uid-warp">
              <img className="reward-goal" src={img18} />
              <div className="reward-content-wrap">
                <p className="reward-name">Unstoppable</p>
                <p className="reward-info">
                  Updated product information to the system more than 5
                </p>
                <div className="progress">
                  <div className="bar" style={{ width: "65%" }}>
                    <p className="percent">65%</p>
                  </div>
                </div>
              </div>
              <div className="reward-amount">
                <img className="reward-point" src={img7} />
                <p className="reward-tag-number">100</p>
              </div>
            </div>

            <div className="uid-warp">
              <img className="reward-goal" src={img20} />
              <div className="reward-content-wrap">
                <p className="reward-name">Continous Sell</p>
                <p className="reward-info">
                  Sold your products in a row during the same month{" "}
                </p>
                <div className="progress">
                  <div className="bar" style={{ width: "85%" }}>
                    <p className="percent">85%</p>
                  </div>
                </div>
              </div>
              <div className="reward-amount">
                <img className="reward-point" src={img7} />
                <p className="reward-tag-number">60</p>
              </div>
            </div>

            <div className="uid-warp">
              <img className="reward-goal" src={img17} />
              <div className="reward-content-wrap">
                <p className="reward-name">Top Seller</p>
                <p className="reward-info">
                  Achieved the highest rank during the month
                </p>
                <div className="progress">
                  <div className="bar" style={{ width: "15%" }}>
                    <p className="percent">15%</p>
                  </div>
                </div>
              </div>
              <div className="reward-amount">
                <img className="reward-point" src={img7} />
                <p className="reward-tag-number">10</p>
              </div>
            </div>

            <div className="reward-page">
              <i className="fas fa-circle"></i>
              <i className="far fa-circle"></i>
              <i className="far fa-circle"></i>
              <i className="far fa-circle"></i>
              <i className="far fa-circle"></i>
            </div>
          </div>
        </div>
      )}

      <div className="uid-chart-info-bg">
        <div className="uid-chart-info">
          <img src={img19} style={{ width: "600px", height: "auto" }} />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
