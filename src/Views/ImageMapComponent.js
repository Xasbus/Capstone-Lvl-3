import imageMapResizerMin from "image-map-resizer";
import React, { useEffect } from "react";

export function ImageMapComponent() {
  useEffect(resizeMap, []);
  return (
    <>
      <img
        title="Various accessories"
        alt="assorted accessories"
        width="50%"
        height="30%"
        useMap="#accessoriesMap"
        src="assets\accessories-image-map.jpg"
      />
      <map name="accessoriesMap">
        <area
          title="Controller Info"
          coords="636,490, 669,376, 887,376, 919,491, 908,550, 877,557, 841,494, 712,494, 677,557, 643,544,"
          shape="poly"
          target="_blank"
          href="https://www.playstation.com/en-us/accessories/dualsense-wireless-controller/"
        />
        <area
          title="Camera Info"
          coords="635,57, 914,183"
          shape="rect"
          target="_blank"
          href="https://www.playstation.com/en-us/accessories/hd-camera/"
        />
        <area
          title="Headset Info"
          coords="488,483, 393,474, 365,431, 423,225, 480,146, 505,140, 570,167, 584,274, 590,382"
          shape="poly"
          target="_blank"
          href="https://www.playstation.com/en-us/accessories/pulse-3d-wireless-headset/"
        />
      </map>
    </>
  );
  function resizeMap() {
    imageMapResizerMin();
  }
}
