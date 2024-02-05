import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPlay,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

function Player() {
  //  border-[1px] border-indigo-500
  return (
    <div
      id="main-container"
      className="flex justify-center items-end pb-6 w-full h-screen bg-gradient-to-r from-[#838383] to-[#E8E8E8] "
    >
      <div className="flex w-[32rem] h-[8rem] bg-gradient-to-r from-[#DEDEDE] to-[#E0E0E0] shadow-[5px_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl">
        <section id="player-image"></section>

        <section
          id="player-info"
          className="flex flex-col justify-center font-Virgil w-[70%] p-2 pb-5 pr-6 ml-auto"
        >
          <h3 className="text-xs">Now playing</h3>
          <div id="player-song-info" className="pb-2 ">Linkin Park - A thousand Suns</div>
          <div id="player-slider"></div>
          <div id="player-buttons" className=" flex gap-6 justify-between">
            <FontAwesomeIcon icon={faRepeat} className="size-6"/>
            <FontAwesomeIcon icon={faBackward} className="size-6"/>
            <FontAwesomeIcon icon={faPlay} className="size-6"/>
            <FontAwesomeIcon icon={faForward} className="size-6"/>
            <FontAwesomeIcon icon={faShuffle} className="size-6"/>
          </div>
        </section>

        <div id="player-settings"></div>
        <div id="player-playlist"></div>
      </div>
    </div>
  );
}

export default Player;
