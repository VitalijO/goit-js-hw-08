import throttle from "lodash.throttle";
import Player from "@vimeo/player"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEOSTORAGE_KEY = "videoplayer-current-time";

 


const onPlay = function (data) {
  const current = localStorage.setItem(VIDEOSTORAGE_KEY, data.seconds)
 
};

player.on('timeupdate', throttle(onPlay,1000));

 
 player.setCurrentTime(localStorage.getItem(VIDEOSTORAGE_KEY)) 