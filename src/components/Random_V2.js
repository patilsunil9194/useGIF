import React from "react";
import useGif from "./useGif";
const Random = () => {
  const { gif, fetchGIF } = useGif();
  return (
    <div className="container">
      <h1>Random GIf</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button onClick={fetchGIF}>CLICK FOR NEW</button>
    </div>
  );
};

export default Random;
