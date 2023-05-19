import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

// on(event: string, callback: function)

player.on('timeupdate', throttle(onTimeBack, 1000));
function onTimeBack(event) {
  localStorage.setItem(STORAGE_KEY, event.seconds);
}

const currentTime = localStorage.getItem(STORAGE_KEY);

if (currentTime) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}
