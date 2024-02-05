import { atom } from "recoil";
import Beat from "../../assets/Beat.mp3";


export const musicState = atom({
  key: 'musicState',
  default: {
    current: {Beat},
    isPlaying: true,
    duration: 100
  }
})