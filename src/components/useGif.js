import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGIF = async (tag) => {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(() => imageSrc);
  };
  // Component Did Mount - first render
  useEffect(() => {
    fetchGIF(tag);
  }, []);

  return { gif, fetchGIF };
};

export default useGif;
