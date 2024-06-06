import React from "react";
import "./Hero.css";

import sampleImage from "../assets/tmsph-ls-midafood.jpeg";

// Icons
import { PiShareFatLight } from "react-icons/pi";

const NewsProps = ({ title, body, image_url, author, createdAt }) => {
  return (
    <div>
      <div className="article-img">
        <img src={image_url} alt="" />
        <div className="date">
          <p>
            {new Date(createdAt)
              .toLocaleDateString("en-US", { day: "2-digit", month: "short" })
              .toUpperCase()}
          </p>
        </div>
        <div className="parent-btn">
          <button className="share-btn">
            <PiShareFatLight />
            SHARE
          </button>
        </div>
      </div>
      <div className="news-article">
        <h1 className="author">{author}</h1>
        <h2>{title}</h2>
        <p>{body}</p>
        <a href="">READ ARTICLE</a>
      </div>
    </div>
  );
};

export default NewsProps;
