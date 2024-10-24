import React from 'react';

function ResultList({ results }) {
  return (
    <div className="results-list">
      {results.map((result, index) => {
        
        const title = result.title || result.data?.title || "No Title";
        const body = result.body || result.data?.selftext || "No Description Available";
        const link = result.link || result.data?.url;

        return (
          <div key={index} className="result-item">
            <h3>{title}</h3>
            <p>{body}</p>
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                Read More
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ResultList;
