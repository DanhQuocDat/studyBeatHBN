import "./styles/index.css";
import "./styles/audioControl.css";
import { useState } from "react";
import AdditionSettings from "./components/additionalInfo";
import PauseImage from "./components/pauseImage";
import Loading from "./components/loadingImage";
import RadioStations from "./components/radioStations";
import github from "./images/github.png";
import play from "./images/playBtn.png";
import AudioControls from "./components/audioControl";
import pauseImg from "./images/pause.png";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";


function App() {
  const [BtnClass, setBtnClass] = useState("PlayPause"); //pause play change
  const [BtnClass2, setBtnClass2] = useState("playBtn");
  const [playPauseImg, setPlayPause] = useState(play);

  const [livestream, playLiveStream] = useState(false);
  const [pauseScreen, setPauseScreen] = useState("pauseScreen");
  const [currentLivestream, setLivestream] = useState(
    "www.youtube.com/watch?v=ci9GSE9iEso"
  );

  const [stationName, setStationName] = useState("HồngNhi");


  const [youtubeChannal, setYoutubeChannal] = useState("");

  const handlePausePlaySwitch = (e) => {
    let className = e.target.className;

    if (className === "PlayPause" || className === "playBtn") {
      setPlayPause(pauseImg);
      setBtnClass("PlayPause2");
      setBtnClass2("playBtn2");
      start();
    } else if (className === "PlayPause2" || className === "playBtn2") {
      setPlayPause(play);
      setBtnClass("PlayPause");
      setBtnClass2("playBtn");
      pause();
    }
  };

   

  const start = () => {
    playLiveStream(false);
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
  };

  const pause = () => {
    setPauseScreen("pauseScreen");
    playLiveStream(false);
  };

  const [video, setVideo] = useState(
    `//www.youtube.com/watch?v=ylQaZdSRrQ0`
  );

  // <------------- Radio Change section -------------->

  const LofiGirlVideo = () => {
    setVideo("//www.youtube.com/watch?v=Wl54qyS_IPI?autoplay=1&mute=1&start=1");
    setStationName("Mây Hồng Đưa Lối");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow"
    );
    setLivestream(
      "www.youtube.com/watch?v=Wl54qyS_IPI"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const AmbientRenders = () => {
    setVideo("//www.youtube.com/watch?v=7O2yHR4ngQI?autoplay=1&mute=1&start=1");
    setStationName("Playlist 1");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UC8WHyfTblB1QhzlJEZawLQw"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=7O2yHR4ngQI"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const IvyRecords = () => {
    setVideo("//www.youtube.com/watch?v=Qk4tk0kn7bU?autoplay=1&mute=1&start=10");
    setStationName("MT Music");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCv7qaGzuEfLhKxAZf4eZONg"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=PMaEpARvGfk"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const ChillHiphop = () => {
    setVideo("//www.youtube.com/watch?v=UpMGmgySP9c");
    setStationName("Cartoon Đô Rê Moon");
    setYoutubeChannal("https://www.youtube.com/c/Chillhopdotcom/videos");
    setLivestream(
      "www.youtube.com/watch?v=UpMGmgySP9c"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const HFiveGOneFunc = () => {
    setVideo("//www.youtube.com/watch?v=MoXAcNoTM9I?autoplay=1&mute=1&start=1");
    setStationName("Playlist Chill 2");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCIPy2w-XdvaU73L3nAK1-0g"
    );
    setLivestream(
      "www.youtube.com/watch?v=GCM4w4fbUPM"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const StudyMD = () => {
    setVideo("//www.youtube.com/watch?v=4X1x_BZ2w0s?autoplay=1&mute=1&start=1");
    setStationName("Haru Haru");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UC5CRP-6oxYenIgBj17CkBZg"
    );
    setLivestream(
      "www.youtube.com/watch?v=4X1x_BZ2w0s"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const astralThrob = () => {
    setVideo("//www.youtube.com/watch?v=hlWiI4xVXKY");
    setStationName("Relaxing Music");
    setYoutubeChannal("https://www.youtube.com/c/AstralThrob");
    setLivestream(
      "www.youtube.com/watch?v=hlWiI4xVXKY"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const chilledCow = () => {
    setVideo("//www.youtube.com/watch?v=UTjftCHR33M");
    setStationName("Lofi Chill");
    setYoutubeChannal("https://www.youtube.com/c/LofiGirl");
    setLivestream(
      "www.youtube.com/watch?v=vFD-ny5q4Qo"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const theJazzHopCafe = () => {
    setVideo("//www.youtube.com/watch?v=dJTC_eVrDyk?autoplay=1&mute=1&start=1");
    setStationName("LOve you 3k");
    setYoutubeChannal("https://www.youtube.com/c/TheJazzHopCaf%C3%A9");
    setLivestream(
      "https://www.youtube.com/watch?v=dJTC_eVrDyk"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const Spinnin = () => {
    setVideo("//www.youtube.com/watch?v=bq6HaGhiYHY?autoplay=1&mute=1&start=0");
    setStationName("ABCDE_ILoveYou");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCpDJl2EmP7Oh90Vylx0dZtA"
    );
    setLivestream(
      "www.youtube.com/watch?v=bq6HaGhiYHY"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const NiceGuys = () => {
    setVideo("//www.youtube.com/watch?v=r4Xstoq18gA?autoplay=1&mute=1&start=1");
    setStationName("Nàng Ơi");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCMmt12UKW571UWtJAgWkWqg"
    );
    setLivestream(
      "www.youtube.com/watch?v=r4Xstoq18gA"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const animeVibe = () => {
    setVideo("//www.youtube.com/watch?v=OQRrY_6iwXE?autoplay=1&mute=1&start=0");
    setStationName("Love_U_ChucaMo");
    setYoutubeChannal("https://www.youtube.com/c/AnimeVibe");
    setLivestream(
      "https://www.youtube.com/watch?v=E74BhJ5aBXs"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  return (
    <div className="interfaceContainer">
      <div className="radioContainer">
        <div className="logo">Chill Music</div>
        <div className="subHeading"></div>
        <div className="radioStationsContainer">
          <RadioStations
            Ambient={AmbientRenders}
            Anime={animeVibe}
            Astral={astralThrob}
            ChillHop={ChillHiphop}
            Cow={chilledCow}
            Spinnin={Spinnin}
            Ivy={IvyRecords}
            High={HFiveGOneFunc}
            Lofi={LofiGirlVideo}
            Study={StudyMD}
            Jazz={theJazzHopCafe}
            Nice={NiceGuys}
          />
        </div>
        <div className="socialsContainer2">
          <div className="socials">
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                window.open("https://www.facebook.com/profile.php?id=100058413981936");
              }}
              className="link"
            >
              <img className="githubLogo" src={github} alt="" />
              FB Hồng Nhi
            </motion.div>
          </div>
        </div>
      </div>
      <div className="audioControlContainer">
        <AudioControls
        plauPause={handlePausePlaySwitch}
        buttonClass={BtnClass}
        playPauseImage={playPauseImg}
        buttonClass2={BtnClass2}
        LiveStreamAudio={currentLivestream}
        LiveStreamPlayPause={livestream}
        />
      </div>
      <div className={pauseScreen}>
        <PauseImage />
        <p style={{ marginTop: "0rem" }}>Music Paused</p>
      </div>
      <AdditionSettings youtube={youtubeChannal} radio={stationName} />
      <div class="videoContainer">
        <ReactPlayer
          className="vid"
          width="140%"
          height="140%"
          loop="true"
          playing={livestream}
          volume="mute"
          url={video}
        />
      </div>

      

      <Loading />
    </div>
  );
}

export default App;
