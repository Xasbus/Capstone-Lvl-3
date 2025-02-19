import React from "react";

export function StellarBlade(props) {
  const src = props.src;
  const label = props.label;
  const height = props.height;
  const width = props.width;
  const depth = { borderRadius: "10px" };

  return (
    <iframe
      width="80%"
      height="315"
      src="https://www.youtube.com/embed/DSznLWimMlU?si=jMDc8l0LZm8tS7ih"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={depth}
    ></iframe>
  );
}
