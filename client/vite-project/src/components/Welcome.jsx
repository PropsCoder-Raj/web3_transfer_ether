import React from 'react';
import Bg from "../assets/bg2.mp4";

function Welcome(props) {
  return (
    <>
      <div className="container">
        <svg viewBox="0 0 960 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="100%">ROPSTEN</text>
          </symbol>

          <g className="g-ants">
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
          </g>
        </svg>
        <div className='text-center mt-5 text-white' style={{letterSpacing: "2px"}}>
          It permits testing of blockchain development prior to mainnet release. 
        </div>
      </div>
      <video className='videoTag main-video' autoPlay loop muted>
        <source src={Bg} type='video/mp4' />
      </video>
    </>
  );
}

export default Welcome;