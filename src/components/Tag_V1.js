import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("god");
  const [gif, setGif] = useState("");

  const fetchGIF = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(() => imageSrc);
  };
  // Component Did Mount - first render
  useEffect(() => {
    fetchGIF(tag);
  }, []);

  const handleClick = () => {
    fetchGIF(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} GIf</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};

export default Tag;
