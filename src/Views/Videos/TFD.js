import React, { useEffect } from "react";

export function TFD(props) {
  useEffect(componentDidMount, []);
  const src = props.src;
  const label = props.label;
  const height = props.height;
  const width = props.width;
  const depth = { borderRadius: "10px" };

  return (
    <>
      <iframe
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/wv5L9U_TUHQ?si=c2BUIg5_6cbfykx7"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={depth}
      ></iframe>
    </>
  );
  function componentDidMount() {
    document.title = "Playstation - Games Page";
    console.log("Video Mounted");
    const imgTag1 = document.getElementById("caroTooltip1");
    new bootstrap.Tooltip(imgTag1);
    const imgTag2 = document.getElementById("caroTooltip2");
    new bootstrap.Tooltip(imgTag2);
    const imgTag3 = document.getElementById("caroTooltip3");
    new bootstrap.Tooltip(imgTag3);
  }
}
