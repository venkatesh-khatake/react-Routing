import React, { useState } from "react";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);

  let handleLike = () => {
    setIsLiked(!isLiked);
    if(isLiked){
        setCount(count + 1);
    }
    // else if(!isLiked){
    //     setCount(count - 1)
    // }
  };
  return (
    <div>
      <h1>Toggle Like Button</h1>
      <h2 onClick={handleLike}>
        {isLiked ? (
          <i className="fa-regular fa-heart"></i>
        ) : (
          <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
        )}
      </h2>
      <h3>Like {count}</h3>
    </div>
  );
};

export default LikeButton;
