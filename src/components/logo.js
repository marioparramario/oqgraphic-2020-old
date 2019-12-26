import React from "react"

const SVG = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 756 167"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
  <path d="M177.9,60.1c6.7,6.4,10,14.3,10,23.6s-3.3,17.3-10,23.6c-6.7,6.4-14.7,9.6-24.2,9.6c-9.4,0-17.5-3.2-24.1-9.6
    c-6.6-6.4-9.9-14.3-9.9-23.6s3.3-17.3,9.9-23.6s14.6-9.6,24.1-9.6C163.2,50.5,171.3,53.7,177.9,60.1z M139.1,68.5
    c-3.9,3.9-5.8,9-5.8,15.1c0,6.2,1.9,11.3,5.8,15.2c3.9,3.9,8.8,5.9,14.8,5.9c5.9,0,10.8-2,14.7-5.9c3.9-3.9,5.9-9,5.9-15.1
    c0-6.1-2-11.2-5.9-15.1c-3.9-3.9-8.8-5.9-14.7-5.9C147.9,62.6,143,64.6,139.1,68.5z"/>
  <path d="M75.4,60.1c6.7,6.4,10,14.3,10,23.6s-3.3,17.3-10,23.6c-6.7,6.4-14.7,9.6-24.2,9.6s-17.5-3.2-24.1-9.6
    c-6.6-6.4-9.9-14.3-9.9-23.6s3.3-17.3,9.9-23.6s14.6-9.6,24.1-9.6S68.8,53.7,75.4,60.1z M36.6,68.5c-3.9,3.9-5.8,9-5.8,15.1
    c0,6.2,1.9,11.3,5.8,15.2c3.9,3.9,8.8,5.9,14.8,5.9c5.9,0,10.8-2,14.7-5.9c3.9-3.9,5.9-9,5.9-15.1c0-6.1-2-11.2-5.9-15.1
    c-3.9-3.9-8.8-5.9-14.7-5.9C45.4,62.6,40.5,64.6,36.6,68.5z"/>
  <path d="M521.3,57.3c4.3,3.8,6.5,8.8,6.5,15c0,6.1-2.2,11.1-6.5,15c-4.3,3.9-9.9,5.8-16.6,5.8h-11v22.6h-13.1V51.7
    h24.1C511.4,51.7,517,53.6,521.3,57.3z M493.7,63.2v18.4h11c3,0,5.4-0.9,7.1-2.6c1.7-1.7,2.6-4,2.6-6.7c0-2.7-0.9-4.9-2.6-6.6
    c-1.7-1.7-4.1-2.5-7.1-2.5H493.7z"/>
  <path d="M436,107.4h-26.2l-3.6,8.3h-14.1l28.6-65.2h4.4l28.5,65.2h-14.1L436,107.4z M422.9,75.1l-8.4,21.6h16.9
    L422.9,75.1z"/>
  <path d="M278.8,64.4l-9.3,7.7c-4.5-6.3-10.5-9.4-17.9-9.4c-6.1,0-11.1,2-14.9,5.9c-3.8,3.9-5.7,9-5.7,15.1
    c0,6.3,2,11.4,5.9,15.4c3.9,4,9.1,6,15.5,6c7.4,0,13.1-2.7,16.9-8v-5.2h-17.4V80.6h30.5v18.9c-2.9,5.2-7.1,9.4-12.5,12.6
    c-5.4,3.2-11.4,4.8-18.1,4.8c-9.6,0-17.8-3.2-24.4-9.6c-6.6-6.4-9.9-14.3-9.9-23.6s3.3-17.3,9.9-23.6c6.6-6.4,14.7-9.6,24.4-9.6
    C263.3,50.5,272.3,55.1,278.8,64.4z"/>
  <path d="M353.4,115.7l-16.6-22.6h-9.6v22.6h-13.1V51.7h24.1c6.8,0,12.3,1.9,16.6,5.7c4.3,3.8,6.5,8.8,6.5,15
    c0,4.1-1,7.7-3,10.8c-2,3.1-4.8,5.6-8.3,7.3l18.2,25.2H353.4z M327.2,81.6h11c3,0,5.4-0.8,7.1-2.5c1.7-1.7,2.6-3.9,2.6-6.7
    c0-2.7-0.9-4.9-2.6-6.6c-1.7-1.7-4.1-2.5-7.1-2.5h-11V81.6z"/>
  <path d="M608.7,115.7h-13.1V88.1h-28.3v27.7h-13.1V51.7h13.1v24.6h28.3V51.7h13.1V115.7z"/>
  <path d="M660.1,115.7H647V51.7h13.1V115.7z"/>
  <path d="M744.3,54.7c5,2.8,8.9,6.7,11.7,11.7l-9.9,7c-4.5-7.2-10.6-10.8-18.3-10.8c-6,0-11,2-14.9,5.9
    c-3.9,3.9-5.8,9-5.8,15.2c0,6.1,1.9,11.2,5.8,15.1c3.9,3.9,8.8,5.9,14.9,5.9c7.7,0,13.8-3.6,18.3-10.8l9.9,7
    c-2.8,5-6.7,8.9-11.6,11.7c-5,2.8-10.5,4.2-16.7,4.2c-9.6,0-17.7-3.2-24.2-9.6c-6.6-6.4-9.9-14.3-9.9-23.6s3.3-17.3,9.9-23.6
    s14.7-9.6,24.3-9.6C733.8,50.5,739.4,51.9,744.3,54.7z"/>
  <polygon points="153.9,141.3 153.9,154.2 205.1,167 205.1,154.2 	"/>
  <polygon points="0.1,0.4 0.1,13.2 51.4,26 51.4,13.2 	"/>
  </svg>
);


export default SVG;