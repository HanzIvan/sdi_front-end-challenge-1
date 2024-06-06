import React, { useState } from "react";
import "./Hero.css";
import NewsProps from "./NewsProps";

// data
import newsData from "../data/news.json";
import authorsData from "../data/authors.json";

const Hero = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = newsData.slice(indexOfFirstItem, indexOfLastItem)[0];

  // authors
  const getAuthorName = (authorId) => {
    const author = authorsData.find((author) => author.id === authorId);
    return author ? author.name : "Unknown Author";
  };

  // pagination
  const NextPage = () => {
    if (currentPage < newsData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const PrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="news-content">
        {currentItem && (
          <NewsProps
            title={currentItem.title}
            body={currentItem.body}
            image_url={require(`../assets/${currentItem.image_url}`)}
            author={getAuthorName(currentItem.author_id)}
            createdAt={currentItem.created_at}
          />
        )}
        <div className="pagination">
          <button onClick={PrevPage} disabled={currentPage === 1}>
            &lt;
          </button>
          {Array.from({ length: newsData.length }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={NextPage} disabled={currentPage === newsData.length}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
