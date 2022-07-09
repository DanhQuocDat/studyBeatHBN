import React from "react";
import ReactPlayer from "react-player";
import "../styles/introScreen.css"
import logo from '../images/hp.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <div>
        <div className="heroContainer">
          <div className="videoContainer2">
            <ReactPlayer
              className="react-player"
              url="//www.youtube.com/watch?v=5wRWniH7rt8?autoplay=1&mute=1&start=200"
              width="100%"
              height="100%"
              position="relative"
              overflow="hidden"
              playing={true}
              loop={true}
              muted={true}
            />
          </div>
        </div>
        <div className="titleContainer">
          <img className="heroLogo" src={logo} alt="" />
          <h1 className="tracking-in-expand-fwd">Bae Nhi Nhi <span>&hearts;</span></h1>
          <h3 className="subTitle"> When I'm with you, everything feels right. </h3>
          <div class="note-position-1 note-amination">&#9835;</div>
          <div class="note-position-2 note-amination animation-delay-2">
            &#9833;
          </div>
          <div className="bubbleContainer">
            <div className="bubble1"></div>
            <div className="bubble2"></div>
            <div className="bubble3"></div>
          </div>
          <div class="wrap">
            <Link to="/music">
                <button class="button">Start Listening</button>
            </Link>         
          </div>
        </div>
        <ReactPlayer 
              className="react-player"
              url="//www.youtube.com/embed/lf6refTxQs8?autoplay=1&mute=1&start=1"
              width="0%"
              height="0%"
              position="absolute"
              top="10000px"
              left="1000px"
              overflow="hidden"
              playing={true}
              loop={true}
            />
      </div>
    )
}

export default Hero