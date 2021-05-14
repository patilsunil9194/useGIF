import React, { useState } from "react";
import useGif from "./useGif";
const Tag = () => {
  const [tag, setTag] = useState("god");
  const { gif, fetchGIF } = useGif(tag);
  return (
    <div className="container">
      <h1>Random {tag} GIf</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGIF(tag)}>CLICK FOR NEW</button>
    </div>
  );
};

export default Tag;
