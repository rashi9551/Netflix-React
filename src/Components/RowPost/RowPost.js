import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../axios";
import { imageUrl,API_KEY } from "../../Constants/Constatnt";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Something Went Wrong");
      });
  }, []);
  const handleVideo = (id) => {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US'`)
      .then((response) => {
        console.log(response);
        if (response.data.results.length !== 0) {
          setUrl(response.data.results[0]);
        } else {
          alert("No Video for this");
        }
      })
      .catch((err)=>{
        alert("No Video for this")
      })
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {console.log(movies)}
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleVideo(movie.id)}
              className={props.isSmall ? "smallPoster" : "poster"}
              src={`${imageUrl + movie.backdrop_path}`}
              alt="post"
            />
          );
        })}
      </div>
      {url && <YouTube videoId={url.key} opts={opts} />}
    </div>
  );
}

export default RowPost;