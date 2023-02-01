import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const  VideComponent = ({videoId, title, aspectRatio})=> {

  return (
    <div>
      
      <LiteYouTubeEmbed
        id={videoId && videoId}
        title={title && title}
        aspectHeight={aspectRatio.heheight ? aspectRatio.height: ''}
        adNetwork={true}
        aspectWidth={aspectRatio.width ? aspectRatio.width: ""}
        // poster="hqdefault"
        // webp
      />
    </div>
  );
}

export default VideComponent;
