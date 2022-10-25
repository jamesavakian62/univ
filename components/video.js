import React from 'react';
import ReactPlayer from 'react-player/youtube';

export default function Video() {
  return (
    <>
      <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br />
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=QFJdYoCfMuo"
          size="300%"
          height="2550"
          width="2550"
        />
      </div>{' '}
    </>
  );
}
