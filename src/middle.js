import React from "react";
import ReactDOM from "react-dom";
import ScrollBar from "./scroll";
import array from "./mockData";

const Photos = () => {
  return (
    <div className="photos-div">
      <div className="flex-img">
        <i class="bi person bi-person-circle"></i>
        <input placeholder="What's On your mind ?"></input>
      </div>
      <div className="post-flex">
        <div className="reel-img">
          <i class="p-img bi bi-camera-reels-fill"></i> <p>Live video</p>
        </div>
        <div className="reel-img">
          <i class="p-img bi bi-image"></i> <p>Photo/video</p>
        </div>
        <div className="reel-img">
          <i class="p-img bi bi-emoji-smile"></i> <p>Live Video</p>
        </div>
      </div>
    </div>
  );
};



const ViratPost = (props) => {
  return (
    <div className="virat-post">
      <div className="virat-prfl">
        <img className="virat-logo" src={props.data.imgInfo}></img>
        <h4>{props.data.heading}</h4>
        <h5>Follow</h5>
        <p>{props.data.date}</p>
      </div>
      <div className="v-data">
        <p>{props.data.para}</p>
        <p>{props.data.story}</p>
        <img className="img-pic" src={props.data.postImg}></img>
      </div>
      <div className="like-btn">
      <div className="like-flex"><i class="bi bi-hand-thumbs-up l-icon"></i> <p>Like</p></div>
      <div className="like-flex"><i class="bi bi-chat-left l-icon"></i><p>Comment</p></div>
      <div className="like-flex"><i class="bi bi-whatsapp l-icon"></i><p>Send</p></div>
      <div className="like-flex"><i class="bi bi-send "></i><p>Share</p></div>
      </div>
    </div>
  );
};

const Posts = () => {
  return (
    <div className="fb-posts">
      <ScrollBar />
      <Photos />
      {array.map((x) => {
        return <ViratPost data={x}/>;
      })}
    </div>
  );
};
export default Posts;
