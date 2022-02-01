import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash/throttle';


const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);
    
const localTime = localStorage.getItem("videoplayer-current-time");


    
const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localTime);
