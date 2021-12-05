import React from "react";

const ArticleCard = ({desc}) => {
  return (
    <div className="article-card-container">
      <figure className="snip1208">
        <div className="article-circle-container">
          <div className="article-card-circle"></div>
          <div className="article-card-circle"></div>
          <p className="article-card-views">10 views</p>
        </div>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample66.jpg"
          alt="sample66"
        />
        <figcaption>
          <p>{desc}</p>
        </figcaption>
        <a href="#"></a>
      </figure>
      <div className="article-footer-triangle-left"></div>
      <div className="article-footer-triangle-right"></div>
      <div className="article-card-footer">
        <a href="#" style={{textDecoration:"none"}}>
          <p className="article-card-footer-text">Read More</p>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
