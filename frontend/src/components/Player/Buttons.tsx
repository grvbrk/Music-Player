import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPlay,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

type buttonPropsType = {
  handlePlayPause : ()=> void
}

function Buttons(props : buttonPropsType) {
  const {handlePlayPause} = props
  return (
    <>
      <FontAwesomeIcon icon={faRepeat} className="size-6 cursor-pointer" />
      <FontAwesomeIcon icon={faBackward} className="size-6 cursor-pointer" />
      <FontAwesomeIcon
        icon={faPlay}
        className="size-6 cursor-pointer"
        onClick={handlePlayPause}
      />
      <FontAwesomeIcon icon={faForward} className="size-6 cursor-pointer" />
      <FontAwesomeIcon icon={faShuffle} className="size-6 cursor-pointer" />
    </>
  );
}

export default Buttons;
