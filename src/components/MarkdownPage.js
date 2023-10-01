import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import './ProfileStyle.css';

function MarkdownPage() {
  const [id, setId] = useState(0);
  const maxId = 3; //Max amount of files
  const [markdownContent, setMarkdownContent] = useState('');

  const increment = () => {
    // Increment the value of 'id' by one, unless it is higher than 'maxId'.
    if (id < maxId) {
      setId(id + 1);
    }
  };

  const decrement = () => {
    // Decrement the value of 'id' by one, unless it is lower than 0.
    if (id >= 1) {
      setId(id - 1);
    }
  };

  useEffect(() => {
    // Fetch the Markdown file based on the count
    fetch(`/markdown/${id}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch Markdown file for count ${id}`);
        }
        return response.text();
      })
      .then((data) => {
        setMarkdownContent(data);
      })
      .catch((error) => {
        // Handle errors, e.g., file not found
        setMarkdownContent(`Error: ${error.message}`);
      });
  }, [id]);


  return (
    <div>
      <div className='blog-nav'>
        <div className='counter-buttons'>
          <button className='blog-btn' onClick={decrement}>Previous</button>
          <p>Page {id}</p>
          <button className='blog-btn' onClick={increment}>Next</button>
        </div>
      </div>
      <div className='markdown-content'>
        <Markdown>{markdownContent}</Markdown>
      </div>
    </div>
  );
}

export default MarkdownPage;
